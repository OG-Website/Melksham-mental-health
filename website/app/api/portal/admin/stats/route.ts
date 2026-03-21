import { NextResponse } from 'next/server';
import fs from 'fs';
import { portalApiErrorResponse } from '@/lib/portalApi';
import { loadCurrentSessionUser } from '@/lib/portalAuth';
import { getPortalUsersStorageDetails } from '@/lib/portalConfig';
import { getPortalUsersTableStats } from '@/lib/portalDb';

function getFileStats(filePath: string): { exists: boolean; sizeBytes: number; entries: number } {
  try {
    if (!fs.existsSync(filePath)) return { exists: false, sizeBytes: 0, entries: 0 };
    const stat = fs.statSync(filePath);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(raw) as unknown[];
    return { exists: true, sizeBytes: stat.size, entries: Array.isArray(parsed) ? parsed.length : 0 };
  } catch {
    return { exists: false, sizeBytes: 0, entries: 0 };
  }
}

export async function GET() {
  try {
    const { user } = await loadCurrentSessionUser();

    if (!user || !user.isAdmin) {
      return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
    }

    const isProduction = process.env.NODE_ENV === 'production';
    const usersStorage = getPortalUsersStorageDetails();
    const diaryPath = process.env.DIARY_DATA_PATH ?? (isProduction ? '/tmp/mmh-diary.json' : 'data/diary.json');
    const wallPath = process.env.WALL_DATA_PATH ?? (isProduction ? '/tmp/mmh-wall.json' : 'data/wall.json');
    const helpPath = process.env.HELP_DATA_PATH ?? (isProduction ? '/tmp/mmh-help.json' : 'data/help-messages.json');

    const usersStats = usersStorage.mode === 'database'
      ? { exists: true, ...(await getPortalUsersTableStats()) }
      : getFileStats(usersStorage.location);

    return NextResponse.json({
      environment: isProduction ? 'production' : 'development',
      storageType: usersStorage.mode === 'database'
        ? 'hybrid: postgres for member accounts, file-based JSON for diary/wall/help'
        : 'file-based JSON (development fallback)',
      storageNote: usersStorage.mode === 'database'
        ? 'Member accounts persist in Postgres via DATABASE_URL. Diary, wall, and help data are still stored in file-based JSON.'
        : usersStorage.description,
      files: {
        users: {
          path: usersStorage.location,
          mode: usersStorage.mode,
          durable: usersStorage.durable,
          ...usersStats,
        },
        diary: { path: diaryPath, mode: 'file', durable: false, ...getFileStats(diaryPath) },
        wall: { path: wallPath, mode: 'file', durable: false, ...getFileStats(wallPath) },
        help: { path: helpPath, mode: 'file', durable: false, ...getFileStats(helpPath) },
      },
      vercelLimits: {
        tmpStorageMax: '512 MB total across file-based /tmp data',
        functionMemory: '1024 MB (Hobby) / 3009 MB (Pro)',
        maxBandwidthHobby: '100 GB / month',
        maxBandwidthPro: '1 TB / month',
        concurrentExecutions: 'Auto-scaled by Vercel',
        note: usersStorage.mode === 'database'
          ? 'Member accounts no longer rely on /tmp. Diary, wall, and help data still do unless they are migrated as well.'
          : 'Production portal auth requires DATABASE_URL. The JSON fallback is intended for local development only.',
      },
      userCapacity: {
        estimatedMaxUsers: usersStorage.mode === 'database'
          ? 'Member-account capacity now depends on your Postgres plan rather than /tmp storage.'
          : 'Local JSON fallback only. Production should use Postgres for durable member accounts.',
        recommendation: 'Use DATABASE_URL for persistent member accounts and add a migration/export step if you need to preserve existing JSON member data.',
      },
    });
  } catch (error) {
    return portalApiErrorResponse(error);
  }
}
