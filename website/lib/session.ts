import type { SessionOptions } from 'iron-session';

export interface SessionData {
  userId: string;
  email: string;
  name: string;
  isAdmin: boolean;
  isLoggedIn: boolean;
}

const FALLBACK_SECRET = 'mmh-fallback-secret-please-set-session-secret-env-var-32ch';
const COOKIE_NAME = 'mmh-portal-session';

/**
 * Returns the session secret, enforcing that SESSION_SECRET is set in production.
 * Called lazily at runtime — not at module load / build time — so the build succeeds
 * even without the env var, while preventing insecure deployments at runtime.
 */
function getSecret(): string {
  const env = process.env.SESSION_SECRET;
  if (!env) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error(
        'SESSION_SECRET environment variable is required in production. ' +
          'Set it to a secure random string of at least 32 characters.',
      );
    }
    // Development / test — warn once per process
    if (!(globalThis as Record<string, unknown>).__mmhSessionWarnShown) {
      (globalThis as Record<string, unknown>).__mmhSessionWarnShown = true;
      // eslint-disable-next-line no-console
      console.warn(
        '[MMH] SESSION_SECRET is not set — using an insecure fallback for development only. ' +
          'Do NOT use this in production.',
      );
    }
    return FALLBACK_SECRET;
  }
  return env;
}

/**
 * iron-session options.  We build a fresh object each call so that
 * the secret is always resolved at request time, not module-load time.
 */
export function getSessionOptions(): SessionOptions {
  return {
    password: getSecret(),
    cookieName: COOKIE_NAME,
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    },
  };
}

/** Alias kept for backwards compatibility with existing imports */
export const sessionOptions: SessionOptions = {
  // The password field is set lazily via a getter so it still resolves
  // at request time (iron-session reads it each call).
  get password() {
    return getSecret();
  },
  cookieName: COOKIE_NAME,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
  },
} as SessionOptions;

