import type { SessionOptions } from 'iron-session';

export interface SessionData {
  userId: string;
  email: string;
  name: string;
  isAdmin: boolean;
  isLoggedIn: boolean;
}

// SESSION_SECRET must be at least 32 characters.
// Set in your .env.local or Vercel environment variables.
const secret =
  process.env.SESSION_SECRET ??
  'mmh-fallback-secret-please-set-session-secret-env-var-32ch';

export const sessionOptions: SessionOptions = {
  password: secret,
  cookieName: 'mmh-portal-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  },
};
