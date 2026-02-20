'use client';

import { FaSignOutAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="metal-button metal-button--small"
      style={{ background: 'linear-gradient(180deg,#4a4a4a 0%,#2a2a2a 100%)', borderColor: '#666' }}
    >
      <FaSignOutAlt /> Sign Out
    </button>
  );
}
