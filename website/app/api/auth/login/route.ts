import { NextResponse } from 'next/server';
import { portalApiErrorResponse } from '@/lib/portalApi';
import { savePortalSession } from '@/lib/portalAuth';
import { recordUserLogin, verifyCredentials } from '@/lib/users';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string; password?: string };
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
    }

    const user = await verifyCredentials(email, password);
    if (!user) {
      return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 });
    }

    await recordUserLogin(user.id);
    await savePortalSession(user);

    return NextResponse.json({
      ok: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
        portalFocus: user.portalFocus,
      },
    });
  } catch (error) {
    return portalApiErrorResponse(error);
  }
}
