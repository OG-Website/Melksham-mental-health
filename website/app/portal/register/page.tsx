'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaLock, FaEnvelope, FaUser, FaEye, FaEyeSlash, FaShieldAlt } from 'react-icons/fa';

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [gdprConsent, setGdprConsent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!gdprConsent) {
      setError('You must agree to the data policy to register.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, gdprConsent }),
      });
      const data = await res.json() as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error ?? 'Registration failed. Please try again.');
      } else {
        router.push('/courses');
        router.refresh();
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
          Create Your Account
        </h1>
        <p className="text-zinc-300 mb-8 text-sm">
          Join the members portal to access course content and express your learning interests.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          {error && (
            <div className="bg-red-900/40 border border-red-500/60 rounded-lg px-4 py-3 text-red-200 text-sm">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-zinc-300 text-sm font-semibold mb-1">
              Full Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm" />
              <input
                id="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-black/60 border border-zinc-600 focus:border-orange-500 rounded-lg pl-10 pr-4 py-3 text-white placeholder-zinc-500 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-zinc-300 text-sm font-semibold mb-1">
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm" />
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/60 border border-zinc-600 focus:border-orange-500 rounded-lg pl-10 pr-4 py-3 text-white placeholder-zinc-500 focus:outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-zinc-300 text-sm font-semibold mb-1">
              Password <span className="text-zinc-500 font-normal">(min 8 characters)</span>
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm" />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/60 border border-zinc-600 focus:border-orange-500 rounded-lg pl-10 pr-10 py-3 text-white placeholder-zinc-500 focus:outline-none transition-colors"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-zinc-300 text-sm font-semibold mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm" />
              <input
                id="confirmPassword"
                type={showPassword ? 'text' : 'password'}
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

          {/* GDPR / Data Consent */}
          <div className="border border-zinc-700 rounded-lg p-4 bg-black/30">
            <div className="flex items-start gap-3">
              <FaShieldAlt className="text-orange-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-zinc-200 text-sm font-semibold mb-2">Data Policy</p>
                <p className="text-zinc-400 text-xs leading-relaxed mb-3">
                  Your name and email address will be stored securely to give you access to course
                  content and so that we can contact you about courses you express an interest in.
                  Your data will <strong className="text-white">never be sold or shared</strong> with
                  any third party. You can request deletion of your account at any time by emailing{' '}
                  <a href="mailto:Melksham-mental-health@outlook.com" className="text-orange-400 underline">
                    Melksham-mental-health@outlook.com
                  </a>.
                </p>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={gdprConsent}
                    onChange={(e) => setGdprConsent(e.target.checked)}
                    className="mt-0.5 accent-orange-500"
                    required
                  />
                  <span className="text-zinc-300 text-xs">
                    I agree to my email and name being stored to access course content and receive
                    course-related communications from Melksham Mental Health. I understand my data
                    will not be sold.
                  </span>
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !gdprConsent}
            className="metal-button w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating account…' : 'Create Account'}
          </button>
        </form>

        <p className="text-zinc-400 text-sm mt-6 text-center">
          Already have an account?{' '}
          <Link href="/portal/login" className="text-orange-400 hover:text-orange-300 underline">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}
