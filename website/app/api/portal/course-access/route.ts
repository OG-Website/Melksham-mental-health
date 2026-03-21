import { NextResponse } from 'next/server';
import { portalApiErrorResponse } from '@/lib/portalApi';
import { loadCurrentSessionUser } from '@/lib/portalAuth';
import { applyCourseAccess, setCourseAccess } from '@/lib/users';

export async function POST() {
  try {
    const { user } = await loadCurrentSessionUser();

    if (!user) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }
    if (user.isAdmin) {
      return NextResponse.json({ error: 'Admin already has course access.' }, { status: 400 });
    }

    const ok = await applyCourseAccess(user.id);
    if (!ok) {
      return NextResponse.json({ error: 'Failed to submit application.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return portalApiErrorResponse(error);
  }
}

export async function PATCH(request: Request) {
  try {
    const { user } = await loadCurrentSessionUser();

    if (!user) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }
    if (!user.isAdmin) {
      return NextResponse.json({ error: 'Admin access required.' }, { status: 403 });
    }

    const body = (await request.json()) as { userId?: string; approved?: boolean };
    const { userId, approved } = body;
    if (typeof userId !== 'string' || typeof approved !== 'boolean') {
      return NextResponse.json({ error: 'userId (string) and approved (boolean) are required.' }, { status: 400 });
    }

    const ok = await setCourseAccess(userId, approved);
    if (!ok) {
      return NextResponse.json({ error: 'User not found.' }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return portalApiErrorResponse(error);
  }
}
