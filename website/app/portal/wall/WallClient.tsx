'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaUsers, FaArrowLeft, FaTrash, FaUserSecret } from 'react-icons/fa';
import type { WallPost } from '@/lib/wall';

interface Props {
  initialPosts: WallPost[];
  currentUserId: string;
  isAdmin: boolean;
}

export default function WallClient({ initialPosts, currentUserId, isAdmin }: Props) {
  const [posts, setPosts] = useState<WallPost[]>(initialPosts);
  const [content, setContent] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function handlePost(e: React.FormEvent) {
    e.preventDefault();
    if (!content.trim()) return;
    setError('');
    setSubmitting(true);
    try {
      const res = await fetch('/api/portal/wall', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, isAnonymous }),
      });
      const data = await res.json() as { ok?: boolean; post?: WallPost; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error ?? 'Failed to post. Please try again.');
      } else if (data.post) {
        setPosts((prev) => [data.post!, ...prev]);
        setContent('');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id: string) {
    setDeletingId(id);
    try {
      const res = await fetch('/api/portal/wall', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p.id !== id));
      }
    } finally {
      setDeletingId(null);
    }
  }

  const canDelete = (post: WallPost) => isAdmin || post.userId === currentUserId;

  return (
    <div className="page-content">
      <div className="flex items-center gap-3 mb-2">
        <Link href="/portal" className="text-zinc-400 hover:text-orange-400 transition-colors">
          <FaArrowLeft />
        </Link>
        <p className="section-kicker">Members Portal</p>
      </div>
      <h1 className="text-3xl md:text-4xl font-black text-white mb-2 normal-case tracking-normal">
        <FaUsers className="inline mr-3 text-orange-400" />Community Wall
      </h1>
      <p className="text-zinc-400 text-sm mb-8 max-w-xl mx-auto">
        A safe space to connect with other members. Share your thoughts, progress,
        or a word of encouragement. All members can see posts — be kind and supportive.
      </p>

      {/* Post form */}
      <form onSubmit={handlePost} className="border border-orange-500/30 rounded-lg p-5 mb-8 text-left">
        <h2 className="text-white font-black text-sm normal-case tracking-normal mb-3">
          Post to the wall
        </h2>
        {error && (
          <div className="bg-red-900/40 border border-red-500/60 rounded px-4 py-2 text-red-200 text-sm mb-3">{error}</div>
        )}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={3}
          maxLength={1000}
          placeholder="Share something with the community…"
          required
          className="w-full bg-black/60 border border-zinc-600 focus:border-orange-500 rounded-lg px-3 py-2 text-white placeholder-zinc-600 focus:outline-none resize-none mb-3"
        />
        <div className="flex items-center justify-between flex-wrap gap-3">
          <label className="flex items-center gap-2 text-zinc-300 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
              className="accent-orange-500"
            />
            <FaUserSecret className="text-zinc-500" />
            Post anonymously
          </label>
          <div className="flex items-center gap-3">
            <span className="text-zinc-600 text-xs">{content.length}/1000</span>
            <button
              type="submit"
              disabled={submitting || !content.trim()}
              className="metal-button metal-button--small disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? 'Posting…' : 'Post'}
            </button>
          </div>
        </div>
      </form>

      {/* Community guidelines reminder */}
      <div className="border border-zinc-700 rounded-lg px-4 py-3 mb-8 text-left text-xs text-zinc-400">
        <span className="text-orange-400 font-semibold">Community Guidelines: </span>
        Be kind, supportive, and respectful. Do not share personal contact details.
        For crisis support call Samaritans on{' '}
        <a href="tel:116123" className="text-orange-400 underline">116 123</a> (24/7, free).
      </div>

      {/* Posts */}
      {posts.length === 0 ? (
        <div className="text-center py-16">
          <FaUsers className="text-zinc-600 text-5xl mx-auto mb-4" />
          <p className="text-zinc-400 text-sm">No posts yet. Be the first to share something!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="border border-zinc-700 rounded-lg px-5 py-4 text-left hover:border-zinc-600 transition-colors">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <span className="text-orange-300 font-semibold text-sm">
                    {post.isAnonymous ? (
                      <><FaUserSecret className="inline mr-1 text-zinc-500" />Anonymous</>
                    ) : (
                      post.userName
                    )}
                  </span>
                  <span className="text-zinc-600 text-xs ml-3">
                    {new Date(post.createdAt).toLocaleString('en-GB', {
                      day: 'numeric', month: 'short', year: 'numeric',
                      hour: '2-digit', minute: '2-digit',
                    })}
                  </span>
                </div>
                {canDelete(post) && (
                  <button
                    onClick={() => handleDelete(post.id)}
                    disabled={deletingId === post.id}
                    aria-label="Delete post"
                    className="text-zinc-600 hover:text-red-400 transition-colors disabled:opacity-40 flex-shrink-0"
                  >
                    <FaTrash className="text-xs" />
                  </button>
                )}
              </div>
              <p className="text-zinc-200 text-sm leading-relaxed whitespace-pre-wrap">{post.content}</p>
            </div>
          ))}
        </div>
      )}

      <p className="text-zinc-600 text-xs mt-8 text-center">
        Posts are visible to all portal members and are moderated.
        Report concerns to{' '}
        <a href="mailto:Melksham-mental-health@outlook.com" className="text-orange-400/70 underline">
          Melksham-mental-health@outlook.com
        </a>.
      </p>
    </div>
  );
}
