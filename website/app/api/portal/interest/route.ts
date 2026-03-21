import { NextResponse } from 'next/server';
import { portalApiErrorResponse } from '@/lib/portalApi';
import { loadCurrentSessionUser } from '@/lib/portalAuth';
import { updateInterests } from '@/lib/users';

export async function POST(request: Request) {
  try {
    const { user } = await loadCurrentSessionUser();

    if (!user) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }
    if (user.isAdmin) {
      return NextResponse.json({ error: 'Admin accounts do not track course interests.' }, { status: 400 });
    }

    const body = (await request.json()) as { moduleId?: number };
    const { moduleId } = body;
    if (typeof moduleId !== 'number' || !Number.isInteger(moduleId) || moduleId < 1 || moduleId > 50) {
      return NextResponse.json({ error: 'moduleId must be an integer between 1 and 50.' }, { status: 400 });
    }

    const current = new Set(user.interests);
    if (current.has(moduleId)) {
      current.delete(moduleId);
    } else {
      current.add(moduleId);
    }

    const updated = Array.from(current).sort((a, b) => a - b);
    const success = await updateInterests(user.id, updated);
    if (!success) {
      return NextResponse.json({ error: 'Failed to update interests.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true, interests: updated });
  } catch (error) {
    return portalApiErrorResponse(error);
  }
}
