'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaHeart, FaSave } from 'react-icons/fa';

interface Props {
  initialStory: string;
  userName: string;
}

export default function MyStoryClient({ initialStory, userName }: Props) {
  const [story, setStory] = useState(initialStory);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSaved(false);
    setSaving(true);
    try {
      const res = await fetch('/api/portal/my-story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ story }),
      });
      const data = await res.json() as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error ?? 'Failed to save. Please try again.');
      } else {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="page-content">
      <div className="flex items-center gap-3 mb-2">
        <Link href="/portal" className="text-zinc-400 hover:text-orange-400 transition-colors">
          <FaArrowLeft />
        </Link>
        <p className="section-kicker">Members Portal</p>
      </div>
      <h1 className="text-3xl md:text-4xl font-black text-white mb-2 normal-case tracking-normal">
        <FaHeart className="inline mr-3 text-orange-400" />My Story
      </h1>
      <p className="text-zinc-400 text-sm mb-8 max-w-xl mx-auto">
        This is your space, {userName}. Write your personal journey — what you&apos;ve been through,
        what has helped, and where you are now. This is shared only with the Melksham Mental Health
        team to better understand your needs.
      </p>

      <form onSubmit={handleSave} className="text-left max-w-3xl mx-auto">
        {error && (
          <div className="bg-red-900/40 border border-red-500/60 rounded px-4 py-2 text-red-200 text-sm mb-4">{error}</div>
        )}
        {saved && (
          <div className="bg-green-900/40 border border-green-500/60 rounded px-4 py-2 text-green-200 text-sm mb-4">
            ✓ Your story has been saved.
          </div>
        )}

        <div className="mb-4">
          <label className="block text-zinc-300 text-sm font-semibold mb-2">
            Your story (up to 10,000 characters)
          </label>
          <textarea
            value={story}
            onChange={(e) => setStory(e.target.value.slice(0, 10000))}
            rows={18}
            maxLength={10000}
            placeholder="Share as much or as little as you feel comfortable with. There's no right or wrong way to tell your story…"
            className="w-full bg-black/60 border border-zinc-600 focus:border-orange-500 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none resize-y text-sm leading-relaxed"
          />
          <div className="flex justify-end text-xs text-zinc-500 mt-1">
            {story.length}/10,000
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="metal-button disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <FaSave /> {saving ? 'Saving…' : 'Save My Story'}
        </button>
      </form>

      <div className="mt-12 border border-zinc-700 rounded-lg px-5 py-4 text-left text-sm text-zinc-400 max-w-3xl mx-auto">
        <p className="text-zinc-300 font-semibold mb-1">About this page</p>
        <p>
          Your story is private and is only seen by the Melksham Mental Health team. It helps us
          understand your journey and provide better support. You can update it at any time.
          If you need urgent help, please call{' '}
          <a href="tel:116123" className="text-orange-400 underline">Samaritans on 116 123</a> (24/7, free).
        </p>
      </div>
    </div>
  );
}
