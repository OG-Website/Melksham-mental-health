'use client';

import { useState } from 'react';
import { FaPaperPlane, FaCheckCircle, FaClock } from 'react-icons/fa';

interface Props {
  alreadyApplied: boolean;
}

export default function CourseAccessApplyButton({ alreadyApplied }: Props) {
  const [applied, setApplied] = useState(alreadyApplied);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (applied) {
    return (
      <div className="inline-flex items-center gap-2 text-orange-300 text-sm font-semibold">
        <FaClock className="flex-shrink-0" />
        Application submitted — awaiting approval
      </div>
    );
  }

  async function handleApply() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/portal/course-access', { method: 'POST' });
      const data = await res.json() as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.');
      } else {
        setApplied(true);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
      <button
        onClick={handleApply}
        disabled={loading}
        className="metal-button metal-button--small inline-flex items-center gap-2"
      >
        {loading ? (
          <span className="animate-pulse">Submitting…</span>
        ) : (
          <>
            <FaPaperPlane className="text-xs" />
            Apply for Course Access
          </>
        )}
      </button>
      <p className="text-zinc-500 text-xs mt-2">
        Your application will be reviewed. You&apos;ll receive access once approved.
      </p>
    </div>
  );
}

/** Small inline button used in the admin portal to approve a user */
export function AdminApproveButton({ userId, currentAccess }: { userId: string; currentAccess: boolean }) {
  const [access, setAccess] = useState(currentAccess);
  const [loading, setLoading] = useState(false);

  async function toggle() {
    setLoading(true);
    try {
      const res = await fetch('/api/portal/course-access', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, approved: !access }),
      });
      if (res.ok) setAccess((v) => !v);
    } finally {
      setLoading(false);
    }
  }

  if (access) {
    return (
      <button
        onClick={toggle}
        disabled={loading}
        className="text-xs px-2 py-1 rounded border border-green-600/50 text-green-400 hover:border-red-500/50 hover:text-red-400 transition-colors font-semibold"
        title="Click to revoke access"
      >
        <FaCheckCircle className="inline mr-1" />
        {loading ? '…' : 'Approved'}
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      disabled={loading}
      className="text-xs px-2 py-1 rounded border border-orange-500/60 text-orange-300 hover:bg-orange-600/20 transition-colors font-semibold"
    >
      {loading ? '…' : 'Approve Access'}
    </button>
  );
}
