import Link from 'next/link';

export const metadata = {
  title: 'Get Support | Melksham Mental Health',
  description: 'Peer-led support from lived experience, with clear crisis signposting.',
};

export default function SupportPage() {
  return (
    <div>
      <div className="page-content">
        <p className="section-kicker">Get Support</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 normal-case tracking-normal">You don't need the right words.</h1>
        <p className="text-lg text-zinc-100 mb-12">If you're here, that's enough.</p>

        <div className="mt-12">
          <h2 className="text-3xl font-black text-white mb-6 normal-case tracking-normal">What We Offer</h2>
          <div className="space-y-3 text-lg text-zinc-100 mb-6">
            <p>• Peer-led support from lived experience.</p>
            <p>• A confidential, respectful space.</p>
            <p>• Listening without judgement.</p>
            <p>• Honest conversations.</p>
            <p>• Signposting to professional services when needed.</p>
          </div>
          <p className="text-zinc-100 text-lg">We won't try to fix you. We won't minimise what you're feeling. We will listen.</p>
        </div>

        <div className="mt-16 pt-8 border-t-4 border-error/70">
          <h2 className="text-3xl font-black text-white mb-6 normal-case tracking-normal">What This Is Not</h2>
          <div className="space-y-3 text-lg text-zinc-100 mb-6">
            <p>• This is not therapy.</p>
            <p>• This is not a medical service.</p>
            <p>• This is not a crisis intervention line.</p>
          </div>
          <p className="text-zinc-100">If you are in immediate danger, call <a href="tel:999" className="underline font-semibold">999</a>. If you need urgent support, call <a href="tel:116123" className="underline font-semibold">Samaritans on 116 123</a>.</p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-black text-white mb-6 normal-case tracking-normal">How to Reach Out</h2>
          <p className="text-lg text-zinc-100 mb-8">Contact us through the website form or email. We aim to respond as quickly as possible, but this is a peer-led service.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="metal-button metal-button--small pulse-attention">Contact Form</Link>
            <a href="mailto:Melksham-mental-health@outlook.com" className="metal-button metal-button--small">Email Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}
