import { redirect } from 'next/navigation';
import { getRecentPosts } from '@/lib/wall';
import { loadCurrentSessionUser } from '@/lib/portalAuth';
import WallClient from './WallClient';

export const metadata = {
  title: 'Community Wall | Melksham Mental Health Portal',
  description: 'Connect with other members. Share your thoughts, progress, and support each other.',
};

export default async function WallPage() {
  const { user } = await loadCurrentSessionUser();

  if (!user) {
    redirect('/portal/login?next=/portal/wall');
  }

  const posts = getRecentPosts(100);

  return (
    <WallClient
      initialPosts={posts}
      currentUserId={user.id}
      isAdmin={user.isAdmin}
    />
  );
}
