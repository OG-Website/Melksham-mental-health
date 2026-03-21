import { redirect } from 'next/navigation';
import { getUserEntries } from '@/lib/diary';
import { loadCurrentSessionUser } from '@/lib/portalAuth';
import DiaryClient from './DiaryClient';

export const metadata = {
  title: 'My Diary | Melksham Mental Health Portal',
  description: 'Your private safe space to record your thoughts, feelings, symptoms and triggers.',
};

export default async function DiaryPage() {
  const { user } = await loadCurrentSessionUser();

  if (!user) {
    redirect('/portal/login?next=/portal/diary');
  }

  const entries = getUserEntries(user.id);
  return <DiaryClient initialEntries={entries} userName={user.name} />;
}
