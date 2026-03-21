import { NextResponse } from 'next/server';
import { portalApiErrorResponse } from '@/lib/portalApi';
import { savePortalSession } from '@/lib/portalAuth';
import { createUser } from '@/lib/users';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string;
      password?: string;
      name?: string;
      gdprConsent?: boolean;
    };
    const { email, password, name, gdprConsent } = body;

    if (!email || !password || !name) {
      return NextResponse.json({ error: 'Name, email and password are required.' }, { status: 400 });
    }
    if (!gdprConsent) {
      return NextResponse.json({ error: 'You must agree to the data policy to register.' }, { status: 400 });
    }

    const result = await createUser(email, password, name, gdprConsent);
    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    await savePortalSession(result.user);

    return NextResponse.json({
      ok: true,
      user: {
        id: result.user.id,
        email: result.user.email,
        name: result.user.name,
        isAdmin: result.user.isAdmin,
      },
    });
  } catch (error) {
    return portalApiErrorResponse(error);
  }
}
