import { redirect } from 'next/navigation';
import { loadCurrentSessionUser } from '@/lib/portalAuth';
import MyStoryClient from './MyStoryClient';

export const metadata = {
  title: 'My Story | Melksham Mental Health Portal',
  description: 'Your personal story - a private space to share your journey.',
};

export default async function MyStoryPage() {
  const { user } = await loadCurrentSessionUser();

  if (!user) {
    redirect('/portal/login?next=/portal/my-story');
  }
  if (user.isAdmin) {
    redirect('/portal');
  }

  return <MyStoryClient initialStory={user.story ?? ''} userName={user.name} />;
}
