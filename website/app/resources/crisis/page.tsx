import { FaExclamationTriangle, FaPhoneAlt, FaComment } from 'react-icons/fa';

export const metadata = {
  title: 'Crisis Help | Melksham Mental Health',
  description: 'Immediate emergency and urgent emotional support information.',
};

export default function CrisisHelpPage() {
  return (
    <div className="bg-page-1">
      <div className="page-content">
        <div className="border-t-4 border-error/70 pt-8">
          <p className="section-kicker">Page 6 — Crisis Help</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-8 normal-case tracking-normal flex items-center gap-3 justify-center">
            <FaExclamationTriangle className="text-error" /> If you are in immediate danger
          </h1>
          <div className="space-y-4 text-lg text-zinc-100 mb-12">
            <p className="text-white font-bold text-2xl">Call <a href="tel:999" className="underline">999</a>.</p>
            <p>If you or someone else is in immediate danger or needs urgent medical help, call 999 right away.</p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8 normal-case tracking-normal">24/7 Urgent Mental Health Support</h2>
          <div className="space-y-8 text-lg text-zinc-100 mb-12">
            <div>
              <h3 className="font-bold text-white mb-2 flex items-center gap-2 justify-center"><FaPhoneAlt /> Samaritans</h3>
              <p>Call <a href="tel:116123" className="underline font-semibold">116 123</a> (24/7, free)</p>
              <p className="text-base mt-1">For anyone struggling to cope, who needs someone to listen without judgement.</p>
            </div>

            <div>
              <h3 className="font-bold text-white mb-2 flex items-center gap-2 justify-center"><FaComment /> Shout Text Support</h3>
              <p>Text <a href="sms:85258" className="underline font-semibold">SHOUT to 85258</a> (24/7, free)</p>
              <p className="text-base mt-1">Free, confidential text support for anyone in crisis.</p>
            </div>

            <div>
              <h3 className="font-bold text-white mb-2 flex items-center gap-2 justify-center"><FaPhoneAlt /> NHS 111</h3>
              <p>Call <a href="tel:111" className="underline font-semibold">111</a> and select the mental health option (24/7)</p>
              <p className="text-base mt-1">For urgent mental health support when you need help but it's not a life-threatening emergency.</p>
            </div>

            <div>
              <h3 className="font-bold text-white mb-2 flex items-center gap-2 justify-center"><FaPhoneAlt /> Wiltshire Mental Health Crisis Line</h3>
              <p>Call <a href="tel:08009530110" className="underline font-semibold">0800 953 0110</a> (24/7, free)</p>
              <p className="text-base mt-1">Local Wiltshire crisis support line available day or night.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 justify-center max-w-2xl mx-auto">
            <a href="tel:999" className="metal-button pulse-attention"><FaPhoneAlt /> Call 999</a>
            <a href="tel:116123" className="metal-button"><FaPhoneAlt /> Call Samaritans 116 123</a>
            <a href="sms:85258" className="metal-button"><FaComment /> Text SHOUT to 85258</a>
            <a href="tel:111" className="metal-button"><FaPhoneAlt /> Call NHS 111</a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t-4 border-primary/50">
          <p className="text-white font-bold text-xl mb-3">Reaching out for emergency help is not failure.</p>
          <p className="text-lg text-zinc-100">It is survival.</p>
          <p className="mt-4 text-zinc-100">This platform offers peer support but cannot replace emergency or medical services.</p>
        </div>
      </div>
    </div>
  );
}
