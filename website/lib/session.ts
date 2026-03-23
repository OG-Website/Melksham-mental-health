import type { SessionOptions } from 'iron-session';
import { isProductionEnvironment, PortalConfigError } from '@/lib/portalConfig';

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
  const isProd = isProductionEnvironment();

  if (!secret) {
    if (isProd) {
      throw new PortalConfigError(
        'SESSION_SECRET is required in production for secure portal sessions. ' +
          'Set a random 32+ character value before allowing sign-up or login.',
      );
    }

    if (!(globalThis as Record<string, unknown>).__mmhSessionWarnShown) {
      (globalThis as Record<string, unknown>).__mmhSessionWarnShown = true;
      console.warn(
        '[MMH] SESSION_SECRET is not set - using an insecure fallback for development. ' +
          'Set SESSION_SECRET to a random 32+ character value.',
      );
    }
    return FALLBACK_SECRET;
  }

  if (isProd && secret.length < 32) {
    if (!(globalThis as Record<string, unknown>).__mmhSessionShortWarnShown) {
      (globalThis as Record<string, unknown>).__mmhSessionShortWarnShown = true;
      console.warn(
        '[MMH] SESSION_SECRET is shorter than 32 characters in production. ' +
          'Portal sessions still work, but you should rotate to a stronger secret immediately.',
      );
    }
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
