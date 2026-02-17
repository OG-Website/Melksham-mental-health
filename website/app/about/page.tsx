import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

export const metadata = {
  title: 'My Story | Melksham Mental Health',
  description: 'Why Melksham Mental Health exists and the lived experience behind it.',
};

export default function AboutPage() {
  return (
    <div>
      <div className="page-content">
        <p className="section-kicker">Page 2 — My Story</p>
        <h1 className="text-4xl md:text-5xl font-black text-white normal-case tracking-normal mb-12">Built from breakdowns, rebuilding, and staying.</h1>

        <div className="space-y-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 normal-case tracking-normal">Why This Exists</h2>
            <div className="space-y-4 text-lg text-zinc-100 leading-relaxed">
              <p>This didn't start as a project. It started as survival.</p>
              <p>For years, life moved in cycles. I would build stability, relationships, work, trust — then watch it fall apart. Sometimes slowly. Sometimes all at once.</p>
              <p>I carried shame, anger, and the weight of feeling like I should have been stronger. The hardest part wasn't the collapse. It was feeling like I was the only one who couldn't get it right.</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 normal-case tracking-normal">The Low Points</h2>
            <div className="space-y-4 text-lg text-zinc-100 leading-relaxed">
              <p>There were nights I didn't recognise myself.</p>
              <p>There were times I thought walking away from everything would be easier than trying again.</p>
              <p>There were times I convinced myself the world would be better without me. I'm not proud of those thoughts, but they were real — and pretending they never happened helps no one.</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 normal-case tracking-normal">What Changed</h2>
            <div className="space-y-4 text-lg text-zinc-100 leading-relaxed">
              <p>There wasn't a miracle. There wasn't one huge turning point.</p>
              <p>It was smaller than that: one honest conversation, one person who didn't judge me, one day where I chose not to give up. Then another. Then another.</p>
              <p>Recovery wasn't becoming perfect. It was about staying.</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 normal-case tracking-normal">Why I Built This</h2>
            <div className="space-y-4 text-lg text-zinc-100 leading-relaxed">
              <p>I know what it feels like to think you've ruined everything.</p>
              <p>I know what it's like to rebuild from nothing.</p>
              <p>I know how isolating it is when everyone else looks fine and you're barely holding it together.</p>
              <p>I don't claim to have all the answers. But I understand. Sometimes understanding is where healing starts.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t-4 border-error/70">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4 normal-case tracking-normal flex items-center gap-3 justify-center">
            <FaExclamationTriangle className="text-error" /> If you're in crisis
          </h2>
          <p className="text-zinc-100 mb-4">
            If you're experiencing thoughts of suicide or self-harm, please reach out for help now:
          </p>
          <div className="space-y-2 text-zinc-100 mb-6">
            <p>• Call <a href="tel:999" className="underline font-semibold">999</a> for immediate danger</p>
            <p>• Call <a href="tel:116123" className="underline font-semibold">Samaritans on 116 123</a> (24/7, free)</p>
            <p>• Call <a href="tel:111" className="underline font-semibold">NHS 111</a> and select mental health option (24/7)</p>
            <p>• Text <a href="sms:85258" className="underline font-semibold">SHOUT to 85258</a> for 24/7 text support</p>
            <p>• In Wiltshire: <a href="tel:08009530110" className="underline font-semibold">0800 953 0110</a> (24/7 crisis line)</p>
          </div>
          <p className="text-sm text-zinc-200">
            This content reflects lived experience but doesn't replace professional help.{' '}
            <Link href="/resources/crisis" className="underline font-semibold">See our Crisis Help page</Link> for more resources.
          </p>
        </div>
      </div>
    </div>
  );
}
