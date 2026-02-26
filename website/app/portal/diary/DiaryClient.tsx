'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBook, FaPlus, FaTimes, FaArrowLeft, FaSmile, FaMeh, FaFrown, FaTrash } from 'react-icons/fa';
import type { DiaryEntry } from '@/lib/diary';

const MOOD_LABELS = ['', 'Very Low', 'Low', 'Neutral', 'Good', 'Great'];
const MOOD_COLOURS = ['', 'text-red-400', 'text-orange-400', 'text-yellow-400', 'text-green-400', 'text-emerald-400'];

function MoodIcon({ mood }: { mood: number }) {
  if (mood <= 2) return <FaFrown className={mood === 1 ? 'text-red-400' : 'text-orange-400'} />;
  if (mood === 3) return <FaMeh className="text-yellow-400" />;
  return <FaSmile className={mood === 4 ? 'text-green-400' : 'text-emerald-400'} />;
}

interface Props {
  initialEntries: DiaryEntry[];
  userName: string;
}

export default function DiaryClient({ initialEntries, userName }: Props) {
  const [entries, setEntries] = useState<DiaryEntry[]>(initialEntries);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const today = new Date().toISOString().slice(0, 10);

  const [form, setForm] = useState({
    date: today,
    mood: 3,
    title: '',
    body: '',
    symptoms: '',
    triggers: '',
    positives: '',
  });

  function resetForm() {
    setForm({ date: today, mood: 3, title: '', body: '', symptoms: '', triggers: '', positives: '' });
    setError('');
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSaving(true);
    try {
      const res = await fetch('/api/portal/diary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json() as { ok?: boolean; entry?: DiaryEntry; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error ?? 'Failed to save entry. Please try again.');
      } else if (data.entry) {
        setEntries((prev) => [data.entry!, ...prev]);
        resetForm();
        setShowForm(false);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    setDeletingId(id);
    try {
      const res = await fetch('/api/portal/diary', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        setEntries((prev) => prev.filter((e) => e.id !== id));
      }
    } finally {
      setDeletingId(null);
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
        <FaBook className="inline mr-3 text-orange-400" />My Diary
      </h1>
      <p className="text-zinc-400 text-sm mb-8">
        This is your private safe space, {userName}. Only you can see these entries.
        Record your thoughts, feelings, symptoms, and triggers here.
      </p>

      <div className="flex justify-end mb-6">
        {showForm ? (
          <button
            onClick={() => { setShowForm(false); resetForm(); }}
            className="metal-button metal-button--small"
            style={{ background: 'linear-gradient(180deg,#4a4a4a 0%,#2a2a2a 100%)', borderColor: '#666' }}
          >
            <FaTimes /> Cancel
          </button>
        ) : (
          <button onClick={() => setShowForm(true)} className="metal-button metal-button--small">
            <FaPlus /> New Entry
          </button>
        )}
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="border border-orange-500/30 rounded-lg p-5 mb-8 text-left space-y-4">
          <h2 className="text-white font-black text-base normal-case tracking-normal mb-4">New Diary Entry</h2>

          {error && (
            <div className="bg-red-900/40 border border-red-500/60 rounded px-4 py-2 text-red-200 text-sm">{error}</div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-zinc-300 text-sm font-semibold mb-1">Date</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                required
                className="w-full bg-black/60 border border-zinc-600 focus:border-orange-500 rounded-lg px-3 py-2 text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-zinc-300 text-sm font-semibold mb-1">
                Mood: <span className={MOOD_COLOURS[form.mood]}>{MOOD_LABELS[form.mood]}</span>
              </label>
              <input
                type="range"
                min={1}
                max={5}
                value={form.mood}
                onChange={(e) => setForm((f) => ({ ...f, mood: Number(e.target.value) }))}
                className="w-full accent-orange-500"
              />
              <div className="flex justify-between text-xs text-zinc-500 mt-1">
                <span>Very Low</span><span>Great</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-zinc-300 text-sm font-semibold mb-1">Title (optional)</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              maxLength={200}
              placeholder="Give your entry a title…"
              className="w-full bg-black/60 border border-zinc-600 focus:border-orange-500 rounded-lg px-3 py-2 text-white placeholder-zinc-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-zinc-300 text-sm font-semibold mb-1">How are you feeling? What&apos;s on your mind?</label>
            <textarea
              value={form.body}
              onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))}
              rows={5}
              maxLength={5000}
              placeholder="Write freely — this is your space…"
              className="w-full bg-black/60 border border-zinc-600 focus:border-orange-500 rounded-lg px-3 py-2 text-white placeholder-zinc-600 focus:outline-none resize-y"
            />
          </div>

          <div>
            <label className="block text-zinc-300 text-sm font-semibold mb-1">Symptoms (optional)</label>
            <textarea
              value={form.symptoms}
              onChange={(e) => setForm((f) => ({ ...f, symptoms: e.target.value }))}
              rows={2}
              maxLength={1000}
              placeholder="e.g. anxiety, low energy, poor sleep, racing thoughts…"
              className="w-full bg-black/60 border border-zinc-600 focus:border-orange-500 rounded-lg px-3 py-2 text-white placeholder-zinc-600 focus:outline-none resize-y"
            />
          </div>

          <div>
            <label className="block text-zinc-300 text-sm font-semibold mb-1">Triggers (optional)</label>
            <textarea
              value={form.triggers}
              onChange={(e) => setForm((f) => ({ ...f, triggers: e.target.value }))}
              rows={2}
              maxLength={1000}
              placeholder="e.g. stressful meeting, bad news, lack of sleep…"
              className="w-full bg-black/60 border border-zinc-600 focus:border-orange-500 rounded-lg px-3 py-2 text-white placeholder-zinc-600 focus:outline-none resize-y"
            />
          </div>

          <div>
            <label className="block text-zinc-300 text-sm font-semibold mb-1">Positives &amp; Wins (optional)</label>
            <textarea
              value={form.positives}
              onChange={(e) => setForm((f) => ({ ...f, positives: e.target.value }))}
              rows={2}
              maxLength={1000}
              placeholder="e.g. went for a walk, called a friend, ate well…"
              className="w-full bg-black/60 border border-zinc-600 focus:border-orange-500 rounded-lg px-3 py-2 text-white placeholder-zinc-600 focus:outline-none resize-y"
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            className="metal-button w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {saving ? 'Saving…' : 'Save Entry'}
          </button>
        </form>
      )}

      {entries.length === 0 ? (
        <div className="text-center py-16">
          <FaBook className="text-zinc-600 text-5xl mx-auto mb-4" />
          <p className="text-zinc-400 text-sm">No entries yet. Click &ldquo;New Entry&rdquo; to start your diary.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {entries.map((entry) => (
            <div key={entry.id} className="border border-zinc-700 rounded-lg px-5 py-4 text-left hover:border-zinc-600 transition-colors">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <span className="text-zinc-400 text-xs">
                    {new Date(entry.date + 'T00:00:00').toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  {entry.title && (
                    <h3 className="text-white font-black text-base normal-case tracking-normal" style={{ textShadow: 'none', filter: 'none' }}>
                      {entry.title}
                    </h3>
                  )}
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className={`text-sm font-bold flex items-center gap-1 ${MOOD_COLOURS[entry.mood]}`}>
                    <MoodIcon mood={entry.mood} /> {MOOD_LABELS[entry.mood]}
                  </span>
                  <button
                    onClick={() => handleDelete(entry.id)}
                    disabled={deletingId === entry.id}
                    aria-label="Delete entry"
                    className="text-zinc-600 hover:text-red-400 transition-colors disabled:opacity-40"
                  >
                    <FaTrash className="text-xs" />
                  </button>
                </div>
              </div>
              {entry.body && <p className="text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap mb-2">{entry.body}</p>}
              {entry.symptoms && (
                <p className="text-zinc-400 text-xs mt-2">
                  <span className="text-zinc-300 font-semibold">Symptoms: </span>{entry.symptoms}
                </p>
              )}
              {entry.triggers && (
                <p className="text-zinc-400 text-xs mt-1">
                  <span className="text-zinc-300 font-semibold">Triggers: </span>{entry.triggers}
                </p>
              )}
              {entry.positives && (
                <p className="text-zinc-400 text-xs mt-1">
                  <span className="text-green-400 font-semibold">Positives: </span>{entry.positives}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 border border-zinc-700 rounded-lg px-5 py-4 text-left text-sm text-zinc-400">
        <p className="text-zinc-300 font-semibold mb-1">Your privacy</p>
        <p>Diary entries are private and only visible to you. If you ever need urgent support, please contact the Samaritans on <a href="tel:116123" className="text-orange-400 underline">116 123</a> (24/7, free) or text <a href="sms:85258" className="text-orange-400 underline">SHOUT to 85258</a>.</p>
      </div>
    </div>
  );
}
