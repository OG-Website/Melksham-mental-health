import bcrypt from 'bcryptjs';
import { randomUUID } from 'crypto';
import fs from 'fs';
import path from 'path';
import { ensurePortalDatabaseConfigured, getUsersFilePath, usesPortalDatabase } from '@/lib/portalConfig';
import { queryPortalUsers } from '@/lib/portalDb';

export interface User {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
  isAdmin: boolean;
  gdprConsent: boolean;
  gdprConsentDate: string;
  createdAt: string;
  interests: number[];
  courseAccess: boolean;
  courseAccessApplied: boolean;
  courseAccessAppliedAt?: string;
  story?: string;
  loginCount: number;
  lastLoginAt?: string;
}

export type PublicUser = Omit<User, 'passwordHash'>;

type UserRecord = Partial<User> & Pick<User, 'id' | 'email' | 'passwordHash' | 'name'>;

const DUMMY_HASH = '$2b$12$dummy.hash.for.timing.x.xUJGwnBxHjJ7tYcaHKNHQ8i2eSHuuq';

const DEFAULT_ADMIN_EMAIL = 'hello@tradeathem.co.uk';
const DEFAULT_ADMIN_HASH =
  '$2b$12$JdbYVuAuLAZXHt6VwH88O.MdPzOCuP4PmCsZUrvl8EVCAOlbZEYBa';

function getMemberStorageMode(): 'database' | 'file' {
  if (usesPortalDatabase()) return 'database';
  ensurePortalDatabaseConfigured();
  return 'file';
}

function toIsoString(value: unknown): string | undefined {
  if (value === undefined || value === null || value === '') return undefined;
  const date = value instanceof Date ? value : new Date(String(value));
  if (Number.isNaN(date.getTime())) return undefined;
  return date.toISOString();
}

function normalizeInterests(value: unknown): number[] {
  if (!Array.isArray(value)) return [];

  return Array.from(
    new Set(
      value
        .map((item) => Number(item))
        .filter((item) => Number.isInteger(item) && item >= 1 && item <= 50),
    ),
  ).sort((a, b) => a - b);
}

function normalizeUser(record: UserRecord): User {
  const createdAt = toIsoString(record.createdAt) ?? new Date().toISOString();
  const gdprConsentDate = toIsoString(record.gdprConsentDate) ?? createdAt;
  const courseAccessAppliedAt = toIsoString(record.courseAccessAppliedAt);
  const lastLoginAt = toIsoString(record.lastLoginAt);
  const loginCount = Math.max(0, Number(record.loginCount ?? 0) || 0);

  return {
    id: record.id,
    email: record.email.toLowerCase().trim(),
    passwordHash: record.passwordHash,
    name: record.name.trim(),
    isAdmin: false,
    gdprConsent: record.gdprConsent ?? true,
    gdprConsentDate,
    createdAt,
    interests: normalizeInterests(record.interests),
    courseAccess: record.courseAccess ?? false,
    courseAccessApplied: record.courseAccessApplied ?? false,
    ...(courseAccessAppliedAt ? { courseAccessAppliedAt } : {}),
    ...(typeof record.story === 'string' ? { story: record.story.slice(0, 10000) } : {}),
    loginCount,
    ...(lastLoginAt ? { lastLoginAt } : {}),
  };
}

function readUsersFromFile(): User[] {
  try {
    const filePath = getUsersFilePath();
    if (!fs.existsSync(filePath)) return [];
    const raw = fs.readFileSync(filePath, 'utf-8');
    const users = JSON.parse(raw) as UserRecord[];
    return Array.isArray(users) ? users.map(normalizeUser) : [];
  } catch {
    return [];
  }
}

function writeUsersToFile(users: User[]): void {
  const filePath = getUsersFilePath();
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf-8');
}

function getAdminUser(): User {
  const email = process.env.ADMIN_EMAIL ?? DEFAULT_ADMIN_EMAIL;
  const rawHash = process.env.ADMIN_PASSWORD_HASH ?? '';
  const normalized = rawHash.replace(/\\\$/g, '$');
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
    loginCount: 0,
  };
}

function toPublicUser(user: User): PublicUser {
  const publicUser = { ...user };
  delete (publicUser as Partial<User>).passwordHash;
  return publicUser as PublicUser;
}

async function listStoredMembers(): Promise<User[]> {
  if (getMemberStorageMode() === 'database') {
    const result = await queryPortalUsers<UserRecord>(
      `
        SELECT
          id,
          email,
          password_hash AS "passwordHash",
          name,
          gdpr_consent AS "gdprConsent",
          gdpr_consent_date AS "gdprConsentDate",
          created_at AS "createdAt",
          interests,
          course_access AS "courseAccess",
          course_access_applied AS "courseAccessApplied",
          course_access_applied_at AS "courseAccessAppliedAt",
          story,
          login_count AS "loginCount",
          last_login_at AS "lastLoginAt"
        FROM portal_users
        ORDER BY created_at ASC, email ASC
      `,
    );

    return result.rows.map(normalizeUser);
  }

  return readUsersFromFile();
}

