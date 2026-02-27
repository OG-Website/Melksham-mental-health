import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { sessionOptions, type SessionData } from '@/lib/session';
import { findUserById } from '@/lib/users';
import { getUserMessages } from '@/lib/helpMessages';
import HelpClient from './HelpClient';

export const metadata = {
  title: 'Help & Questions | Melksham Mental Health Portal',
  description: 'Ask the Melksham Mental Health team a question or request support.',
};

export default async function HelpPage() {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions);

  if (!session.isLoggedIn || !session.userId) {
    redirect('/portal/login?next=/portal/help');
  }

  const user = findUserById(session.userId);
  if (!user) redirect('/portal/login');

  const messages = getUserMessages(session.userId);

  return <HelpClient initialMessages={messages} userName={user.name} />;
}
