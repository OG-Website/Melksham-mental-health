import { Pool, type QueryResult, type QueryResultRow } from 'pg';
import { getDatabaseUrl, PortalConfigError } from '@/lib/portalConfig';

declare global {
  var __mmhPortalPool: Pool | undefined;
  var __mmhPortalUsersTableReady: Promise<void> | undefined;
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

export async function ensurePortalUsersTable(): Promise<void> {
  if (!globalThis.__mmhPortalUsersTableReady) {
    globalThis.__mmhPortalUsersTableReady = getPool()
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
          login_count INTEGER NOT NULL DEFAULT 0,
          last_login_at TIMESTAMPTZ NULL
        )
      `)
      .then(() => undefined)
      .catch((error) => {
        globalThis.__mmhPortalUsersTableReady = undefined;
        throw error;
      });
  }

  await globalThis.__mmhPortalUsersTableReady;
}

export async function queryPortalUsers<T extends QueryResultRow = QueryResultRow>(
  text: string,
  values: readonly unknown[] = [],
): Promise<QueryResult<T>> {
  await ensurePortalUsersTable();
  return getPool().query<T>(text, [...values]);
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
