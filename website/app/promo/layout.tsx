import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Members Portal — Melksham Mental Health',
  description: 'Promotional showcase for the Melksham Mental Health Members Portal and 50-Module Course Programme.',
};

export default function PromoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
