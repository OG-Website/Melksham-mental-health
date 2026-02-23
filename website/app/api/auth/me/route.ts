import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { sessionOptions, type SessionData } from '@/lib/session';
import { findUserById } from '@/lib/users';

export async function GET() {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions);

  if (!session.isLoggedIn || !session.userId) {
    return NextResponse.json({ isLoggedIn: false });
  }

  const user = findUserById(session.userId);
  if (!user) {
    // Session references a user that no longer exists — clear it
    session.destroy();
    return NextResponse.json({ isLoggedIn: false });
  }

  return NextResponse.json({
    isLoggedIn: true,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
      interests: user.interests,
    },
  });
}
