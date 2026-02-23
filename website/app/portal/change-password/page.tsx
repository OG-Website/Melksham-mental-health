'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

export default function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/portal/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const data = await res.json() as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error ?? 'Password change failed. Please try again.');
      } else {
        setSuccess('Your password has been updated successfully.');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page-content">
      <div className="max-w-md mx-auto">
        <p className="section-kicker">Members Portal</p>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-2 normal-case tracking-normal">
          Change Password
        </h1>
        <p className="text-zinc-300 mb-8 text-sm">
          Choose a strong password of at least 8 characters.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          {error && (
            <div className="bg-red-900/40 border border-red-500/60 rounded-lg px-4 py-3 text-red-200 text-sm whitespace-pre-wrap">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-900/40 border border-green-500/60 rounded-lg px-4 py-3 text-green-200 text-sm">
              {success}
            </div>
          )}

          <div>
            <label htmlFor="currentPassword" className="block text-zinc-300 text-sm font-semibold mb-1">
              Current Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm" />
              <input
                id="currentPassword"
                type={showCurrent ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full bg-black/60 border border-zinc-600 focus:border-orange-500 rounded-lg pl-10 pr-10 py-3 text-white placeholder-zinc-500 focus:outline-none transition-colors"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
                aria-label={showCurrent ? 'Hide password' : 'Show password'}
              >
                {showCurrent ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="newPassword" className="block text-zinc-300 text-sm font-semibold mb-1">
              New Password <span className="text-zinc-500 font-normal">(min 8 characters)</span>
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm" />
              <input
                id="newPassword"
                type={showNew ? 'text' : 'password'}
                autoComplete="new-password"
                required
                minLength={8}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full bg-black/60 border border-zinc-600 focus:border-orange-500 rounded-lg pl-10 pr-10 py-3 text-white placeholder-zinc-500 focus:outline-none transition-colors"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
                aria-label={showNew ? 'Hide password' : 'Show password'}
              >
                {showNew ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-zinc-300 text-sm font-semibold mb-1">
              Confirm New Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm" />
              <input
                id="confirmPassword"
                type={showNew ? 'text' : 'password'}
                autoComplete="new-password"
                required
                minLength={8}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-black/60 border border-zinc-600 focus:border-orange-500 rounded-lg pl-10 pr-4 py-3 text-white placeholder-zinc-500 focus:outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="metal-button w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Updating…' : 'Update Password'}
          </button>
        </form>

        <p className="text-zinc-400 text-sm mt-6 text-center">
          <Link href="/portal" className="text-orange-400 hover:text-orange-300 underline">
            ← Back to portal
          </Link>
        </p>
      </div>
    </div>
  );
}
