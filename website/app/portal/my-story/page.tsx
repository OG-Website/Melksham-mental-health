import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { sessionOptions, type SessionData } from '@/lib/session';
import { findUserById } from '@/lib/users';
import MyStoryClient from './MyStoryClient';

export const metadata = {
  title: 'My Story | Melksham Mental Health Portal',
  description: 'Your personal story — a private space to share your journey.',
};

export default async function MyStoryPage() {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions);

  if (!session.isLoggedIn || !session.userId) {
    redirect('/portal/login?next=/portal/my-story');
  }
  if (session.isAdmin) {
    redirect('/portal');
  }

  const user = findUserById(session.userId);
  if (!user) redirect('/portal/login');

  return <MyStoryClient initialStory={user.story ?? ''} userName={user.name} />;
}
