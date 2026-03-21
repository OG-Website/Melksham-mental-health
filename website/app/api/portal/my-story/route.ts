import { NextResponse } from 'next/server';
import { portalApiErrorResponse } from '@/lib/portalApi';
import { loadCurrentSessionUser } from '@/lib/portalAuth';
import { updateStory } from '@/lib/users';

export async function GET() {
  try {
    const { user } = await loadCurrentSessionUser();
    if (!user) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }

    return NextResponse.json({ story: user.story ?? '' });
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
    if (user.isAdmin) {
      return NextResponse.json({ error: 'Admin account does not have a story page.' }, { status: 403 });
    }

    const body = (await request.json()) as { story?: unknown };
    const rawStory = body.story;
    if (rawStory !== undefined && rawStory !== null && typeof rawStory !== 'string') {
      return NextResponse.json({ error: 'Invalid request: story must be a string.' }, { status: 400 });
    }

    const story = ((rawStory as string | undefined | null) ?? '').trim();
    const ok = await updateStory(user.id, story);
    if (!ok) return NextResponse.json({ error: 'Could not save story.' }, { status: 500 });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return portalApiErrorResponse(error);
  }
}
