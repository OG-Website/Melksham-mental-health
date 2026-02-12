export const metadata = {
  title: 'My Story | Melksham Mental Health',
  description: 'Why Melksham Mental Health exists and the lived experience behind it.',
};

const storyBlocks = [
  {
    title: 'Why This Exists',
    body: [
      'This didn’t start as a project. It started as survival.',
      'For years, life moved in cycles. I would build stability, relationships, work, trust — then watch it fall apart. Sometimes slowly. Sometimes all at once.',
      'I carried shame, anger, and the weight of feeling like I should have been stronger. The hardest part wasn’t the collapse. It was feeling like I was the only one who couldn’t get it right.',
    ],
    variant: 'bg-texture-2',
  },
  {
    title: 'The Low Points',
    body: [
      'There were nights I didn’t recognise myself.',
      'There were times I thought walking away from everything would be easier than trying again.',
      'There were times I convinced myself the world would be better without me. I’m not proud of those thoughts, but they were real — and pretending they never happened helps no one.',
    ],
    variant: 'bg-texture-2',
  },
  {
    title: 'What Changed',
    body: [
      'There wasn’t a miracle. There wasn’t one huge turning point.',
      'It was smaller than that: one honest conversation, one person who didn’t judge me, one day where I chose not to give up. Then another. Then another.',
      'Recovery wasn’t becoming perfect. It was about staying.',
    ],
    variant: 'bg-texture-2',
  },
  {
    title: 'Why I Built This',
    body: [
      'I know what it feels like to think you’ve ruined everything.',
      'I know what it’s like to rebuild from nothing.',
      'I know how isolating it is when everyone else looks fine and you’re barely holding it together.',
      'I don’t claim to have all the answers. But I understand. Sometimes understanding is where healing starts.',
    ],
    variant: 'bg-texture-2',
  },
];

export default function AboutPage() {
  return (
    <div className="py-10 md:py-14 space-y-8">
      <section className="content-shell bg-texture-2">
        <p className="section-kicker">Page 2 — My Story</p>
        <h1 className="text-4xl md:text-5xl font-black text-white normal-case tracking-normal">Built from breakdowns, rebuilding, and staying.</h1>
      </section>

      {storyBlocks.map((block) => (
        <section key={block.title} className={`content-shell ${block.variant}`}>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 normal-case tracking-normal">{block.title}</h2>
          <div className="space-y-4 text-lg text-zinc-100 leading-relaxed">
            {block.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
