import { NextResponse } from 'next/server';
import { portalApiErrorResponse } from '@/lib/portalApi';
import { savePortalSession } from '@/lib/portalAuth';
import { sendPortalWelcomeEmail } from '@/lib/portalEmail';
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
    const emailResult = await sendPortalWelcomeEmail({
      name: result.user.name,
      email: result.user.email,
    });
    if (!emailResult.sent) {
      console.warn('[MMH portal] Welcome email was not sent:', emailResult.reason ?? 'unknown reason');
    }

    return NextResponse.json({
      ok: true,
      user: {
        id: result.user.id,
        email: result.user.email,
        name: result.user.name,
        isAdmin: result.user.isAdmin,
      },
      welcomeEmailSent: emailResult.sent,
    });
  } catch (error) {
    return portalApiErrorResponse(error);
  }
}
