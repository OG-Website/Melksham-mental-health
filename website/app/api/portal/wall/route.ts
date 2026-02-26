import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { sessionOptions, type SessionData } from '@/lib/session';
import { createPost, deletePost, getRecentPosts } from '@/lib/wall';

/** GET /api/portal/wall — fetch recent wall posts */
export async function GET() {
  try {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
    if (!session.isLoggedIn || !session.userId) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }
    const posts = getRecentPosts(100);
    return NextResponse.json({ posts });
  } catch {
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}

/** POST /api/portal/wall — create a wall post */
export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
    if (!session.isLoggedIn || !session.userId) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }

    const body = await request.json() as { content?: string; isAnonymous?: boolean };
    const { content, isAnonymous } = body;

    if (!content || typeof content !== 'string' || content.trim().length === 0) {
      return NextResponse.json({ error: 'Post content is required.' }, { status: 400 });
    }
    if (content.trim().length > 1000) {
      return NextResponse.json({ error: 'Post cannot exceed 1000 characters.' }, { status: 400 });
    }

    const post = createPost(
      session.userId,
      session.name,
      content,
      isAnonymous === true,
    );
    return NextResponse.json({ ok: true, post });
  } catch {
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}

/** DELETE /api/portal/wall — delete a wall post (own post or admin) */
export async function DELETE(request: Request) {
  try {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
    if (!session.isLoggedIn || !session.userId) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }

    const body = await request.json() as { id?: string };
    if (!body.id) {
      return NextResponse.json({ error: 'Post id is required.' }, { status: 400 });
    }

    const ok = deletePost(session.userId, body.id, session.isAdmin ?? false);
    if (!ok) {
      return NextResponse.json({ error: 'Post not found or access denied.' }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
