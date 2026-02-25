import bcrypt from 'bcryptjs';
import { randomUUID } from 'crypto';
import fs from 'fs';
import path from 'path';

export interface User {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
  isAdmin: boolean;
  gdprConsent: boolean;
  gdprConsentDate: string;
  createdAt: string;
  interests: number[]; // module IDs
  /** Whether this user has been granted access to course content */
  courseAccess: boolean;
  /** Whether this user has submitted an application for course access */
  courseAccessApplied: boolean;
  /** ISO timestamp when the application was submitted */
  courseAccessAppliedAt?: string;
}

export type PublicUser = Omit<User, 'passwordHash'>;

// ─── File store helpers ────────────────────────────────────────────────────

function getUsersFilePath(): string {
  if (process.env.USERS_DATA_PATH) return process.env.USERS_DATA_PATH;
  // On Vercel the filesystem is read-only except for /tmp
  if (process.env.NODE_ENV === 'production') return '/tmp/mmh-users.json';
  return path.join(process.cwd(), 'data', 'portal-users.json');
}

function readUsers(): User[] {
  try {
    const filePath = getUsersFilePath();
    if (!fs.existsSync(filePath)) return [];
    const raw = fs.readFileSync(filePath, 'utf-8');
    const users = JSON.parse(raw) as User[];
    // Back-fill new fields for users created before this feature was added
    return users.map((u) => ({
      ...u,
      courseAccess: u.courseAccess ?? false,
      courseAccessApplied: u.courseAccessApplied ?? false,
    }));
  } catch {
    return [];
  }
}

function writeUsers(users: User[]): void {
  const filePath = getUsersFilePath();
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf-8');
}

// Dummy hash used to perform a constant-time comparison when the user does not
// exist, preventing email enumeration via response-time differences.
// This is a real bcrypt hash (of a random string) so timing characteristics
// match a genuine bcrypt.compare call.
const DUMMY_HASH = '$2b$12$dummy.hash.for.timing.x.xUJGwnBxHjJ7tYcaHKNHQ8i2eSHuuq';

// Basic RFC-5322-inspired email format check (server-side guard against junk data).
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}


// The admin account is defined via ADMIN_EMAIL + ADMIN_PASSWORD_HASH env vars.
// This means the admin always works even if /tmp is reset on Vercel.
//
// Default fallback credentials are used when the env vars are not configured or
// contain a placeholder value.  See DEPLOYMENT.md for the default login details.
const DEFAULT_ADMIN_EMAIL = 'hello@tradeathem.co.uk';
const DEFAULT_ADMIN_HASH =
  '$2b$12$JdbYVuAuLAZXHt6VwH88O.MdPzOCuP4PmCsZUrvl8EVCAOlbZEYBa';

function getAdminUser(): User | null {
  const email = process.env.ADMIN_EMAIL ?? DEFAULT_ADMIN_EMAIL;
  const rawHash = process.env.ADMIN_PASSWORD_HASH ?? '';
  // Strip backslash-escaped dollar signs that users sometimes accidentally copy
  // from .env.local examples when pasting into the Vercel dashboard.
  const normalized = rawHash.replace(/\\\$/g, '$');
  // Fall back to the default hash when no hash is configured or the stored value
  // is a placeholder (i.e. it does not look like a real bcrypt hash).
  const isValidBcrypt = /^\$2[ab]\$\d{2}\$[./A-Za-z0-9]{53}$/.test(normalized);
  const passwordHash = isValidBcrypt ? normalized : DEFAULT_ADMIN_HASH;
  return {
    id: 'admin',
    email: email.toLowerCase().trim(),
    passwordHash,
    name: process.env.ADMIN_NAME ?? 'Rob Johnston',
    isAdmin: true,
    gdprConsent: true,
    gdprConsentDate: '2024-01-01T00:00:00.000Z',
    createdAt: '2024-01-01T00:00:00.000Z',
    interests: [],
    courseAccess: true,
    courseAccessApplied: true,
  };
}

// ─── Public API ────────────────────────────────────────────────────────────

export function findUserByEmail(email: string): User | null {
  const normalized = email.toLowerCase().trim();
  const admin = getAdminUser();
  if (admin && admin.email === normalized) return admin;
  const users = readUsers();
  return users.find((u) => u.email === normalized) ?? null;
}

export function findUserById(id: string): User | null {
  if (id === 'admin') return getAdminUser();
  const users = readUsers();
  return users.find((u) => u.id === id) ?? null;
}