async function findStoredMemberByEmail(email: string): Promise<User | null> {
  if (getMemberStorageMode() === 'database') {
    const result = await queryPortalUsers<UserRecord>(
      `
        SELECT
          id,
          email,
          password_hash AS "passwordHash",
          name,
          gdpr_consent AS "gdprConsent",
          gdpr_consent_date AS "gdprConsentDate",
          created_at AS "createdAt",
          interests,
          course_access AS "courseAccess",
          course_access_applied AS "courseAccessApplied",
          course_access_applied_at AS "courseAccessAppliedAt",
          story,
          login_count AS "loginCount",
          last_login_at AS "lastLoginAt"
        FROM portal_users
        WHERE email = $1
        LIMIT 1
      `,
      [email.toLowerCase().trim()],
    );

    return result.rows[0] ? normalizeUser(result.rows[0]) : null;
  }

  return readUsersFromFile().find((user) => user.email === email.toLowerCase().trim()) ?? null;
}

async function findStoredMemberById(id: string): Promise<User | null> {
  if (getMemberStorageMode() === 'database') {
    const result = await queryPortalUsers<UserRecord>(
      `
        SELECT
          id,
          email,
          password_hash AS "passwordHash",
          name,
          gdpr_consent AS "gdprConsent",
          gdpr_consent_date AS "gdprConsentDate",
          created_at AS "createdAt",
          interests,
          course_access AS "courseAccess",
          course_access_applied AS "courseAccessApplied",
          course_access_applied_at AS "courseAccessAppliedAt",
          story,
          login_count AS "loginCount",
          last_login_at AS "lastLoginAt"
        FROM portal_users
        WHERE id = $1
        LIMIT 1
      `,
      [id],
    );

    return result.rows[0] ? normalizeUser(result.rows[0]) : null;
  }

  return readUsersFromFile().find((user) => user.id === id) ?? null;
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export async function findUserByEmail(email: string): Promise<User | null> {
  const normalized = email.toLowerCase().trim();
  const admin = getAdminUser();
  if (admin.email === normalized) return admin;
  return findStoredMemberByEmail(normalized);
}

export async function findUserById(id: string): Promise<User | null> {
  if (id === 'admin') return getAdminUser();
  return findStoredMemberById(id);
}

export async function verifyCredentials(
  email: string,
  password: string,
): Promise<User | null> {
  getMemberStorageMode();

  const user = await findUserByEmail(email);
  const hash = user ? user.passwordHash : DUMMY_HASH;
  const valid = await bcrypt.compare(password, hash);
  return valid && user ? user : null;
}

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

  const trimmedName = name.trim();
  if (!trimmedName) {
    return { success: false, error: 'Please enter your full name.' };
  }

  const existing = await findUserByEmail(email);
  if (existing) {
    return { success: false, error: 'An account with this email already exists.' };
  }

  const now = new Date().toISOString();
  const user: User = {
    id: randomUUID(),
    email: email.toLowerCase().trim(),
    passwordHash: await bcrypt.hash(password, 12),
    name: trimmedName,
    isAdmin: false,
    gdprConsent: true,
    gdprConsentDate: now,
    createdAt: now,
    interests: [],
    courseAccess: false,
    courseAccessApplied: false,
    loginCount: 0,
  };

  if (getMemberStorageMode() === 'database') {
    try {
      await queryPortalUsers(
        `
          INSERT INTO portal_users (
            id,
            email,
            password_hash,
            name,
            gdpr_consent,
            gdpr_consent_date,
            created_at,
            interests,
            course_access,
            course_access_applied,
            story,
            login_count
          ) VALUES (
            $1, $2, $3, $4, $5, $6::timestamptz, $7::timestamptz, $8::int[], $9, $10, $11, $12
          )
        `,
        [
          user.id,
          user.email,
          user.passwordHash,
          user.name,
          user.gdprConsent,
          user.gdprConsentDate,
          user.createdAt,
          user.interests,
          user.courseAccess,
          user.courseAccessApplied,
          user.story ?? null,
          user.loginCount,
        ],
      );
    } catch (error) {
      if ((error as { code?: string }).code === '23505') {
        return { success: false, error: 'An account with this email already exists.' };
      }
      throw error;
    }
  } else {
    const users = readUsersFromFile();
    users.push(user);
    writeUsersToFile(users);
  }

  return { success: true, user };
}

