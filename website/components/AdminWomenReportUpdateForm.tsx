'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { WomenSupportReportStatus } from '@/lib/womenSupport';

interface Props {
  reportId: string;
  currentStatus: WomenSupportReportStatus;
  currentPoliceReference?: string;
  currentAdminNotes?: string;
}

export function AdminWomenReportUpdateForm({
  reportId,
  currentStatus,
  currentPoliceReference,
  currentAdminNotes,
}: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<WomenSupportReportStatus>(currentStatus);
  const [policeReference, setPoliceReference] = useState(currentPoliceReference ?? '');
  const [adminNotes, setAdminNotes] = useState(currentAdminNotes ?? '');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setMessage('');

    try {
      const response = await fetch(`/api/portal/report-him/${reportId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, policeReference, adminNotes }),
      });
      const data = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !data.ok) {
        setMessage(data.error ?? 'Update failed.');
      } else {
        setMessage('Saved.');
        router.refresh();
      }
    } catch {
      setMessage('Network error.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3 women-space-panel">
      <div className="grid gap-3 md:grid-cols-2">
        <label className="block">
          <span className="block text-xs font-semibold text-pink-100 mb-1">Status</span>
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value as WomenSupportReportStatus)}
            className="women-space-input"
          >
            <option value="submitted">Submitted</option>
            <option value="reviewing">Reviewing</option>
            <option value="ready">Ready</option>
          </select>
        </label>

        <label className="block">
          <span className="block text-xs font-semibold text-pink-100 mb-1">Police reference</span>
          <input
            type="text"
            value={policeReference}
            onChange={(event) => setPoliceReference(event.target.value)}
            className="women-space-input"
            placeholder="Crime or incident reference"
          />
        </label>
      </div>

      <label className="block">
        <span className="block text-xs font-semibold text-pink-100 mb-1">Admin notes</span>
        <textarea
          value={adminNotes}
          onChange={(event) => setAdminNotes(event.target.value)}
          rows={4}
          className="women-space-input"
          placeholder="Internal notes or actions taken"
        />
      </label>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="women-space-button disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? 'Saving...' : 'Save review'}
        </button>
        {message ? <span className="text-xs text-pink-100">{message}</span> : null}
      </div>
    </form>
  );
}
