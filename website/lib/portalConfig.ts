import path from 'path';

export class PortalConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PortalConfigError';
  }
}

export function isProductionEnvironment(): boolean {
  return process.env.NODE_ENV === 'production';
}

export function getDatabaseUrl(): string | null {
  const value = process.env.DATABASE_URL?.trim();
  return value ? value : null;
}

export function usesPortalDatabase(): boolean {
  return getDatabaseUrl() !== null;
}

export function ensurePortalDatabaseConfigured(): void {
  if (!usesPortalDatabase() && isProductionEnvironment()) {
    throw new PortalConfigError(
      'DATABASE_URL is required in production for portal member accounts. ' +
        'Configure Postgres before allowing sign-up or login.',
    );
  }
}

export function getUsersFilePath(): string {
  if (process.env.USERS_DATA_PATH) return process.env.USERS_DATA_PATH;
  return path.join(process.cwd(), 'data', 'portal-users.json');
}

export function getPortalUsersStorageDetails(): {
  mode: 'database' | 'file';
  location: string;
  durable: boolean;
  description: string;
} {
  if (usesPortalDatabase()) {
    return {
      mode: 'database',
      location: 'portal_users (PostgreSQL via DATABASE_URL)',
      durable: true,
      description: 'Member accounts are stored in Postgres and persist across redeploys.',
    };
  }

  return {
    mode: 'file',
    location: getUsersFilePath(),
    durable: false,
    description: isProductionEnvironment()
      ? 'Production requires DATABASE_URL. The local JSON fallback is development-only.'
      : 'Local JSON fallback for development only.',
  };
}
