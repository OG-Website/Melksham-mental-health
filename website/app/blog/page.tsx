export const metadata = {
  title: 'Blog | Melksham Mental Health',
  description: 'Real stories about setbacks, relapse, rebuilding, and growth.',
};

export default function BlogPage() {
  return (
    <div>
      <div className="page-content">
        <p className="section-kicker">Page 5 — Blog</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 normal-case tracking-normal">
          Real Stories. Real Struggles. Real Growth.
        </h1>

        <div className="mt-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 normal-case tracking-normal">What This Blog Is About</h2>
          <p className="text-lg text-zinc-100 mb-6">This blog exists to speak honestly about:</p>
          <div className="space-y-3 text-lg text-zinc-100 mb-12">
            <p>• Mental health setbacks</p>
            <p>• Relapse and rebuilding</p>
            <p>• Shame and recovery</p>
            <p>• The reality behind "strong" people</p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 normal-case tracking-normal">Our Approach</h2>
          <div className="space-y-4 text-lg text-zinc-100 leading-relaxed">
            <p className="font-bold text-white">No toxic positivity.</p>
            <p className="font-bold text-white">No pretending everything is easy.</p>
            <p className="font-semibold text-primary text-xl mt-6">Just real conversations about staying alive and rebuilding your life when it feels broken.</p>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-zinc-100 text-lg italic">"Coming soon: Stories from lived experience, written with honesty and hope."</p>
          <p className="text-white mt-4">Check back soon for updates.</p>
        </div>
      </div>
    </div>
  );
}