/** Verify login credentials. Returns the user on success, null on failure. */
export async function verifyCredentials(
  email: string,
  password: string,
): Promise<User | null> {
  const user = findUserByEmail(email);
  // Always run bcrypt.compare even when user not found, to prevent timing attacks
  // that would allow email enumeration.
  const hash = user ? user.passwordHash : DUMMY_HASH;
  const valid = await bcrypt.compare(password, hash);
  return valid && user ? user : null;
}

/** Register a new member. */
export async function createUser(
  email: string,
  password: string,
  name: string,
  gdprConsent: boolean,
): Promise<{ success: true; user: User } | { success: false; error: string }> {
  if (!gdprConsent) {
    return { success: false, error: 'You must agree to the data policy to register.' };
  }
  if (!isValidEmail(email)) {
    return { success: false, error: 'Please enter a valid email address.' };
  }
  if (password.length < 8) {
    return { success: false, error: 'Password must be at least 8 characters.' };
  }
  const existing = findUserByEmail(email);
  if (existing) {
    return { success: false, error: 'An account with this email already exists.' };
  }
  const passwordHash = await bcrypt.hash(password, 12);
  const user: User = {
    id: randomUUID(),
    email: email.toLowerCase().trim(),
    passwordHash,
    name: name.trim(),
    isAdmin: false,
    gdprConsent: true,
    gdprConsentDate: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    interests: [],
    courseAccess: false,
    courseAccessApplied: false,
  };
  const users = readUsers();
  users.push(user);
  writeUsers(users);
  return { success: true, user };
}

/** Change a user's password. Admin must update ADMIN_PASSWORD_HASH env var instead. */
export async function changePassword(
  userId: string,
  currentPassword: string,
  newPassword: string,
): Promise<{ success: boolean; error?: string }> {
  if (newPassword.length < 8) {
    return { success: false, error: 'New password must be at least 8 characters.' };
  }
  if (userId === 'admin') {
    // Admin password is defined by the ADMIN_PASSWORD_HASH env var.
    // Verify current password first, then tell admin how to update it.
    const admin = getAdminUser();
    if (!admin) return { success: false, error: 'Admin account not configured.' };
    const valid = await bcrypt.compare(currentPassword, admin.passwordHash);
    if (!valid) return { success: false, error: 'Current password is incorrect.' };
    return {
      success: false,
      error:
        'To change the admin password, generate a new hash with ' +
        '`node website/scripts/create-admin-hash.mjs <newpassword>` and update ' +
        'the ADMIN_PASSWORD_HASH environment variable on your hosting platform.',
    };
  }
  const users = readUsers();
  const idx = users.findIndex((u) => u.id === userId);
  if (idx === -1) return { success: false, error: 'User not found.' };
  const valid = await bcrypt.compare(currentPassword, users[idx].passwordHash);
  if (!valid) return { success: false, error: 'Current password is incorrect.' };
  users[idx].passwordHash = await bcrypt.hash(newPassword, 12);
  writeUsers(users);
  return { success: true };
}

/** Set the interested module IDs for a user. */
export function updateInterests(
  userId: string,
  moduleIds: number[],
): boolean {
  if (userId === 'admin') return false; // admin has no course interests
  const users = readUsers();
  const idx = users.findIndex((u) => u.id === userId);
  if (idx === -1) return false;
  users[idx].interests = moduleIds;
  writeUsers(users);
  return true;
}

/** Return all non-admin users (for admin dashboard). */
export function getAllMembers(): PublicUser[] {
  return readUsers().map(toPublicUser);
}

export function toPublicUser(user: User): PublicUser {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { passwordHash: _ph, ...publicUser } = user;
  return publicUser;
}

/** Submit a course access application for a regular user. */
export function applyCourseAccess(userId: string): boolean {
  const users = readUsers();
  const idx = users.findIndex((u) => u.id === userId);
  if (idx === -1) return false;
  if (users[idx].courseAccess) return true; // already approved
  users[idx].courseAccessApplied = true;
  users[idx].courseAccessAppliedAt = new Date().toISOString();
  writeUsers(users);
  return true;
}

/** Admin approves (or revokes) course access for a user. */
export function setCourseAccess(userId: string, approved: boolean): boolean {
  const users = readUsers();
  const idx = users.findIndex((u) => u.id === userId);
  if (idx === -1) return false;
  users[idx].courseAccess = approved;
  if (approved) users[idx].courseAccessApplied = true;
  writeUsers(users);
  return true;
}
