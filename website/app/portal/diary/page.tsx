import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { sessionOptions, type SessionData } from '@/lib/session';
import { getUserEntries } from '@/lib/diary';
import DiaryClient from './DiaryClient';

export const metadata = {
  title: 'My Diary | Melksham Mental Health Portal',
  description: 'Your private safe space to record your thoughts, feelings, symptoms and triggers.',
};

export default async function DiaryPage() {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions);

  if (!session.isLoggedIn || !session.userId) {
    redirect('/portal/login?next=/portal/diary');
  }

  const entries = getUserEntries(session.userId);

  return <DiaryClient initialEntries={entries} userName={session.name} />;
}
