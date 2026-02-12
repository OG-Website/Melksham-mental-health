import Link from 'next/link';
import { FaArrowRight, FaExclamationTriangle, FaHeart, FaLifeRing } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="space-y-8 py-10 md:py-14">
      {/* HERO SECTION */}
      <section className="content-shell bg-texture-1">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 normal-case tracking-normal">
          I Nearly Lost Everything. <br />
          <span className="text-primary">More Than Once.</span>
        </h1>
        <div className="space-y-4 text-lg text-zinc-100 max-w-3xl">
          <p>There were times I thought I wouldn't make it through.</p>
          <p>Times I believed I had ruined my life beyond repair.</p>
          <p>Times I felt completely alone in my own head.</p>
          <p className="font-bold text-white text-xl">I'm still here.</p>
          <p className="font-bold text-primary text-xl">And this space exists because I stayed.</p>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="content-shell bg-texture-2">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-6 normal-case tracking-normal">What This Is</h2>
        <div className="space-y-4 text-zinc-100 text-lg leading-relaxed">
          <p>Melksham Mental Health isn't a clinic.</p>
          <p>It isn't a charity built from a boardroom.</p>
          <p className="font-semibold text-white">It's built from lived experience.</p>
          <p>From breakdowns.<br />From rebuilding.<br />From nearly losing everything and finding a reason to keep going.</p>
          <p>This is peer support.<br />Real people. Real struggle. Real honesty.</p>
          <p className="font-bold text-white">No pretending. No pressure. No judgement.</p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="content-shell bg-texture-3">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-6 normal-case tracking-normal">Who This Is For</h2>
        <div className="space-y-4 text-zinc-100 text-lg leading-relaxed">
          <p>This is for you if:</p>
          <ul className="space-y-2">
            <li className="flex gap-3 items-start">
              <span className="text-primary mt-1">•</span>
              <span>You feel like you've messed your life up beyond fixing.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-primary mt-1">•</span>
              <span>You're exhausted from holding it together.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-primary mt-1">•</span>
              <span>You've hit rock bottom more than once.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-primary mt-1">•</span>
              <span>You feel ashamed of your past.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-primary mt-1">•</span>
              <span>You just need someone who understands without explaining everything.</span>
            </li>
          </ul>
          <p className="font-semibold text-white pt-4">You don't need a diagnosis.</p>
          <p className="font-semibold text-white">You don't need to be "bad enough."</p>
          <p className="font-bold text-primary text-xl">You just need to show up.</p>
        </div>
      </section>

      {/* WHAT YOU'LL FIND HERE */}
      <section className="content-shell bg-texture-4">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-6 normal-case tracking-normal">What You'll Find Here</h2>
        <div className="space-y-4 text-zinc-100 text-lg leading-relaxed">
          <ul className="space-y-2">
            <li className="flex gap-3 items-start">
              <span className="text-primary mt-1">•</span>
              <span>A space to talk without being judged.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-primary mt-1">•</span>
              <span>People who understand cycles, relapse, and rebuilding.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-primary mt-1">•</span>
              <span>Honest conversations.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-primary mt-1">•</span>
              <span>Clear crisis guidance when needed.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-primary mt-1">•</span>
              <span>No fake positivity.</span>
            </li>
          </ul>
          <p className="font-bold text-white text-xl pt-4">Just support.</p>
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

      {/* IMPORTANT - CRISIS INFO */}
      <section className="content-shell bg-texture-1 border border-error/70">
        <h2 className="text-3xl font-black text-white mb-4 normal-case tracking-normal flex items-center gap-3">
          <FaExclamationTriangle className="text-error" /> Important
        </h2>
        <p className="text-zinc-100 text-lg mb-4">
          This is peer support. We are not a crisis service and we do not replace emergency care.
        </p>
        <ul className="space-y-2 text-zinc-100 text-lg">
          <li>• If you are in immediate danger, call <a href="tel:999" className="underline font-semibold">999</a>.</li>
          <li>• If you need urgent emotional support in the UK, call <a href="tel:116123" className="underline font-semibold">Samaritans on 116 123</a>.</li>
        </ul>
        <p className="mt-6 text-white font-bold text-xl">Asking for help is not weakness. Staying is strength.</p>
      </section>

      {/* CLOSING MESSAGE */}
      <section className="content-shell bg-texture-2">
        <p className="text-zinc-100 text-lg">If you're here, it means part of you still wants to survive.</p>
        <p className="text-white font-bold text-2xl mt-3">That's enough for today.</p>
      </section>
    </div>
  );
}
