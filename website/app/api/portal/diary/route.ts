import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { sessionOptions, type SessionData } from '@/lib/session';
import { createEntry, deleteEntry, getUserEntries } from '@/lib/diary';

/** GET /api/portal/diary — fetch the current user's entries */
export async function GET() {
  try {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
    if (!session.isLoggedIn || !session.userId) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }
    const entries = getUserEntries(session.userId);
    return NextResponse.json({ entries });
  } catch {
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}

/** POST /api/portal/diary — create a new diary entry */
export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
    if (!session.isLoggedIn || !session.userId) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }

    const body = await request.json() as {
      date?: string;
      mood?: number;
      title?: string;
      body?: string;
      symptoms?: string;
      triggers?: string;
      positives?: string;
    };

    const { date, mood, title, body: entryBody, symptoms, triggers, positives } = body;

    if (!date || typeof mood !== 'number' || mood < 1 || mood > 5) {
      return NextResponse.json({ error: 'date and mood (1-5) are required.' }, { status: 400 });
    }

    const entry = createEntry(session.userId, {
      date,
      mood,
      title: (title ?? '').trim().slice(0, 200),
      body: (entryBody ?? '').trim().slice(0, 5000),
      symptoms: (symptoms ?? '').trim().slice(0, 1000),
      triggers: (triggers ?? '').trim().slice(0, 1000),
      positives: (positives ?? '').trim().slice(0, 1000),
    });

    return NextResponse.json({ ok: true, entry });
  } catch {
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}

/** DELETE /api/portal/diary — delete a diary entry */
export async function DELETE(request: Request) {
  try {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
    if (!session.isLoggedIn || !session.userId) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }

    const body = await request.json() as { id?: string };
    if (!body.id) {
      return NextResponse.json({ error: 'Entry id is required.' }, { status: 400 });
    }

    const ok = deleteEntry(session.userId, body.id);
    if (!ok) {
      return NextResponse.json({ error: 'Entry not found.' }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
