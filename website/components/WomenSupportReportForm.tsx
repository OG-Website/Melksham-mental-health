'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ACCEPTED_EVIDENCE_TEXT = 'PNG, JPG, WEBP, GIF, HEIC, HEIF or PDF up to 4 MB each';

export function WomenSupportReportForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setSuccess('');
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/portal/report-him', {
        method: 'POST',
        body: formData,
      });
      const data = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !data.ok) {
        setError(data.error ?? 'The report could not be submitted.');
      } else {
        setSuccess('Report saved. Your police-ready support pack is now in your portal history below.');
        form.reset();
        router.refresh();
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left women-space-panel">
      {error ? (
        <div className="rounded-lg border border-red-400/60 bg-red-950/50 px-4 py-3 text-sm text-red-100">
          {error}
        </div>
      ) : null}
      {success ? (
        <div className="rounded-lg border border-pink-400/60 bg-pink-950/40 px-4 py-3 text-sm text-pink-50">
          {success}
        </div>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="block text-sm font-semibold text-pink-50 mb-1">Incident type</span>
          <select name="incidentType" required className="women-space-input">
            <option value="">Choose one</option>
            <option value="Unsolicited sexual images">Unsolicited sexual images</option>
            <option value="Stalking or monitoring">Stalking or monitoring</option>
            <option value="Domestic abuse or coercive control">Domestic abuse or coercive control</option>
            <option value="Harassment or threats">Harassment or threats</option>
            <option value="Financial control or child maintenance pressure">Financial control or child maintenance pressure</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label className="block">
          <span className="block text-sm font-semibold text-pink-50 mb-1">When did it happen?</span>
          <input
            type="text"
            name="incidentDateText"
            className="women-space-input"
            placeholder="Date, time or timeframe"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="block text-sm font-semibold text-pink-50 mb-1">Platform or channel</span>
          <input
            type="text"
            name="platformOrChannel"
            className="women-space-input"
            placeholder="WhatsApp, Facebook, in person, outside home"
          />
        </label>

        <label className="block">
          <span className="block text-sm font-semibold text-pink-50 mb-1">Location</span>
          <input
            type="text"
            name="incidentLocation"
            className="women-space-input"
            placeholder="Town, workplace, school run, home"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="block text-sm font-semibold text-pink-50 mb-1">Who is this person to you?</span>
          <input
            type="text"
            name="relationshipContext"
            className="women-space-input"
            placeholder="Ex-partner, current partner, stranger, neighbour"
          />
        </label>

        <label className="block">
          <span className="block text-sm font-semibold text-pink-50 mb-1">Name / username of the person</span>
          <input
            type="text"
            name="suspectName"
            className="women-space-input"
            placeholder="Name or social handle if known"
          />
        </label>
      </div>

      <label className="block">
        <span className="block text-sm font-semibold text-pink-50 mb-1">Known contact details / usernames</span>
        <input
          type="text"
          name="suspectContact"
          className="women-space-input"
          placeholder="Phone number, email, handle, vehicle or other ID"
        />
      </label>

      <label className="block">
        <span className="block text-sm font-semibold text-pink-50 mb-1">What happened?</span>
        <textarea
          name="summary"
          required
          rows={5}
          className="women-space-input"
          placeholder="Describe the incident clearly, in order, with dates and behaviour."
        />
      </label>

      <label className="block">
        <span className="block text-sm font-semibold text-pink-50 mb-1">Messages or wording received</span>
        <textarea
          name="messageExcerpt"
          rows={4}
          className="women-space-input"
          placeholder="Paste text messages, threats or the wording attached to screenshots."
        />
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="block text-sm font-semibold text-pink-50 mb-1">Impact on you</span>
          <textarea
            name="impactStatement"
            rows={4}
            className="women-space-input"
            placeholder="Fear, sleep loss, leaving home, work impact, children affected"
          />
        </label>

        <label className="block">
          <span className="block text-sm font-semibold text-pink-50 mb-1">What help do you want?</span>
          <textarea
            name="desiredSupport"
            rows={4}
            className="women-space-input"
            placeholder="Police pack, admin support, safety planning, referral links"
          />
        </label>
      </div>

      <label className="block">
        <span className="block text-sm font-semibold text-pink-50 mb-1">Evidence links</span>
        <textarea
          name="evidenceLinks"
          rows={3}
          className="women-space-input"
          placeholder="Paste cloud links, message URLs or references if files are too large to upload."
        />
      </label>

      <label className="block">
        <span className="block text-sm font-semibold text-pink-50 mb-1">Upload screenshots or PDFs</span>
        <input
          type="file"
          name="evidenceFiles"
          multiple
          accept=".png,.jpg,.jpeg,.webp,.gif,.heic,.heif,.pdf,image/png,image/jpeg,image/webp,image/gif,image/heic,image/heif,application/pdf"
          className="block w-full text-sm text-pink-100 file:mr-4 file:rounded-full file:border-0 file:bg-pink-500 file:px-4 file:py-2 file:font-bold file:text-white hover:file:bg-pink-400"
        />
        <p className="mt-2 text-xs text-pink-100/80">{ACCEPTED_EVIDENCE_TEXT}</p>
      </label>

      <div className="grid gap-3 md:grid-cols-2">
        <label className="flex items-start gap-3 rounded-lg border border-pink-400/20 bg-black/20 px-4 py-3">
          <input type="checkbox" name="anonymousToPolice" className="mt-1 accent-pink-500" />
          <span className="text-sm text-pink-50">
            Prepare this as an anonymous police pack where possible. Internal admins may still see your account details.
          </span>
        </label>

        <label className="flex items-start gap-3 rounded-lg border border-pink-400/20 bg-black/20 px-4 py-3">
          <input type="checkbox" name="immediateDanger" className="mt-1 accent-pink-500" />
          <span className="text-sm text-pink-50">
            There is an immediate safety risk. If that is true, you should also call 999 now.
          </span>
        </label>
      </div>

      <label className="flex items-start gap-3 rounded-lg border border-pink-400/20 bg-black/20 px-4 py-3">
        <input type="checkbox" name="confirmAccuracy" required className="mt-1 accent-pink-500" />
        <span className="text-sm text-pink-50">
          I confirm the information is accurate to the best of my knowledge and I understand this portal creates a support pack, not a direct police submission.
        </span>
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="women-space-button disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? 'Saving report...' : 'Save report and generate pack'}
      </button>
    </form>
  );
}
