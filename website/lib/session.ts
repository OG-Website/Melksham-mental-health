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
 * Returns the session secret.  Falls back to a built-in value when SESSION_SECRET
 * is not set, so the portal remains functional in misconfigured environments.
 * A prominent warning / error is logged to encourage administrators to set a real
 * secret in their Vercel / hosting environment variables.
 */
function getSecret(): string {
  const env = process.env.SESSION_SECRET;
  if (!env) {
    // Warn once per process regardless of environment
    if (!(globalThis as Record<string, unknown>).__mmhSessionWarnShown) {
      (globalThis as Record<string, unknown>).__mmhSessionWarnShown = true;
      if (process.env.NODE_ENV === 'production') {
        // eslint-disable-next-line no-console
        console.error(
          '[MMH] SESSION_SECRET is not set in production. ' +
            "Using an insecure built-in fallback — set SESSION_SECRET to a secure random " +
            "string of at least 32 characters in your Vercel / hosting environment variables. " +
            'Generate one with: node -e "console.log(require(\'crypto\').randomBytes(48).toString(\'hex\'))"',
        );
      } else {
        // eslint-disable-next-line no-console
        console.warn(
          '[MMH] SESSION_SECRET is not set — using an insecure fallback for development only. ' +
            'Do NOT use this in production.',
        );
      }
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
      // No maxAge — session cookie expires when the browser is closed
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
    // No maxAge — session cookie expires when the browser is closed
  },
} as SessionOptions;

