import { NextResponse } from 'next/server';
import { createHelpMessage, getAllMessages, getUserMessages, replyToMessage } from '@/lib/helpMessages';
import { portalApiErrorResponse } from '@/lib/portalApi';
import { loadCurrentSessionUser } from '@/lib/portalAuth';

export async function GET() {
  try {
    const { user } = await loadCurrentSessionUser();
    if (!user) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }

    if (user.isAdmin) {
      return NextResponse.json({ messages: getAllMessages() });
    }

    return NextResponse.json({ messages: getUserMessages(user.id) });
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

    const body = (await request.json()) as {
      subject?: unknown;
      message?: unknown;
      messageId?: unknown;
      adminReply?: unknown;
    };

    if (user.isAdmin) {
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

    const subject = body.subject;
    const message = body.message;
    if (typeof subject !== 'string' || !subject.trim()) {
      return NextResponse.json({ error: 'Subject is required.' }, { status: 400 });
    }
    if (typeof message !== 'string' || !message.trim()) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    const created = createHelpMessage(user.id, user.name, user.email, subject, message);
    return NextResponse.json({ ok: true, message: created });
  } catch (error) {
    return portalApiErrorResponse(error);
  }
}
