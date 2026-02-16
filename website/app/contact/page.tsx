import { FaEnvelope, FaExclamationTriangle } from 'react-icons/fa';

export const metadata = {
  title: 'Contact | Melksham Mental Health',
  description: 'Get in touch with Melksham Mental Health peer support.',
};

export default function ContactPage() {
  return (
    <div>
      <div className="page-content">
        <p className="section-kicker">Page 7 — Contact</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 normal-case tracking-normal">Get In Touch</h1>
        <p className="text-lg text-zinc-100 mb-6">If you would like to reach out, you can contact us by email or via our private Facebook group below. We aim to respond as soon as possible.</p>
        <p className="text-zinc-100 mb-12">Thank you for being here. If you're reading this, you're still fighting — and that matters.</p>

        <div className="mt-12 mb-16">
          <h2 className="text-3xl font-black text-white mb-6 normal-case tracking-normal">Contact Methods</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:Melksham-mental-health@outlook.com" className="metal-button metal-button--small pulse-attention">
              <FaEnvelope /> Melksham-mental-health@outlook.com
            </a>
            <a href="https://www.facebook.com/groups/m.m.health" target="_blank" rel="noopener noreferrer" className="metal-button metal-button--small">Private Facebook Group</a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t-4 border-error/70">
          <h2 className="text-3xl font-black text-white mb-6 normal-case tracking-normal flex items-center gap-3 justify-center">
            <FaExclamationTriangle className="text-error" /> Urgent or life-threatening situation
          </h2>
          <p className="text-lg text-zinc-100 mb-6">This is a peer-led support space. If your situation is urgent or life-threatening, contact emergency services immediately.</p>
          <div className="space-y-3 text-zinc-100">
            <p>• Call <a href="tel:999" className="underline font-semibold">999</a> for immediate danger.</p>
            <p>• Call <a href="tel:116123" className="underline font-semibold">Samaritans 116 123</a> for urgent emotional support.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
