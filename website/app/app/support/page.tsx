import Link from 'next/link';

export const metadata = {
  title: 'Get Support | Melksham Mental Health',
  description: 'Peer-led support from lived experience, with clear crisis signposting.',
};

export default function SupportPage() {
  return (
    <div className="py-10 md:py-14 space-y-8">
      <section className="content-shell bg-texture-3">
        <p className="section-kicker">Page 3 — Get Support</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 normal-case tracking-normal">You don’t need the right words.</h1>
        <p className="text-lg text-zinc-100">If you’re here, that’s enough.</p>
      </section>

      <section className="content-shell bg-texture-3">
        <h2 className="text-3xl font-black text-white mb-4 normal-case tracking-normal">What We Offer</h2>
        <ul className="space-y-2 text-lg text-zinc-100">
          <li>• Peer-led support from lived experience.</li>
          <li>• A confidential, respectful space.</li>
          <li>• Listening without judgement.</li>
          <li>• Honest conversations.</li>
          <li>• Signposting to professional services when needed.</li>
        </ul>
        <p className="mt-5 text-zinc-100 text-lg">We won’t try to fix you. We won’t minimise what you’re feeling. We will listen.</p>
      </section>

      <section className="content-shell bg-texture-3 border border-error/70">
        <h2 className="text-3xl font-black text-white mb-4 normal-case tracking-normal">What This Is Not</h2>
        <ul className="space-y-2 text-lg text-zinc-100">
          <li>• This is not therapy.</li>
          <li>• This is not a medical service.</li>
          <li>• This is not a crisis intervention line.</li>
        </ul>
        <p className="mt-5 text-zinc-100">If you are in immediate danger, call 999. If you need urgent support, call Samaritans on 116 123.</p>
      </section>

      <section className="content-shell bg-texture-3">
        <h2 className="text-3xl font-black text-white mb-4 normal-case tracking-normal">How to Reach Out</h2>
        <p className="text-lg text-zinc-100 mb-6">Contact us through the website form or email. We aim to respond as quickly as possible, but this is a peer-led service.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="metal-button metal-button--small pulse-attention">Contact Form</Link>
          <a href="mailto:Melksham-mental-health@outlook.com" className="metal-button metal-button--small">Email Us</a>
        </div>
      </section>
    </div>
  );
}
