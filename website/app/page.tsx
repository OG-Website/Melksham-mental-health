import Link from 'next/link';
import { FaArrowRight, FaExclamationTriangle, FaHeart, FaLifeRing } from 'react-icons/fa';

const homeSections = [
  {
    title: 'What This Is',
    text: [
      'Melksham Mental Health isn’t a clinic. It isn’t a charity built from a boardroom.',
      'It’s built from lived experience — from breakdowns, rebuilding, and finding a reason to keep going.',
      'This is peer support. Real people. Real struggle. Real honesty. No pretending. No pressure. No judgement.',
    ],
    variant: 'bg-texture-1',
  },
  {
    title: 'Who This Is For',
    list: [
      'You feel like you’ve messed your life up beyond fixing.',
      'You’re exhausted from holding it together.',
      'You’ve hit rock bottom more than once.',
      'You feel ashamed of your past.',
      'You need someone who understands without making you explain everything.',
    ],
    text: ['You don’t need a diagnosis. You don’t need to be “bad enough.” You just need to show up.'],
    variant: 'bg-texture-1',
  },
  {
    title: 'What You’ll Find Here',
    list: [
      'A space to talk without being judged.',
      'People who understand cycles, relapse, and rebuilding.',
      'Honest conversations.',
      'Clear crisis guidance when needed.',
      'No fake positivity.',
    ],
    text: ['Just support.'],
    variant: 'bg-texture-1',
  },
];

export default function Home() {
  return (
    <div className="space-y-8 py-10 md:py-14">
      <section className="content-shell bg-texture-1">
        <p className="section-kicker">Melksham Mental Health</p>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 normal-case tracking-normal">
          I Nearly Lost Everything. <br />
          <span className="text-primary">More Than Once.</span>
        </h1>
        <div className="space-y-4 text-lg text-zinc-100 max-w-3xl">
          <p>There were times I thought I wouldn’t make it through.</p>
          <p>Times I believed I had ruined my life beyond repair.</p>
          <p>Times I felt completely alone in my own head.</p>
          <p className="font-bold text-white">I’m still here. And this space exists because I stayed.</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/app/support" className="metal-button metal-button--small pulse-attention">
            <FaHeart /> Get Support
          </Link>
          <Link href="/about" className="metal-button metal-button--small">
            <FaArrowRight /> Read My Story
          </Link>
          <Link href="/resources/crisis" className="metal-button metal-button--small pulse-attention">
            <FaLifeRing /> Crisis Help
          </Link>
        </div>
      </section>

      {homeSections.map((section) => (
        <section key={section.title} className={`content-shell ${section.variant}`}>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 normal-case tracking-normal">{section.title}</h2>
          <div className="space-y-4 text-zinc-100 text-lg leading-relaxed">
            {section.text?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.list && (
              <ul className="space-y-2">
                {section.list.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      <section className="content-shell bg-texture-1 border border-error/70">
        <h2 className="text-3xl font-black text-white mb-4 normal-case tracking-normal flex items-center gap-3">
          <FaExclamationTriangle className="text-error" /> Important
        </h2>
        <p className="text-zinc-100 text-lg mb-4">
          This is peer support. We are not a crisis service and we do not replace emergency care.
        </p>
        <ul className="space-y-2 text-zinc-100 text-lg">
          <li>• If you are in immediate danger, call 999.</li>
          <li>• If you need urgent emotional support in the UK, call Samaritans on 116 123.</li>
        </ul>
        <p className="mt-6 text-white font-bold text-xl">Asking for help is not weakness. Staying is strength.</p>
        <p className="mt-3 text-zinc-100">If you’re here, it means part of you still wants to survive. That’s enough for today.</p>
      </section>
    </div>
  );
}
