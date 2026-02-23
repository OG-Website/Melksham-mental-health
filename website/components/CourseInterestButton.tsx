'use client';

import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

interface Props {
  moduleId: number;
  initialInterested: boolean;
  isAdmin: boolean;
}

export default function CourseInterestButton({ moduleId, initialInterested, isAdmin }: Props) {
  const [interested, setInterested] = useState(initialInterested);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (isAdmin) return null; // admin doesn't track interests

  async function toggle() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/portal/interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ moduleId }),
      });
      if (res.ok) {
        setInterested((prev) => !prev);
      } else if (res.status === 401) {
        setError('Session expired — please sign in again.');
      } else {
        const data = await res.json() as { error?: string };
        setError(data.error ?? 'Could not save — please try again.');
      }
    } catch {
      setError('Network error — please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-start gap-1">
      <button
        onClick={toggle}
        disabled={loading}
        aria-label={interested ? 'Remove interest' : "I'm interested in this module"}
        className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border transition-all disabled:opacity-50 ${
          interested
            ? 'bg-orange-600/30 border-orange-500/60 text-orange-300 hover:bg-orange-600/20'
            : 'bg-black/30 border-zinc-600 text-zinc-400 hover:border-orange-500/60 hover:text-orange-400'
        }`}
      >
        {interested ? <FaHeart className="text-orange-400" /> : <FaRegHeart />}
        {loading ? 'Saving…' : interested ? 'Interested' : "I'm Interested"}
      </button>
      {error && <span className="text-red-400 text-xs ml-1">{error}</span>}
    </div>
  );
}
