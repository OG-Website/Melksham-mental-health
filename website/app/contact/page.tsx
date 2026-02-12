import { FaEnvelope, FaExclamationTriangle } from 'react-icons/fa';

export const metadata = {
  title: 'Contact | Melksham Mental Health',
  description: 'Get in touch with Melksham Mental Health peer support.',
};

export default function ContactPage() {
  return (
    <div className="py-10 md:py-14 space-y-8">
      <section className="content-shell bg-texture-3">
        <p className="section-kicker">Page 7 — Contact</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 normal-case tracking-normal">Get In Touch</h1>
        <p className="text-lg text-zinc-100 mb-5">If you would like to reach out, you can contact us by email or via our private Facebook group below. We aim to respond as soon as possible.</p>
        <p className="text-zinc-100">Thank you for being here. If you’re reading this, you’re still fighting — and that matters.</p>
      </section>

      <section className="content-shell bg-texture-3">
        <h2 className="text-3xl font-black text-white mb-4 normal-case tracking-normal">Contact Methods</h2>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:Melksham-mental-health@outlook.com" className="metal-button metal-button--small pulse-attention">
            <FaEnvelope /> Melksham-mental-health@outlook.com
          </a>
          <a href="https://www.facebook.com/groups/m.m.health" target="_blank" rel="noopener noreferrer" className="metal-button metal-button--small">Private Facebook Group</a>
        </div>
      </section>

      <section className="content-shell bg-texture-3 border border-error/70">
        <h2 className="text-3xl font-black text-white mb-4 normal-case tracking-normal flex items-center gap-3">
          <FaExclamationTriangle className="text-error" /> Urgent or life-threatening situation
        </h2>
        <p className="text-lg text-zinc-100 mb-3">This is a peer-led support space. If your situation is urgent or life-threatening, contact emergency services immediately.</p>
        <ul className="space-y-2 text-zinc-100">
          <li>• Call 999 for immediate danger.</li>
          <li>• Call Samaritans 116 123 for urgent emotional support.</li>
        </ul>
      </section>
    </div>
  );
}
