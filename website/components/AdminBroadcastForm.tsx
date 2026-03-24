'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Props {
  memberCount: number;
}

interface BroadcastResponse {
  ok?: boolean;
  provider?: string;
  totalRecipients?: number;
  sentCount?: number;
  failedCount?: number;
  error?: string;
}

export function AdminBroadcastForm({ memberCount }: Props) {
  const router = useRouter();
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<BroadcastResponse | null>(null);

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const trimmedSubject = subject.trim();
        const trimmedMessage = message.trim();
        if (!trimmedSubject || !trimmedMessage) return;

        setSubmitting(true);
        setError('');
        setResult(null);

        try {
          const response = await fetch('/api/portal/admin/broadcast', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              subject: trimmedSubject,
              message: trimmedMessage,
            }),
          });

          const data = (await response.json()) as BroadcastResponse;
          if (!response.ok || !data.ok) {
            setError(data.error ?? 'Failed to send broadcast.');
            setResult(data);
            return;
          }

          setResult(data);
          setSubject('');
          setMessage('');
          router.refresh();
        } catch {
          setError('Network error while sending broadcast. Please try again.');
        } finally {
          setSubmitting(false);
        }
      }}
      className="border border-zinc-700 rounded-lg p-4 text-left space-y-3"
    >
      <p className="text-zinc-400 text-xs">
        This sends one portal announcement to all registered members ({memberCount}) using the configured mailbox.
      </p>

      {error && (
        <p className="text-red-400 text-xs">
          {error}
        </p>
      )}

      {result?.ok && (
        <p className="text-green-400 text-xs">
          Broadcast sent to {result.sentCount ?? 0} member{(result.sentCount ?? 0) === 1 ? '' : 's'} via {result.provider}.
        </p>
      )}

      {!result?.ok && result && !error && (
        <p className="text-orange-300 text-xs">
          Sent: {result.sentCount ?? 0} | Failed: {result.failedCount ?? 0}
        </p>
      )}

      <div>
        <label htmlFor="broadcast-subject" className="block text-zinc-300 text-xs font-semibold mb-1">
          Email Subject
        </label>
        <input
          id="broadcast-subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          maxLength={200}
          required
          placeholder="Portal update for all members"
          className="w-full bg-black/60 border border-zinc-600 focus:border-orange-500 rounded px-3 py-2 text-white text-sm placeholder-zinc-600 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="broadcast-message" className="block text-zinc-300 text-xs font-semibold mb-1">
          Message / Notes
        </label>
        <textarea
          id="broadcast-message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={7}
          maxLength={20000}
          required
          placeholder="Write the full update you want all members to receive..."
          className="w-full bg-black/60 border border-zinc-600 focus:border-orange-500 rounded px-3 py-2 text-white text-sm placeholder-zinc-600 focus:outline-none resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={submitting || !subject.trim() || !message.trim() || memberCount === 0}
        className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full border border-orange-500/60 text-orange-300 hover:bg-orange-600/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending...' : 'Send To All Members'}
      </button>
    </form>
  );
}
