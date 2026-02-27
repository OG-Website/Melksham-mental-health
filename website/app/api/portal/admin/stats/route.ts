import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import fs from 'fs';
import { sessionOptions, type SessionData } from '@/lib/session';

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
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions);

  if (!session.isLoggedIn || !session.isAdmin) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  const isProduction = process.env.NODE_ENV === 'production';

  const usersPath = process.env.USERS_DATA_PATH ?? (isProduction ? '/tmp/mmh-users.json' : 'data/portal-users.json');
  const diaryPath = process.env.DIARY_DATA_PATH ?? (isProduction ? '/tmp/mmh-diary.json' : 'data/diary.json');
  const wallPath = process.env.WALL_DATA_PATH ?? (isProduction ? '/tmp/mmh-wall.json' : 'data/wall.json');
  const helpPath = process.env.HELP_DATA_PATH ?? (isProduction ? '/tmp/mmh-help.json' : 'data/help-messages.json');

  return NextResponse.json({
    environment: isProduction ? 'production' : 'development',
    storageType: 'file-based JSON',
    storageNote: isProduction
      ? 'Data is stored in Vercel /tmp — this is ephemeral and is wiped on each new deployment. Data persists across warm re-invocations of the same serverless instance but is NOT guaranteed to persist between deployments.'
      : 'Data is stored in the local data/ directory (development mode).',
    files: {
      users: { path: usersPath, ...getFileStats(usersPath) },
      diary: { path: diaryPath, ...getFileStats(diaryPath) },
      wall: { path: wallPath, ...getFileStats(wallPath) },
      help: { path: helpPath, ...getFileStats(helpPath) },
    },
    vercelLimits: {
      tmpStorageMax: '512 MB total across all /tmp files',
      functionMemory: '1024 MB (Hobby) / 3009 MB (Pro)',
      maxBandwidthHobby: '100 GB / month',
      maxBandwidthPro: '1 TB / month',
      concurrentExecutions: 'Auto-scaled by Vercel',
      note: 'Vercel Hobby: unlimited serverless function invocations, 100 GB bandwidth/month. /tmp storage is 512 MB shared across all active function instances.',
    },
    userCapacity: {
      estimatedMaxUsers: 'Theoretically unlimited while /tmp storage < 512 MB. A typical user record is ~500 bytes; 512 MB /tmp ≈ ~1,000,000 user records. In practice, Vercel /tmp resets on deploy so all data is lost. Use a persistent database for production.',
      recommendation: 'For production persistence without MongoDB or Railway, use Vercel KV (free tier: 256 MB Redis), Vercel Postgres (free tier: 256 MB), or Turso (free SQLite, 500 MB). Alternatively, export/import the JSON files manually after each deployment.',
    },
  });
}
