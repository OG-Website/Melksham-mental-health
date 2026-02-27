'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaQuestionCircle, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import type { HelpMessage } from '@/lib/helpMessages';

interface Props {
  initialMessages: HelpMessage[];
  userName: string;
}

export default function HelpClient({ initialMessages, userName }: Props) {
  const [messages, setMessages] = useState<HelpMessage[]>(initialMessages);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!subject.trim() || !message.trim()) return;
    setError('');
    setSuccess(false);
    setSubmitting(true);
    try {
      const res = await fetch('/api/portal/help', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, message }),
      });
      const data = await res.json() as { ok?: boolean; message?: HelpMessage; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error ?? 'Failed to send. Please try again.');
      } else {
        if (data.message) setMessages((prev) => [data.message!, ...prev]);
        setSubject('');
        setMessage('');
        setSuccess(true);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
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
        <FaQuestionCircle className="inline mr-3 text-orange-400" />Help &amp; Questions
      </h1>
      <p className="text-zinc-400 text-sm mb-8 max-w-xl mx-auto">
        Hi {userName} — you can send a question or message to the Melksham Mental Health team here.
        We&apos;ll review your message and get back to you as soon as we can.
      </p>

      {/* Send message form */}
      <form onSubmit={handleSubmit} className="border border-orange-500/30 rounded-lg p-5 mb-10 text-left max-w-2xl mx-auto">
        <h2 className="text-white font-black text-sm normal-case tracking-normal mb-4 flex items-center gap-2">
          <FaEnvelope className="text-orange-400" /> Send a Message
        </h2>

        {error && (
          <div className="bg-red-900/40 border border-red-500/60 rounded px-4 py-2 text-red-200 text-sm mb-3">{error}</div>
        )}
        {success && (
          <div className="bg-green-900/40 border border-green-500/60 rounded px-4 py-2 text-green-200 text-sm mb-3 flex items-center gap-2">
            <FaCheckCircle /> Your message has been sent — we&apos;ll get back to you soon.
          </div>
        )}

        <div className="mb-3">
          <label className="block text-zinc-300 text-sm font-semibold mb-1">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            maxLength={200}
            required
            placeholder="What is your question about?"
            className="w-full bg-black/60 border border-zinc-600 focus:border-orange-500 rounded-lg px-3 py-2 text-white placeholder-zinc-600 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-zinc-300 text-sm font-semibold mb-1">Your message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            maxLength={5000}
            required
            placeholder="Write your question or message here…"
            className="w-full bg-black/60 border border-zinc-600 focus:border-orange-500 rounded-lg px-3 py-2 text-white placeholder-zinc-600 focus:outline-none resize-y"
          />
          <div className="flex justify-end text-xs text-zinc-500 mt-1">{message.length}/5000</div>
        </div>

        <button
          type="submit"
          disabled={submitting || !subject.trim() || !message.trim()}
          className="metal-button metal-button--small disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending…' : 'Send Message'}
        </button>
      </form>

      {/* Previous messages */}
      <div className="text-left max-w-2xl mx-auto">
        <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
          Your Previous Messages
        </h2>

        {messages.length === 0 ? (
          <p className="text-zinc-500 text-sm">No messages yet. Use the form above to get in touch.</p>
        ) : (
          <div className="space-y-5">
            {messages.map((msg) => (
              <div key={msg.id} className="border border-zinc-700 rounded-lg px-5 py-4">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="text-white font-semibold text-sm normal-case tracking-normal" style={{ textShadow: 'none', filter: 'none' }}>
                    {msg.subject}
                  </h3>
                  <span className="text-zinc-500 text-xs flex-shrink-0">
                    {new Date(msg.createdAt).toLocaleDateString('en-GB', {
                      day: 'numeric', month: 'short', year: 'numeric',
                    })}
                  </span>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap mb-3">{msg.message}</p>

                {msg.adminReply ? (
                  <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg px-4 py-3 mt-3">
                    <p className="text-orange-300 text-xs font-semibold mb-1 uppercase tracking-wide">Reply from Rob Johnston</p>
                    <p className="text-zinc-200 text-sm leading-relaxed whitespace-pre-wrap">{msg.adminReply}</p>
                    {msg.respondedAt && (
                      <p className="text-zinc-500 text-xs mt-2">
                        {new Date(msg.respondedAt).toLocaleDateString('en-GB', {
                          day: 'numeric', month: 'short', year: 'numeric',
                        })}
                      </p>
                    )}
                  </div>
                ) : (
                  <p className="text-zinc-600 text-xs italic">Awaiting reply…</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-12 border border-zinc-700 rounded-lg px-5 py-4 text-sm text-zinc-400 max-w-2xl mx-auto text-left">
        <p className="text-zinc-300 font-semibold mb-1">Need urgent help?</p>
        <p>
          This form is for non-urgent questions only. If you are in crisis, please call{' '}
          <a href="tel:999" className="text-orange-400 underline">999</a>,{' '}
          <a href="tel:116123" className="text-orange-400 underline">Samaritans 116 123</a> (24/7),
          or the Wiltshire crisis line{' '}
          <a href="tel:08009530110" className="text-orange-400 underline">0800 953 0110</a> (24/7).
          You can also email us directly at{' '}
          <a href="mailto:Melksham-mental-health@outlook.com" className="text-orange-400 underline">
            Melksham-mental-health@outlook.com
          </a>.
        </p>
      </div>
    </div>
  );
}
