export const metadata = {
  title: 'Blog | Melksham Mental Health',
  description: 'Real stories about setbacks, relapse, rebuilding, and growth.',
};

export default function BlogPage() {
  return (
    <div className="py-10 md:py-14 space-y-8">
      <section className="content-shell bg-texture-1">
        <p className="section-kicker">Page 5 — Blog</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-5 normal-case tracking-normal">
          Real stories. Real struggles. Real growth.
        </h1>
        <p className="text-lg text-zinc-100 mb-6">This blog exists to speak honestly about:</p>
        <ul className="space-y-2 text-lg text-zinc-100">
          <li>• Mental health setbacks</li>
          <li>• Relapse and rebuilding</li>
          <li>• Shame and recovery</li>
          <li>• The reality behind “strong” people</li>
        </ul>
        <p className="mt-6 text-zinc-100 text-lg">No toxic positivity. No pretending everything is easy. Just real conversations about staying alive and rebuilding your life when it feels broken.</p>
      </section>
    </div>
  );
}
