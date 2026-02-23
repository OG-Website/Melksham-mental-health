import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { sessionOptions, type SessionData } from '@/lib/session';
import { createUser } from '@/lib/users';

export async function POST(request: Request) {
  try {
    const body = await request.json() as {
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

    const { user } = result;
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
    session.userId = user.id;
    session.email = user.email;
    session.name = user.name;
    session.isAdmin = false;
    session.isLoggedIn = true;
    await session.save();

    return NextResponse.json({
      ok: true,
      user: { id: user.id, email: user.email, name: user.name, isAdmin: false },
    });
  } catch {
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
