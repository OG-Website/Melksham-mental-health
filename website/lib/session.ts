import type { SessionOptions } from 'iron-session';
import { PortalConfigError, isProductionEnvironment } from '@/lib/portalConfig';

export interface SessionData {
  userId: string;
  email: string;
  name: string;
  isAdmin: boolean;
  isLoggedIn: boolean;
}

const FALLBACK_SECRET = 'mmh-fallback-secret-please-set-session-secret-env-var-32ch';
export const PORTAL_SESSION_COOKIE_NAME = 'mmh-portal-session';

function getSecret(): string {
  const secret = process.env.SESSION_SECRET?.trim();

  if (!secret) {
    if (isProductionEnvironment()) {
      throw new PortalConfigError(
        'SESSION_SECRET must be set in production for portal sessions. ' +
          'Generate a random secret of at least 32 characters and add it to your environment.',
      );
    }

    if (!(globalThis as Record<string, unknown>).__mmhSessionWarnShown) {
      (globalThis as Record<string, unknown>).__mmhSessionWarnShown = true;
      console.warn(
        '[MMH] SESSION_SECRET is not set - using an insecure fallback for development only. ' +
          'Do NOT use this in production.',
      );
    }

    return FALLBACK_SECRET;
  }

  if (isProductionEnvironment() && secret.length < 32) {
    throw new PortalConfigError(
      'SESSION_SECRET must be at least 32 characters long in production.',
    );
  }

  return secret;
}

export function getSessionOptions(): SessionOptions {
  return {
    password: getSecret(),
    cookieName: PORTAL_SESSION_COOKIE_NAME,
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      sameSite: 'lax',
    },
  };
}

export const sessionOptions: SessionOptions = {
  get password() {
    return getSecret();
  },
  cookieName: PORTAL_SESSION_COOKIE_NAME,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax',
  },
} as SessionOptions;
