import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { sessionOptions, type SessionData } from '@/lib/session';
import { applyCourseAccess, setCourseAccess } from '@/lib/users';

/** POST /api/portal/course-access — logged-in user applies for course access */
export async function POST() {
  try {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);

    if (!session.isLoggedIn || !session.userId) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }
    if (session.isAdmin) {
      return NextResponse.json({ error: 'Admin already has course access.' }, { status: 400 });
    }

    const ok = applyCourseAccess(session.userId);
    if (!ok) {
      return NextResponse.json({ error: 'Failed to submit application.' }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}

/** PATCH /api/portal/course-access — admin approves or revokes a user's course access */
export async function PATCH(request: Request) {
  try {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);

    if (!session.isLoggedIn || !session.userId) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }
    if (!session.isAdmin) {
      return NextResponse.json({ error: 'Admin access required.' }, { status: 403 });
    }

    const body = await request.json() as { userId?: string; approved?: boolean };
    const { userId, approved } = body;
    if (typeof userId !== 'string' || typeof approved !== 'boolean') {
      return NextResponse.json({ error: 'userId (string) and approved (boolean) are required.' }, { status: 400 });
    }

    const ok = setCourseAccess(userId, approved);
    if (!ok) {
      return NextResponse.json({ error: 'User not found.' }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
