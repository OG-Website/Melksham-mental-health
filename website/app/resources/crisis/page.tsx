import { FaExclamationTriangle, FaPhoneAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Crisis Help | Melksham Mental Health',
  description: 'Immediate emergency and urgent emotional support information.',
};

export default function CrisisHelpPage() {
  return (
    <div className="py-10 md:py-14 space-y-8">
      <section className="content-shell bg-texture-2 border border-error/70">
        <p className="section-kicker">Page 6 — Crisis Help</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 normal-case tracking-normal flex items-center gap-3">
          <FaExclamationTriangle className="text-error" /> If you are in immediate danger
        </h1>
        <div className="space-y-4 text-lg text-zinc-100">
          <p>Call <strong>999</strong>.</p>
          <p>If you are struggling and need urgent emotional support, call Samaritans on <strong>116 123</strong> (24/7).</p>
          <p>This platform offers peer support but cannot replace emergency or medical services.</p>
          <p className="text-white font-bold">Reaching out for emergency help is not failure. It is survival.</p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-3">
          <a href="tel:999" className="metal-button pulse-attention"><FaPhoneAlt /> Call 999</a>
          <a href="tel:116123" className="metal-button"><FaPhoneAlt /> Call 116 123</a>
        </div>
      </section>
    </div>
  );
}
