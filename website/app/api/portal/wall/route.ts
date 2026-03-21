import { NextResponse } from 'next/server';
import { createPost, deletePost, getRecentPosts } from '@/lib/wall';
import { portalApiErrorResponse } from '@/lib/portalApi';
import { loadCurrentSessionUser } from '@/lib/portalAuth';

export async function GET() {
  try {
    const { user } = await loadCurrentSessionUser();
    if (!user) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }

    const posts = getRecentPosts(100);
    return NextResponse.json({ posts });
  } catch (error) {
    return portalApiErrorResponse(error);
  }
}

export async function POST(request: Request) {
  try {
    const { user } = await loadCurrentSessionUser();
    if (!user) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }

    const body = (await request.json()) as { content?: string; isAnonymous?: boolean };
    const { content, isAnonymous } = body;

    if (!content || typeof content !== 'string' || content.trim().length === 0) {
      return NextResponse.json({ error: 'Post content is required.' }, { status: 400 });
    }
    if (content.trim().length > 1000) {
      return NextResponse.json({ error: 'Post cannot exceed 1000 characters.' }, { status: 400 });
    }

    const post = createPost(user.id, user.name, content, isAnonymous === true);
    return NextResponse.json({ ok: true, post });
  } catch (error) {
    return portalApiErrorResponse(error);
  }
}

export async function DELETE(request: Request) {
  try {
    const { user } = await loadCurrentSessionUser();
    if (!user) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }

    const body = (await request.json()) as { id?: string };
    if (!body.id) {
      return NextResponse.json({ error: 'Post id is required.' }, { status: 400 });
    }

    const ok = deletePost(user.id, body.id, user.isAdmin);
    if (!ok) {
      return NextResponse.json({ error: 'Post not found or access denied.' }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return portalApiErrorResponse(error);
  }
}
