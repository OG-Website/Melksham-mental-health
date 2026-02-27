'use client';

import { useState } from 'react';

interface Props {
  messageId: string;
  userEmail: string;
  userSubject: string;
  hasReply: boolean;
}

export function AdminHelpReplyForm({ messageId, userEmail, userSubject, hasReply }: Props) {
  const [reply, setReply] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  if (done) {
    return <p className="text-green-400 text-xs mt-2">✓ Reply sent.</p>;
  }

  if (hasReply) {
    return null;
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!reply.trim()) return;
        setError('');
        setSubmitting(true);
        try {
          const res = await fetch('/api/portal/help', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messageId, adminReply: reply }),
          });
          const data = await res.json() as { ok?: boolean; error?: string };
          if (!res.ok || !data.ok) {
            setError(data.error ?? 'Failed to send reply.');
          } else {
            setDone(true);
            setReply('');
          }
        } catch {
          setError('Network error. Please try again.');
        } finally {
          setSubmitting(false);
        }
      }}
      className="mt-3 space-y-2"
    >
      {error && <p className="text-red-400 text-xs">{error}</p>}
      <label className="block text-zinc-400 text-xs font-semibold">Reply via portal:</label>
      <textarea
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        rows={3}
        maxLength={5000}
        required
        placeholder="Type your reply…"
        className="w-full bg-black/60 border border-zinc-600 focus:border-orange-500 rounded px-3 py-2 text-white text-sm placeholder-zinc-600 focus:outline-none resize-y"
      />
      <div className="flex items-center gap-3 flex-wrap">
        <button
          type="submit"
          disabled={submitting || !reply.trim()}
          className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full border border-orange-500/60 text-orange-300 hover:bg-orange-600/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending…' : 'Send Reply'}
        </button>
        <a
          href={`mailto:${encodeURIComponent(userEmail)}?subject=${encodeURIComponent(`Re: ${userSubject}`)}`}
          className="text-zinc-500 text-xs hover:text-orange-400 transition-colors"
        >
          or reply via email ↗
        </a>
      </div>
    </form>
  );
}
