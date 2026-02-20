import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { sessionOptions, type SessionData } from '@/lib/session';
import { findUserById, updateInterests } from '@/lib/users';

/** POST /api/portal/interest — toggle a module interest for the logged-in user */
export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);

    if (!session.isLoggedIn || !session.userId) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }
    if (session.isAdmin) {
      return NextResponse.json({ error: 'Admin accounts do not track course interests.' }, { status: 400 });
    }

    const body = await request.json() as { moduleId?: number };
    const { moduleId } = body;
    if (typeof moduleId !== 'number') {
      return NextResponse.json({ error: 'moduleId is required.' }, { status: 400 });
    }

    const user = findUserById(session.userId);
    if (!user) {
      return NextResponse.json({ error: 'User not found.' }, { status: 404 });
    }

    const current = new Set(user.interests);
    if (current.has(moduleId)) {
      current.delete(moduleId);
    } else {
      current.add(moduleId);
    }
    const updated = Array.from(current).sort((a, b) => a - b);
    updateInterests(session.userId, updated);

    return NextResponse.json({ ok: true, interests: updated });
  } catch {
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
