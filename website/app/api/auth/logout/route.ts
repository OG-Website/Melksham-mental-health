import { NextResponse } from 'next/server';
import { portalApiErrorResponse } from '@/lib/portalApi';
import { getPortalSession } from '@/lib/portalAuth';

export async function POST() {
  try {
    const session = await getPortalSession();
    session.destroy();
    return NextResponse.json({ ok: true });
  } catch (error) {
    return portalApiErrorResponse(error);
  }
}
