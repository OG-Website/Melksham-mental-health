import Link from 'next/link';
import { FaArrowRight, FaExclamationTriangle, FaHeart, FaLifeRing } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <div className="page-content">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-8 normal-case tracking-normal">
          I Nearly Lost Everything. <br />
          <span className="text-primary">More Than Once.</span>
        </h1>
        
        <div className="space-y-6 text-lg text-zinc-100 mb-12">
          <p>There were times I thought I wouldn't make it through.</p>
          <p>Times I believed I had ruined my life beyond repair.</p>
          <p>Times I felt completely alone in my own head.</p>
          <p className="font-bold text-white text-xl">I'm still here.</p>
          <p className="font-bold text-primary text-xl">And this space exists because I stayed.</p>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 normal-case tracking-normal mt-16">What This Is</h2>
        <div className="space-y-4 text-zinc-100 text-lg leading-relaxed mb-12">
          <p>Melksham Mental Health isn't a clinic.</p>
          <p>It isn't a charity built from a boardroom.</p>
          <p className="font-semibold text-white">It's built from lived experience.</p>
          <p>From breakdowns. From rebuilding. From nearly losing everything and finding a reason to keep going.</p>
          <p>This is peer support. Real people. Real struggle. Real honesty.</p>
          <p className="font-bold text-white">No pretending. No pressure. No judgement.</p>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 normal-case tracking-normal mt-16">Who This Is For</h2>
        <div className="space-y-4 text-zinc-100 text-lg leading-relaxed mb-12">
          <p>This is for you if:</p>
          <div className="space-y-3 my-6">
            <p>• You feel like you've messed your life up beyond fixing.</p>
            <p>• You're exhausted from holding it together.</p>
            <p>• You've hit rock bottom more than once.</p>
            <p>• You feel ashamed of your past.</p>
            <p>• You just need someone who understands without explaining everything.</p>
          </div>
          <p className="font-semibold text-white pt-4">You don't need a diagnosis.</p>
          <p className="font-semibold text-white">You don't need to be "bad enough."</p>
          <p className="font-bold text-primary text-xl">You just need to show up.</p>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 normal-case tracking-normal mt-16">What You'll Find Here</h2>
        <div className="space-y-4 text-zinc-100 text-lg leading-relaxed mb-12">
          <div className="space-y-3 my-6">
            <p>• A space to talk without being judged.</p>
            <p>• People who understand cycles, relapse, and rebuilding.</p>
            <p>• Honest conversations.</p>
            <p>• Clear crisis guidance when needed.</p>
            <p>• No fake positivity.</p>
          </div>
          <p className="font-bold text-white text-xl pt-4">Just support.</p>
        </div>

        <div className="mt-12 mb-12 flex flex-wrap gap-4 justify-center">
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

        <div className="mt-16 pt-8 border-t-4 border-error/70">
          <h2 className="text-3xl font-black text-white mb-4 normal-case tracking-normal flex items-center gap-3 justify-center">
            <FaExclamationTriangle className="text-error" /> Important
          </h2>
          <p className="text-zinc-100 text-lg mb-4">
            This is peer support. We are not a crisis service and we do not replace emergency care.
          </p>
          <div className="space-y-2 text-zinc-100 text-lg mb-6">
            <p>• If you are in immediate danger, call <a href="tel:999" className="underline font-semibold">999</a>.</p>
            <p>• If you need urgent emotional support in the UK, call <a href="tel:116123" className="underline font-semibold">Samaritans on 116 123</a>.</p>
          </div>
          <p className="mt-6 text-white font-bold text-xl">Asking for help is not weakness. Staying is strength.</p>
        </div>

        <div className="mt-16">
          <p className="text-zinc-100 text-lg">If you're here, it means part of you still wants to survive.</p>
          <p className="text-white font-bold text-2xl mt-3">That's enough for today.</p>
        </div>
      </div>
    </div>
  );
}
