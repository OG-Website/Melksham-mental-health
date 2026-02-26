import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { sessionOptions, type SessionData } from '@/lib/session';
import { getRecentPosts } from '@/lib/wall';
import WallClient from './WallClient';

export const metadata = {
  title: 'Community Wall | Melksham Mental Health Portal',
  description: 'Connect with other members. Share your thoughts, progress, and support each other.',
};

export default async function WallPage() {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions);

  if (!session.isLoggedIn || !session.userId) {
    redirect('/portal/login?next=/portal/wall');
  }

  const posts = getRecentPosts(100);

  return (
    <WallClient
      initialPosts={posts}
      currentUserId={session.userId}
      isAdmin={session.isAdmin}
    />
  );
}
