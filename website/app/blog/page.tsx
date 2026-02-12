export const metadata = {
  title: 'Blog | Melksham Mental Health',
  description: 'Real stories about setbacks, relapse, rebuilding, and growth.',
};

export default function BlogPage() {
  return (
    <div className="space-y-0">
      <section className="page-section bg-texture-1">
        <p className="section-kicker">Page 5 — Blog</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-5 normal-case tracking-normal max-w-4xl">
          Real Stories. Real Struggles. Real Growth.
        </h1>
      </section>

      <section className="page-section bg-texture-2">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4 normal-case tracking-normal">What This Blog Is About</h2>
        <p className="text-lg text-zinc-100 mb-6 max-w-4xl">This blog exists to speak honestly about:</p>
        <ul className="space-y-2 text-lg text-zinc-100 max-w-4xl">
          <li className="flex gap-3 items-start">
            <span className="text-primary mt-1">•</span>
            <span>Mental health setbacks</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-primary mt-1">•</span>
            <span>Relapse and rebuilding</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-primary mt-1">•</span>
            <span>Shame and recovery</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-primary mt-1">•</span>
            <span>The reality behind "strong" people</span>
          </li>
        </ul>
      </section>

      <section className="page-section bg-texture-3">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4 normal-case tracking-normal">Our Approach</h2>
        <div className="space-y-4 text-lg text-zinc-100 leading-relaxed max-w-4xl">
          <p className="font-bold text-white">No toxic positivity.</p>
          <p className="font-bold text-white">No pretending everything is easy.</p>
          <p className="font-semibold text-primary text-xl mt-6">Just real conversations about staying alive and rebuilding your life when it feels broken.</p>
        </div>
      </section>

      <section className="page-section bg-texture-4">
        <p className="text-zinc-100 text-lg italic max-w-4xl">"Coming soon: Stories from lived experience, written with honesty and hope."</p>
        <p className="text-white mt-4 max-w-4xl">Check back soon for updates.</p>
      </section>
    </div>
  );
}
