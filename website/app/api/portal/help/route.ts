import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { sessionOptions, type SessionData } from '@/lib/session';
import { findUserById } from '@/lib/users';
import { createHelpMessage, getUserMessages, getAllMessages, replyToMessage } from '@/lib/helpMessages';

/** GET /api/portal/help — fetch messages (user gets their own, admin gets all) */
export async function GET() {
  try {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
    if (!session.isLoggedIn || !session.userId) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }
    if (session.isAdmin) {
      return NextResponse.json({ messages: getAllMessages() });
    }
    return NextResponse.json({ messages: getUserMessages(session.userId) });
  } catch {
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}

/** POST /api/portal/help — submit a new help message (member) or reply (admin) */
export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
    if (!session.isLoggedIn || !session.userId) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }

    const body = await request.json() as {
      subject?: unknown;
      message?: unknown;
      // Admin reply fields
      messageId?: unknown;
      adminReply?: unknown;
    };

    // Admin replying to a message
    if (session.isAdmin) {
      const messageId = body.messageId;
      const adminReply = body.adminReply;
      if (typeof messageId !== 'string' || !messageId.trim()) {
        return NextResponse.json({ error: 'messageId is required.' }, { status: 400 });
      }
      if (typeof adminReply !== 'string' || !adminReply.trim()) {
        return NextResponse.json({ error: 'adminReply is required.' }, { status: 400 });
      }
      const ok = replyToMessage(messageId, adminReply);
      if (!ok) return NextResponse.json({ error: 'Message not found.' }, { status: 404 });
      return NextResponse.json({ ok: true });
    }

    // Member submitting a new message
    const subject = body.subject;
    const message = body.message;
    if (typeof subject !== 'string' || !subject.trim()) {
      return NextResponse.json({ error: 'Subject is required.' }, { status: 400 });
    }
    if (typeof message !== 'string' || !message.trim()) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    const user = findUserById(session.userId);
    if (!user) return NextResponse.json({ error: 'User not found.' }, { status: 404 });

    const msg = createHelpMessage(session.userId, user.name, user.email, subject, message);
    return NextResponse.json({ ok: true, message: msg });
  } catch {
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
