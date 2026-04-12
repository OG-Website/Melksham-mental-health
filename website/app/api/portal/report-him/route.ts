import { NextResponse } from 'next/server';
import { portalApiErrorResponse } from '@/lib/portalApi';
import { loadCurrentSessionUser } from '@/lib/portalAuth';
import { hasWomenSupportAccess } from '@/lib/portalFocus';
import { createWomenSupportReport } from '@/lib/womenSupport';

const MAX_ATTACHMENTS = 5;
const MAX_ATTACHMENT_BYTES = 4 * 1024 * 1024;
const ALLOWED_ATTACHMENT_TYPES = new Set([
  'image/png',
  'image/jpeg',
  'image/webp',
  'image/gif',
  'image/heic',
  'image/heif',
  'application/pdf',
]);

export async function POST(request: Request) {
  try {
    const { user } = await loadCurrentSessionUser();
    if (!user) {
      return NextResponse.json({ error: 'You must be logged in to submit a report.' }, { status: 401 });
    }
    if (user.isAdmin || !hasWomenSupportAccess(user)) {
      return NextResponse.json({ error: 'This reporting space is only available inside the women\'s support area.' }, { status: 403 });
    }

    const formData = await request.formData();
    const incidentType = String(formData.get('incidentType') ?? '').trim();
    const summary = String(formData.get('summary') ?? '').trim();
    const confirmAccuracy = formData.get('confirmAccuracy');

    if (!incidentType || !summary) {
      return NextResponse.json({ error: 'Incident type and summary are required.' }, { status: 400 });
    }
    if (!confirmAccuracy) {
      return NextResponse.json({ error: 'Please confirm the report details before submitting.' }, { status: 400 });
    }

    const fileEntries = formData
      .getAll('evidenceFiles')
      .filter((entry): entry is File => entry instanceof File && entry.size > 0);

    if (fileEntries.length > MAX_ATTACHMENTS) {
      return NextResponse.json(
        { error: `Please upload no more than ${MAX_ATTACHMENTS} evidence files at a time.` },
        { status: 400 },
      );
    }

    const attachments = [];
    for (const file of fileEntries) {
      if (!ALLOWED_ATTACHMENT_TYPES.has(file.type)) {
        return NextResponse.json(
          { error: `Unsupported file type: ${file.name}. Please use image files or PDF.` },
          { status: 400 },
        );
      }
      if (file.size > MAX_ATTACHMENT_BYTES) {
        return NextResponse.json(
          { error: `${file.name} is larger than 4 MB. Compress it or use an evidence link instead.` },
          { status: 400 },
        );
      }

      attachments.push({
        filename: file.name,
        contentType: file.type,
        sizeBytes: file.size,
        fileBytes: Buffer.from(await file.arrayBuffer()),
      });
    }

    const report = await createWomenSupportReport({
      userId: user.id,
      anonymousToPolice: formData.get('anonymousToPolice') === 'on',
      immediateDanger: formData.get('immediateDanger') === 'on',
      incidentType,
      incidentDateText: String(formData.get('incidentDateText') ?? ''),
      incidentLocation: String(formData.get('incidentLocation') ?? ''),
      platformOrChannel: String(formData.get('platformOrChannel') ?? ''),
      relationshipContext: String(formData.get('relationshipContext') ?? ''),
      suspectName: String(formData.get('suspectName') ?? ''),
      suspectContact: String(formData.get('suspectContact') ?? ''),
      summary,
      messageExcerpt: String(formData.get('messageExcerpt') ?? ''),
      impactStatement: String(formData.get('impactStatement') ?? ''),
      desiredSupport: String(formData.get('desiredSupport') ?? ''),
      evidenceLinks: String(formData.get('evidenceLinks') ?? ''),
      attachments,
    });

    return NextResponse.json({
      ok: true,
      report: {
        id: report.id,
        status: report.status,
        attachmentCount: report.attachments.length,
      },
    });
  } catch (error) {
    return portalApiErrorResponse(error);
  }
}
