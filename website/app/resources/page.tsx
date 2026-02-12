import Link from 'next/link';

export const metadata = {
  title: 'Resources | Melksham Mental Health',
  description: 'Trusted resources for urgent support, practical guidance, and community help.',
};

export default function ResourcesPage() {
  return (
    <div className="py-10 md:py-14 space-y-8">
      <section className="content-shell bg-texture-4">
        <p className="section-kicker">Page 4 — Resources</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 normal-case tracking-normal">You don’t have to figure this out alone.</h1>
        <p className="text-lg text-zinc-100">Sometimes support means talking. Sometimes it means reading something that helps you feel understood.</p>
      </section>

      <section className="content-shell bg-texture-4">
        <h2 className="text-3xl font-black text-white mb-4 normal-case tracking-normal">Trusted Options</h2>
        <ul className="space-y-3 text-lg text-zinc-100">
          <li>• Samaritans — 116 123</li>
          <li>• NHS 111 (mental health option)</li>
          <li>• Mind (mental health charity)</li>
          <li>• Local community support groups</li>
        </ul>
        <p className="mt-6 text-zinc-100">If you’re unsure where to start, reach out and we’ll help you find the right direction.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/resources/crisis" className="metal-button metal-button--small pulse-attention">Crisis Help</Link>
          <Link href="/resources/local" className="metal-button metal-button--small">Local Support</Link>
          <Link href="/resources/national" className="metal-button metal-button--small">National Services</Link>
        </div>
      </section>
    </div>
  );
}
