import { NextResponse } from 'next/server';
import { PortalConfigError } from '@/lib/portalConfig';

export function portalApiErrorResponse(error: unknown): NextResponse {
  if (error instanceof PortalConfigError) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  console.error('[MMH portal] Unexpected API error', error);
  return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
}
