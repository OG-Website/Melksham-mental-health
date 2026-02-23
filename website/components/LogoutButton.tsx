'use client';

import { useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();
  const [error, setError] = useState('');

  async function handleLogout() {
    setError('');
    try {
      const res = await fetch('/api/auth/logout', { method: 'POST' });
      if (!res.ok) throw new Error('Logout failed');
      router.push('/');
      router.refresh();
    } catch {
      setError('Sign out failed — please try again.');
    }
  }

  return (
    <div className="inline-flex flex-col items-center gap-1">
      <button
        onClick={handleLogout}
        className="metal-button metal-button--small"
        style={{ background: 'linear-gradient(180deg,#4a4a4a 0%,#2a2a2a 100%)', borderColor: '#666' }}
      >
        <FaSignOutAlt /> Sign Out
      </button>
      {error && <span className="text-red-400 text-xs">{error}</span>}
    </div>
  );
}
