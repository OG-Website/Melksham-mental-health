import { getIronSession, type IronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { PORTAL_SESSION_COOKIE_NAME, sessionOptions, type SessionData } from '@/lib/session';
import { findUserById, type User } from '@/lib/users';

type SessionUser = Pick<User, 'id' | 'email' | 'name' | 'isAdmin'>;

export async function getPortalSession(): Promise<IronSession<SessionData>> {
  const cookieStore = await cookies();
  return getIronSession<SessionData>(cookieStore, sessionOptions);
}

export async function savePortalSession(user: SessionUser): Promise<void> {
  const session = await getPortalSession();
  session.userId = user.id;
  session.email = user.email;
  session.name = user.name;
  session.isAdmin = user.isAdmin;
  session.isLoggedIn = true;
  await session.save();
}

export async function loadCurrentSessionUser(): Promise<{
  session: IronSession<SessionData>;
  user: User | null;
}> {
  const session = await getPortalSession();

  if (!session.isLoggedIn || !session.userId) {
    return { session, user: null };
  }

  const user = await findUserById(session.userId);
  if (!user) {
    session.destroy();
    return { session, user: null };
  }

  if (session.email !== user.email || session.name !== user.name || session.isAdmin !== user.isAdmin) {
    session.email = user.email;
    session.name = user.name;
    session.isAdmin = user.isAdmin;
    session.isLoggedIn = true;
    await session.save();
  }

  return { session, user };
}

export async function loadOptionalSessionUser(): Promise<{
  session: IronSession<SessionData> | null;
  user: User | null;
}> {
  const cookieStore = await cookies();
  if (!cookieStore.get(PORTAL_SESSION_COOKIE_NAME)) {
    return { session: null, user: null };
  }

  return loadCurrentSessionUser();
}
