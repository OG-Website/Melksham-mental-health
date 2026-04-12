import { portalApiErrorResponse } from '@/lib/portalApi';
import { loadCurrentSessionUser } from '@/lib/portalAuth';
import { getWomenSupportAttachmentForDownload } from '@/lib/womenSupport';

export async function GET(
  _request: Request,
  context: { params: Promise<{ reportId: string; attachmentId: string }> },
) {
  try {
    const { user } = await loadCurrentSessionUser();
    if (!user) {
      return new Response('Not authenticated.', { status: 401 });
    }

    const { reportId, attachmentId } = await context.params;
    const attachment = await getWomenSupportAttachmentForDownload(reportId, attachmentId, {
      userId: user.id,
      isAdmin: user.isAdmin,
    });

    if (!attachment) {
      return new Response('Attachment not found.', { status: 404 });
    }

    return new Response(new Uint8Array(attachment.fileBytes), {
      status: 200,
      headers: {
        'Content-Type': attachment.contentType,
        'Content-Disposition': `attachment; filename="${attachment.filename.replace(/"/g, '')}"`,
      },
    });
  } catch (error) {
    return portalApiErrorResponse(error);
  }
}
