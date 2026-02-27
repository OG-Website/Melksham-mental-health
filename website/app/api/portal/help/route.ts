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
      subject?: string;
      message?: string;
      // Admin reply fields
      messageId?: string;
      adminReply?: string;
    };

    // Admin replying to a message
    if (session.isAdmin) {
      const { messageId, adminReply } = body;
      if (!messageId || !adminReply?.trim()) {
        return NextResponse.json({ error: 'messageId and adminReply are required.' }, { status: 400 });
      }
      const ok = replyToMessage(messageId, adminReply);
      if (!ok) return NextResponse.json({ error: 'Message not found.' }, { status: 404 });
      return NextResponse.json({ ok: true });
    }

    // Member submitting a new message
    const { subject, message } = body;
    if (!subject?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Subject and message are required.' }, { status: 400 });
    }

    const user = findUserById(session.userId);
    if (!user) return NextResponse.json({ error: 'User not found.' }, { status: 404 });

    const msg = createHelpMessage(session.userId, user.name, user.email, subject, message);
    return NextResponse.json({ ok: true, message: msg });
  } catch {
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
