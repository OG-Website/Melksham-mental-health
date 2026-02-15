import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

export const metadata = {
  title: 'Resources | Melksham Mental Health',
  description: 'Trusted resources for urgent support, practical guidance, and community help.',
};

export default function ResourcesPage() {
  return (
    <div className="bg-page-1">
      <div className="page-content">
        <p className="section-kicker">Page 4 — Resources</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 normal-case tracking-normal">You don't have to figure this out alone.</h1>
        <p className="text-lg text-zinc-100 mb-6">Sometimes support means talking. Sometimes it means reading something that helps you feel understood.</p>
        <p className="text-zinc-100 mb-12">If you're unsure where to start, reach out and we'll help you find the right direction.</p>

        <div className="mt-16 pt-8 border-t-4 border-error/70">
          <h2 className="text-3xl font-black text-white mb-6 normal-case tracking-normal flex items-center gap-3 justify-center">
            <FaExclamationTriangle className="text-error" /> If you are in crisis now
          </h2>
          <p className="text-lg text-zinc-100 mb-6">
            If you or someone else is in immediate danger or needs urgent medical help, call{' '}
            <a href="tel:999" className="font-semibold underline">999</a> right away.
          </p>
          <div className="space-y-3 text-zinc-100 mb-6">
            <p>• For urgent mental health support, call <a href="tel:111" className="underline font-semibold">NHS 111</a> (24/7).</p>
            <p>• Call <a href="tel:116123" className="underline font-semibold">Samaritans on 116 123</a> (24/7, free).</p>
            <p>• Text <a href="sms:85258" className="underline font-semibold">SHOUT to 85258</a> for free 24/7 text support.</p>
            <p>• In Wiltshire, you can call the local 24/7 mental health crisis line on <a href="tel:08009530110" className="underline font-semibold">0800 953 0110</a>.</p>
          </div>
          <p className="text-sm text-zinc-200 mb-12">
            This page is for general information and support only and is not a substitute for professional diagnosis,
            treatment, or emergency care. For more detailed crisis guidance, please see our{' '}
            <Link href="/resources/crisis" className="underline font-semibold">Crisis Help page</Link>.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-black text-white mb-6 normal-case tracking-normal">Trusted Options</h2>
          <div className="space-y-3 text-lg text-zinc-100 mb-12">
            <p>• Samaritans — <a href="tel:116123" className="underline">116 123</a></p>
            <p>• NHS 111 (mental health option) — <a href="tel:111" className="underline">111</a></p>
            <p>• Mind (mental health charity) — <a href="https://www.mind.org.uk" target="_blank" rel="noopener noreferrer" className="underline">www.mind.org.uk</a></p>
            <p>• Local community support groups</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/resources/crisis" className="metal-button metal-button--small pulse-attention">Crisis Help</Link>
            <Link href="/resources/local" className="metal-button metal-button--small">Local Support</Link>
            <Link href="/resources/national" className="metal-button metal-button--small">National Services</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
