import { redirect } from 'next/navigation';
import { getUserMessages } from '@/lib/helpMessages';
import { loadCurrentSessionUser } from '@/lib/portalAuth';
import HelpClient from './HelpClient';

export const metadata = {
  title: 'Help & Questions | Melksham Mental Health Portal',
  description: 'Ask the Melksham Mental Health team a question or request support.',
};

export default async function HelpPage() {
  const { user } = await loadCurrentSessionUser();

  if (!user) {
    redirect('/portal/login?next=/portal/help');
  }
  if (user.isAdmin) {
    redirect('/portal');
  }

  const messages = getUserMessages(user.id);
  return <HelpClient initialMessages={messages} userName={user.name} />;
}
