import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { sessionOptions, type SessionData } from '@/lib/session';
import { findUserById, updateStory } from '@/lib/users';

/** GET /api/portal/my-story — fetch the current user's story */
export async function GET() {
  try {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
    if (!session.isLoggedIn || !session.userId) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }
    const user = findUserById(session.userId);
    if (!user) return NextResponse.json({ error: 'User not found.' }, { status: 404 });
    return NextResponse.json({ story: user.story ?? '' });
  } catch {
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}

/** POST /api/portal/my-story — save the current user's story */
export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
    if (!session.isLoggedIn || !session.userId) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }
    if (session.isAdmin) {
      return NextResponse.json({ error: 'Admin account does not have a story page.' }, { status: 403 });
    }

    const body = await request.json() as { story?: string };
    const story = (body.story ?? '').trim();

    const ok = updateStory(session.userId, story);
    if (!ok) return NextResponse.json({ error: 'Could not save story.' }, { status: 500 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
