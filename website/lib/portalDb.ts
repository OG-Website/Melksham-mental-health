import { Pool, type QueryResult, type QueryResultRow } from 'pg';
import { getDatabaseUrl, PortalConfigError } from '@/lib/portalConfig';

declare global {
  var __mmhPortalPool: Pool | undefined;
  var __mmhPortalSchemaReady: Promise<void> | undefined;
}

function shouldUseSsl(connectionString: string): boolean {
  if (process.env.PGSSLMODE === 'disable') return false;
  return !connectionString.includes('sslmode=disable') && process.env.NODE_ENV === 'production';
}

function getPool(): Pool {
  const connectionString = getDatabaseUrl();
  if (!connectionString) {
    throw new PortalConfigError(
      'DATABASE_URL is required in production for portal member accounts. ' +
        'Configure Postgres before allowing sign-up or login.',
    );
  }

  if (!globalThis.__mmhPortalPool) {
    globalThis.__mmhPortalPool = new Pool({
      connectionString,
      ssl: shouldUseSsl(connectionString) ? { rejectUnauthorized: false } : undefined,
    });
  }

  return globalThis.__mmhPortalPool;
}

export async function ensurePortalSchema(): Promise<void> {
  if (!globalThis.__mmhPortalSchemaReady) {
    globalThis.__mmhPortalSchemaReady = getPool()
      .query(`
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
          portal_focus TEXT NOT NULL DEFAULT 'general',
          login_count INTEGER NOT NULL DEFAULT 0,
          last_login_at TIMESTAMPTZ NULL
        )
      `)
      .then(() =>
        getPool().query(`
          ALTER TABLE portal_users
          ADD COLUMN IF NOT EXISTS portal_focus TEXT NOT NULL DEFAULT 'general'
        `),
      )
      .then(() =>
        getPool().query(`
          CREATE TABLE IF NOT EXISTS portal_women_reports (
            id TEXT PRIMARY KEY,
            user_id TEXT NOT NULL REFERENCES portal_users(id) ON DELETE CASCADE,
            created_at TIMESTAMPTZ NOT NULL,
            updated_at TIMESTAMPTZ NOT NULL,
            anonymous_to_police BOOLEAN NOT NULL DEFAULT FALSE,
            immediate_danger BOOLEAN NOT NULL DEFAULT FALSE,
            incident_type TEXT NOT NULL,
            incident_date_text TEXT NULL,
            incident_location TEXT NULL,
            platform_or_channel TEXT NULL,
            relationship_context TEXT NULL,
            suspect_name TEXT NULL,
            suspect_contact TEXT NULL,
            summary TEXT NOT NULL,
            message_excerpt TEXT NULL,
            impact_statement TEXT NULL,
            desired_support TEXT NULL,
            evidence_links TEXT NULL,
            police_reference TEXT NULL,
            status TEXT NOT NULL DEFAULT 'submitted',
            admin_notes TEXT NULL
          )
        `),
      )
      .then(() =>
        getPool().query(`
          CREATE TABLE IF NOT EXISTS portal_women_report_attachments (
            id TEXT PRIMARY KEY,
            report_id TEXT NOT NULL REFERENCES portal_women_reports(id) ON DELETE CASCADE,
            created_at TIMESTAMPTZ NOT NULL,
            filename TEXT NOT NULL,
            content_type TEXT NOT NULL,
            size_bytes INTEGER NOT NULL,
            file_bytes BYTEA NOT NULL
          )
        `),
      )
      .then(() =>
        getPool().query(`
          CREATE INDEX IF NOT EXISTS portal_women_reports_user_id_idx
          ON portal_women_reports (user_id, created_at DESC)
        `),
      )
      .then(() =>
        getPool().query(`
          CREATE INDEX IF NOT EXISTS portal_women_report_attachments_report_id_idx
          ON portal_women_report_attachments (report_id, created_at ASC)
        `),
      )
      .then(() => undefined)
      .catch((error) => {
        globalThis.__mmhPortalSchemaReady = undefined;
        throw error;
      });
  }

  await globalThis.__mmhPortalSchemaReady;
}

export async function queryPortalDb<T extends QueryResultRow = QueryResultRow>(
  text: string,
  values: readonly unknown[] = [],
): Promise<QueryResult<T>> {
  await ensurePortalSchema();
  return getPool().query<T>(text, [...values]);
}

export async function queryPortalUsers<T extends QueryResultRow = QueryResultRow>(
  text: string,
  values: readonly unknown[] = [],
): Promise<QueryResult<T>> {
  return queryPortalDb<T>(text, values);
}

export async function getPortalUsersTableStats(): Promise<{ entries: number; sizeBytes: number }> {
  const result = await queryPortalUsers<{
    entries: number;
    sizeBytes: number | string | null;
  }>(
    `
      SELECT
        COUNT(*)::int AS "entries",
        COALESCE(pg_total_relation_size('portal_users'), 0)::bigint AS "sizeBytes"
      FROM portal_users
    `,
  );

  const row = result.rows[0];
  return {
    entries: Number(row?.entries ?? 0),
    sizeBytes: Number(row?.sizeBytes ?? 0),
  };
}

export async function getWomenSupportTableStats(): Promise<{
  reportEntries: number;
  attachmentEntries: number;
  sizeBytes: number;
}> {
  const result = await queryPortalDb<{
    reportEntries: number;
    attachmentEntries: number;
    sizeBytes: number | string | null;
  }>(
    `
      SELECT
        (SELECT COUNT(*)::int FROM portal_women_reports) AS "reportEntries",
        (SELECT COUNT(*)::int FROM portal_women_report_attachments) AS "attachmentEntries",
        (
          COALESCE(pg_total_relation_size('portal_women_reports'), 0) +
          COALESCE(pg_total_relation_size('portal_women_report_attachments'), 0)
        )::bigint AS "sizeBytes"
    `,
  );

  const row = result.rows[0];
  return {
    reportEntries: Number(row?.reportEntries ?? 0),
    attachmentEntries: Number(row?.attachmentEntries ?? 0),
    sizeBytes: Number(row?.sizeBytes ?? 0),
  };
}
