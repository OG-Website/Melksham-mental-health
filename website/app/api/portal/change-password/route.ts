import { NextResponse } from 'next/server';
import { portalApiErrorResponse } from '@/lib/portalApi';
import { loadCurrentSessionUser } from '@/lib/portalAuth';
import { changePassword } from '@/lib/users';

export async function POST(request: Request) {
  try {
    const { user } = await loadCurrentSessionUser();

    if (!user) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }

    const body = (await request.json()) as {
      currentPassword?: string;
      newPassword?: string;
    };
    const { currentPassword, newPassword } = body;

    if (!currentPassword || !newPassword) {
      return NextResponse.json({ error: 'Current and new passwords are required.' }, { status: 400 });
    }

    const result = await changePassword(user.id, currentPassword, newPassword);
    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return portalApiErrorResponse(error);
  }
}
