import { NextResponse } from 'next/server';
import { createEntry, deleteEntry, getUserEntries } from '@/lib/diary';
import { portalApiErrorResponse } from '@/lib/portalApi';
import { loadCurrentSessionUser } from '@/lib/portalAuth';

export async function GET() {
  try {
    const { user } = await loadCurrentSessionUser();
    if (!user) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }

    const entries = getUserEntries(user.id);
    return NextResponse.json({ entries });
  } catch (error) {
    return portalApiErrorResponse(error);
  }
}

export async function POST(request: Request) {
  try {
    const { user } = await loadCurrentSessionUser();
    if (!user) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }

    const body = (await request.json()) as {
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

    const entry = createEntry(user.id, {
      date,
      mood,
      title: (title ?? '').trim().slice(0, 200),
      body: (entryBody ?? '').trim().slice(0, 5000),
      symptoms: (symptoms ?? '').trim().slice(0, 1000),
      triggers: (triggers ?? '').trim().slice(0, 1000),
      positives: (positives ?? '').trim().slice(0, 1000),
    });

    return NextResponse.json({ ok: true, entry });
  } catch (error) {
    return portalApiErrorResponse(error);
  }
}

export async function DELETE(request: Request) {
  try {
    const { user } = await loadCurrentSessionUser();
    if (!user) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }

    const body = (await request.json()) as { id?: string };
    if (!body.id) {
      return NextResponse.json({ error: 'Entry id is required.' }, { status: 400 });
    }

    const ok = deleteEntry(user.id, body.id);
    if (!ok) {
      return NextResponse.json({ error: 'Entry not found.' }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return portalApiErrorResponse(error);
  }
}
