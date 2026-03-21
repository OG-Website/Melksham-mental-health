import fs from 'node:fs/promises';
import { NextResponse } from 'next/server';
import { ensureCourseDeckGenerated, DECK_MIME_TYPE } from '@/lib/courseDeckGenerator';
import {
  getCourseDeckFilename,
  isCourseDeckAudience,
  normalizeCourseModuleId,
} from '@/lib/courseDecks';
import { loadCurrentSessionUser } from '@/lib/portalAuth';

export const runtime = 'nodejs';

interface RouteProps {
  params: Promise<{
    audience: string;
    id: string;
  }>;
}

export async function GET(_: Request, { params }: RouteProps) {
  const { audience, id } = await params;
  const moduleId = normalizeCourseModuleId(id);

  if (!moduleId || !isCourseDeckAudience(audience)) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const { user } = await loadCurrentSessionUser();
  if (!user) {
    return NextResponse.json({ error: 'Please sign in to download course materials.' }, { status: 401 });
  }

  if (audience === 'tutor' && !user.isAdmin) {
    return NextResponse.json({ error: 'Tutor delivery decks are admin-only.' }, { status: 403 });
  }

  if (audience === 'student' && !user.isAdmin && !user.courseAccess) {
    return NextResponse.json(
      { error: 'Student decks are available after course access has been approved.' },
      { status: 403 },
    );
  }

  const filePath = await ensureCourseDeckGenerated(moduleId, audience);
  const fileBuffer = await fs.readFile(filePath);
  const fileName = getCourseDeckFilename(moduleId, audience);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      'Content-Type': DECK_MIME_TYPE,
      'Content-Disposition': `attachment; filename="${fileName}"`,
      'Cache-Control': 'private, no-store, max-age=0',
    },
  });
}
