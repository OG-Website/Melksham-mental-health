'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaLock, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import type { PortalFocus } from '@/lib/portalFocus';

function getLoginErrorMessage(message?: string): string {
  if (!message) return 'Login failed. Please try again.';

  if (message.includes('DATABASE_URL')) {
    return 'Portal login is temporarily unavailable due to server configuration. Please contact support.';
  }

  if (message.includes('SESSION_SECRET')) {
    return 'Portal login is temporarily unavailable due to session configuration. Please contact support.';
  }

  return message;
}

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawNext = searchParams.get('next');
  const next =
    rawNext && rawNext.startsWith('/') && !rawNext.startsWith('//') && !rawNext.includes('://')
      ? rawNext
      : null;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json() as {
        ok?: boolean;
        error?: string;
        user?: { isAdmin?: boolean; portalFocus?: PortalFocus };
      };
      if (!res.ok || !data.ok) {
        setError(getLoginErrorMessage(data.error));
      } else {
        const defaultTarget =
          data.user?.isAdmin
            ? '/portal'
            : data.user?.portalFocus === 'women'
            ? '/portal/womens-space'
            : '/portal/mens-space';
        router.push(next ?? defaultTarget);
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
          Sign In
        </h1>
        <p className="text-zinc-300 mb-8 text-sm">
          Access your course portal and manage your learning interests.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          {error && (
            <div className="bg-red-900/40 border border-red-500/60 rounded-lg px-4 py-3 text-red-200 text-sm">
              {error}
            </div>
          )}

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
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm" />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/60 border border-zinc-600 focus:border-orange-500 rounded-lg pl-10 pr-10 py-3 text-white placeholder-zinc-500 focus:outline-none transition-colors"
                placeholder="********"
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

          <button
            type="submit"
            disabled={loading}
            className="metal-button w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-zinc-400 text-sm mt-6 text-center">
          Don&apos;t have an account?{' '}
          <Link href="/portal/register" className="text-orange-400 hover:text-orange-300 underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
