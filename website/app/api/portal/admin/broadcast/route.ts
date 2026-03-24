import { NextResponse } from 'next/server';
import { createAdminBroadcastNote } from '@/lib/adminBroadcasts';
import { portalApiErrorResponse } from '@/lib/portalApi';
import { loadCurrentSessionUser } from '@/lib/portalAuth';
import { sendPortalAdminBroadcastEmail } from '@/lib/portalEmail';
import { getAllMembers } from '@/lib/users';

export async function POST(request: Request) {
  try {
    const { user } = await loadCurrentSessionUser();
    if (!user) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }
    if (!user.isAdmin) {
      return NextResponse.json({ error: 'Admin access required.' }, { status: 403 });
    }

    const body = (await request.json()) as { subject?: unknown; message?: unknown };
    if (typeof body.subject !== 'string' || !body.subject.trim()) {
      return NextResponse.json({ error: 'Subject is required.' }, { status: 400 });
    }
    if (typeof body.message !== 'string' || !body.message.trim()) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    const subject = body.subject.trim().slice(0, 200);
    const message = body.message.trim().slice(0, 20000);

    const members = await getAllMembers();
    const recipients = Array.from(
      new Set(members.map((member) => member.email.toLowerCase().trim()).filter(Boolean)),
    );
    if (recipients.length === 0) {
      return NextResponse.json({ error: 'There are no registered members to email yet.' }, { status: 400 });
    }

    const sendResult = await sendPortalAdminBroadcastEmail({
      recipients,
      subject,
      message,
    });

    const sentCount = sendResult.sent ? recipients.length : 0;
    const failedCount = recipients.length - sentCount;

    const note = createAdminBroadcastNote({
      subject,
      message,
      sentByName: user.name,
      sentByEmail: user.email,
      totalRecipients: recipients.length,
      sentCount,
      failedCount,
    });

    if (!sendResult.sent) {
      return NextResponse.json(
        {
          error: sendResult.reason ?? 'Broadcast email failed.',
          totalRecipients: recipients.length,
          sentCount,
          failedCount,
          note,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      ok: true,
      provider: sendResult.provider,
      totalRecipients: recipients.length,
      sentCount,
      failedCount,
      note,
    });
  } catch (error) {
    return portalApiErrorResponse(error);
  }
}
