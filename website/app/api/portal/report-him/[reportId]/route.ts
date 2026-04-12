import { NextResponse } from 'next/server';
import { portalApiErrorResponse } from '@/lib/portalApi';
import { loadCurrentSessionUser } from '@/lib/portalAuth';
import { updateWomenSupportReportByAdmin } from '@/lib/womenSupport';

export async function PATCH(
  request: Request,
  context: { params: Promise<{ reportId: string }> },
) {
  try {
    const { user } = await loadCurrentSessionUser();
    if (!user || !user.isAdmin) {
      return NextResponse.json({ error: 'Admin access is required.' }, { status: 403 });
    }

    const { reportId } = await context.params;
    const body = (await request.json()) as {
      status?: 'submitted' | 'reviewing' | 'ready';
      adminNotes?: string;
      policeReference?: string;
    };

    if (!body.status) {
      return NextResponse.json({ error: 'Status is required.' }, { status: 400 });
    }

    const ok = await updateWomenSupportReportByAdmin(
      reportId,
      body.status,
      body.adminNotes,
      body.policeReference,
    );

    if (!ok) {
      return NextResponse.json({ error: 'Report not found.' }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return portalApiErrorResponse(error);
  }
}