export async function changePassword(
  userId: string,
  currentPassword: string,
  newPassword: string,
): Promise<{ success: boolean; error?: string }> {
  if (newPassword.length < 8) {
    return { success: false, error: 'New password must be at least 8 characters.' };
  }

  if (userId === 'admin') {
    const admin = getAdminUser();
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

  const user = await findStoredMemberById(userId);
  if (!user) return { success: false, error: 'User not found.' };

  const valid = await bcrypt.compare(currentPassword, user.passwordHash);
  if (!valid) return { success: false, error: 'Current password is incorrect.' };

  const nextHash = await bcrypt.hash(newPassword, 12);

  if (getMemberStorageMode() === 'database') {
    await queryPortalUsers(
      'UPDATE portal_users SET password_hash = $2 WHERE id = $1',
      [userId, nextHash],
    );
  } else {
    const users = readUsersFromFile();
    const index = users.findIndex((entry) => entry.id === userId);
    if (index === -1) return { success: false, error: 'User not found.' };
    users[index].passwordHash = nextHash;
    writeUsersToFile(users);
  }

  return { success: true };
}

export async function updateInterests(userId: string, moduleIds: number[]): Promise<boolean> {
  if (userId === 'admin') return false;

  const interests = normalizeInterests(moduleIds);

  if (getMemberStorageMode() === 'database') {
    const result = await queryPortalUsers(
      'UPDATE portal_users SET interests = $2::int[] WHERE id = $1',
      [userId, interests],
    );
    return (result.rowCount ?? 0) > 0;
  }

  const users = readUsersFromFile();
  const index = users.findIndex((entry) => entry.id === userId);
  if (index === -1) return false;
  users[index].interests = interests;
  writeUsersToFile(users);
  return true;
}

export async function getAllMembers(): Promise<PublicUser[]> {
  const users = await listStoredMembers();
  return users.map(toPublicUser);
}

export async function applyCourseAccess(userId: string): Promise<boolean> {
  if (getMemberStorageMode() === 'database') {
    const result = await queryPortalUsers(
      `
        UPDATE portal_users
        SET
          course_access_applied = TRUE,
          course_access_applied_at = COALESCE(course_access_applied_at, NOW())
        WHERE id = $1
      `,
      [userId],
    );
    return (result.rowCount ?? 0) > 0;
  }

  const users = readUsersFromFile();
  const index = users.findIndex((entry) => entry.id === userId);
  if (index === -1) return false;
  if (!users[index].courseAccessAppliedAt) {
    users[index].courseAccessAppliedAt = new Date().toISOString();
  }
  users[index].courseAccessApplied = true;
  writeUsersToFile(users);
  return true;
}

export async function updateStory(userId: string, story: string): Promise<boolean> {
  if (userId === 'admin') return false;

  const nextStory = story.trim().slice(0, 10000);

  if (getMemberStorageMode() === 'database') {
    const result = await queryPortalUsers(
      'UPDATE portal_users SET story = $2 WHERE id = $1',
      [userId, nextStory || null],
    );
    return (result.rowCount ?? 0) > 0;
  }

  const users = readUsersFromFile();
  const index = users.findIndex((entry) => entry.id === userId);
  if (index === -1) return false;
  users[index].story = nextStory;
  writeUsersToFile(users);
  return true;
}

export async function setCourseAccess(userId: string, approved: boolean): Promise<boolean> {
  if (getMemberStorageMode() === 'database') {
    const result = await queryPortalUsers(
      `
        UPDATE portal_users
        SET
          course_access = $2,
          course_access_applied = CASE WHEN $2 THEN TRUE ELSE course_access_applied END
        WHERE id = $1
      `,
      [userId, approved],
    );
    return (result.rowCount ?? 0) > 0;
  }

  const users = readUsersFromFile();
  const index = users.findIndex((entry) => entry.id === userId);
  if (index === -1) return false;
  users[index].courseAccess = approved;
  if (approved) users[index].courseAccessApplied = true;
  writeUsersToFile(users);
  return true;
}

export async function recordUserLogin(userId: string): Promise<void> {
  if (userId === 'admin') return;

  if (getMemberStorageMode() === 'database') {
    await queryPortalUsers(
      `
        UPDATE portal_users
        SET
          login_count = login_count + 1,
          last_login_at = NOW()
        WHERE id = $1
      `,
      [userId],
    );
    return;
  }

  const users = readUsersFromFile();
  const index = users.findIndex((entry) => entry.id === userId);
  if (index === -1) return;
  users[index].loginCount += 1;
  users[index].lastLoginAt = new Date().toISOString();
  writeUsersToFile(users);
}
