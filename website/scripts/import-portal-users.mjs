import fs from 'fs';
import path from 'path';
import { Pool } from 'pg';

function usage() {
  console.error('Usage: node scripts/import-portal-users.mjs <path-to-users-json>');
  process.exit(1);
}

function toIsoString(value) {
  if (value === undefined || value === null || value === '') return null;
  const date = value instanceof Date ? value : new Date(String(value));
  if (Number.isNaN(date.getTime())) return null;
  return date.toISOString();
}

function normalizeInterests(value) {
  if (!Array.isArray(value)) return [];

  return Array.from(
    new Set(
      value
        .map((item) => Number(item))
        .filter((item) => Number.isInteger(item) && item >= 1 && item <= 50),
    ),
  ).sort((a, b) => a - b);
}

function normalizeUser(user) {
  const createdAt = toIsoString(user.createdAt) ?? new Date().toISOString();
  const gdprConsentDate = toIsoString(user.gdprConsentDate) ?? createdAt;

  return {
    id: String(user.id),
    email: String(user.email ?? '').toLowerCase().trim(),
    passwordHash: String(user.passwordHash ?? ''),
    name: String(user.name ?? '').trim(),
    gdprConsent: user.gdprConsent !== false,
    gdprConsentDate,
    createdAt,
    interests: normalizeInterests(user.interests),
    courseAccess: user.courseAccess === true,
    courseAccessApplied: user.courseAccessApplied === true,
    courseAccessAppliedAt: toIsoString(user.courseAccessAppliedAt),
    story: typeof user.story === 'string' ? user.story.slice(0, 10000) : null,
    loginCount: Math.max(0, Number(user.loginCount ?? 0) || 0),
    lastLoginAt: toIsoString(user.lastLoginAt),
  };
}

const sourceArg = process.argv[2];
if (!sourceArg) usage();

const databaseUrl = process.env.DATABASE_URL?.trim();
if (!databaseUrl) {
  console.error('DATABASE_URL is required to import portal users.');
  process.exit(1);
}

const sourcePath = path.resolve(process.cwd(), sourceArg);
if (!fs.existsSync(sourcePath)) {
  console.error(`File not found: ${sourcePath}`);
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(sourcePath, 'utf-8'));
if (!Array.isArray(raw)) {
  console.error('Expected a JSON array of users.');
  process.exit(1);
}

const users = raw
  .filter((user) => user && typeof user === 'object')
  .filter((user) => user.isAdmin !== true && user.id !== 'admin')
  .map(normalizeUser)
  .filter((user) => user.email && user.passwordHash && user.name);

const pool = new Pool({
  connectionString: databaseUrl,
  ssl:
    process.env.PGSSLMODE === 'disable' || databaseUrl.includes('sslmode=disable')
      ? undefined
      : process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : undefined,
});

try {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS portal_users (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      name TEXT NOT NULL,
      gdpr_consent BOOLEAN NOT NULL DEFAULT TRUE,
      gdpr_consent_date TIMESTAMPTZ NOT NULL,
      created_at TIMESTAMPTZ NOT NULL,
      interests INTEGER[] NOT NULL DEFAULT '{}',
      course_access BOOLEAN NOT NULL DEFAULT FALSE,
      course_access_applied BOOLEAN NOT NULL DEFAULT FALSE,
      course_access_applied_at TIMESTAMPTZ NULL,
      story TEXT NULL,
      login_count INTEGER NOT NULL DEFAULT 0,
      last_login_at TIMESTAMPTZ NULL
    )
  `);

  let imported = 0;

  for (const user of users) {
    await pool.query(
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
          course_access_applied_at,
          story,
          login_count,
          last_login_at
        ) VALUES (
          $1, $2, $3, $4, $5, $6::timestamptz, $7::timestamptz, $8::int[], $9, $10, $11::timestamptz, $12, $13, $14::timestamptz
        )
        ON CONFLICT (email) DO UPDATE
        SET
          id = EXCLUDED.id,
          password_hash = EXCLUDED.password_hash,
          name = EXCLUDED.name,
          gdpr_consent = EXCLUDED.gdpr_consent,
          gdpr_consent_date = EXCLUDED.gdpr_consent_date,
          created_at = EXCLUDED.created_at,
          interests = EXCLUDED.interests,
          course_access = EXCLUDED.course_access,
          course_access_applied = EXCLUDED.course_access_applied,
          course_access_applied_at = EXCLUDED.course_access_applied_at,
          story = EXCLUDED.story,
          login_count = EXCLUDED.login_count,
          last_login_at = EXCLUDED.last_login_at
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
        user.courseAccessAppliedAt,
        user.story,
        user.loginCount,
        user.lastLoginAt,
      ],
    );

    imported += 1;
  }

  console.log(`Imported ${imported} portal users from ${sourcePath}`);
} finally {
  await pool.end();
}
