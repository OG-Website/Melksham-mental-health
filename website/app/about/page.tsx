import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

export const metadata = {
  title: 'My Story | Melksham Mental Health',
  description: 'The story behind Melksham Mental Health — from chaos to community, by Rob Johnston.',
};

export default function AboutPage() {
  return (
    <div>
      <div className="page-content">
        <p className="section-kicker">My Story</p>
        <h1 className="text-4xl md:text-5xl font-black text-white normal-case tracking-normal mb-4">
          From Chaos to Community
        </h1>
        <p className="text-lg text-zinc-300 mb-12">My journey to building Melksham Mental Health, by Rob Johnston.</p>

        <div className="space-y-14 text-left">

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 normal-case tracking-normal">Origins and Family Dynamics</h2>
            <div className="space-y-4 text-base text-zinc-100 leading-relaxed">
              <p>I was born in a small town as the middle of three boys: I have an older brother — not the same dad, but he has been there since I was born — and a younger brother from my father. On my father&apos;s side I am the eldest, yet I never really knew him — he left early and played no meaningful role in my life. Longitudinal research from a large UK birth cohort shows that children who grow up without a father are more likely to experience depression during adolescence and early adulthood; early childhood father absence is particularly associated with more severe depression. When my mother remarried, my stepfather provided some stability, but he eventually ended up in trouble and was absent for much of my adolescence. By the time I was six we had moved from Cornwall to different towns, carrying the turbulence of family breakdown with us. I also have siblings I&apos;ve never met — children my biological father had with other partners.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 normal-case tracking-normal">Trauma, Rebellion and Substance Use</h2>
            <div className="space-y-4 text-base text-zinc-100 leading-relaxed">
              <p>I remember home life being as incredible as it could be, and I was given everything. I still faced different obstacles growing up and, without really having anyone to turn to, I drifted towards drink and drugs.</p>
              <p>I was a &ldquo;city boy&rdquo; living in rural Cornwall and I often felt misunderstood. Boredom and my personality pushed me towards being the instigator of drugs. Romantic relationships came and went, leaving me feeling more alone.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 normal-case tracking-normal">Finding Identity: Music and Building</h2>
            <div className="space-y-4 text-base text-zinc-100 leading-relaxed">
              <p>Amid the chaos I discovered two things that gave me purpose: music and building. I immersed myself in drum and bass and became a DJ and producer, releasing tracks. Music allowed me to channel my pain into something creative. I also worked in construction and found that I was exceptionally good at building things — projects came together quickly under my hands. Yet, despite success in these areas, my personal life remained unstable; unresolved trauma and substance use continued to haunt me.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 normal-case tracking-normal">Lockdown Loneliness and the Birth of Melksham Mental Health</h2>
            <div className="space-y-4 text-base text-zinc-100 leading-relaxed">
              <p>When COVID-19 hit and the UK announced its first lockdown in March 2020, my world shrank to the walls of my friend&apos;s house. Like many people, I felt cut off and hopeless. A cross-sectional study during the first UK lockdown found that 27% of adults reported feeling lonely and that loneliness was especially high among younger people and those experiencing depression. Research also shows that prolonged loneliness increases the risk of mood disorders, self-harm and suicide, and has lasting effects on physical and mental health.</p>
              <p>Living with a friend helped me survive financially, but the isolation and memories of past trauma became overwhelming. In this period I launched <strong className="text-white">Melksham Mental Health</strong> so that people struggling during lockdown could connect, talk about their experiences and support one another. The group grew quickly, but due to legal restrictions beyond my control we had to pause activities. Despite the setback, this first attempt taught me the power of peer-support and community.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 normal-case tracking-normal">Joining a Local Group: Learning the Power of Peer Support</h2>
            <div className="space-y-4 text-base text-zinc-100 leading-relaxed">
              <p>After the community paused, I joined a local peer-support group in Melksham. Sitting in a circle, passing a rugby ball as a talking stick and listening to other men share their struggles made me realise that I wasn&apos;t alone. Peer-support programmes involve people with shared experiences supporting each other, and research shows that these programmes improve well-being, reduce hospital stays, expand support networks and increase self-esteem, confidence and social skills. This experience inspired me to imagine a more structured platform where people could access knowledge and support on their own terms.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 normal-case tracking-normal">Creating Melksham Mental Health: A New Vision for Community Support</h2>
            <div className="space-y-4 text-base text-zinc-100 leading-relaxed">
              <p>The lessons from lockdown and peer support led me to formally develop Melksham Mental Health as an independent platform. Although the website uses the .us domain (melksham-mentalhealth.us), the organisation is called Melksham Mental Health — the dot US simply signals that the platform is <em>for us</em>, the community, not that the group itself is named &ldquo;US.&rdquo;</p>
              <p>I created Melksham Mental Health because social media platforms often restrict how communities operate, and I wanted a safe space where we could control membership and protect our discussions. The platform emphasises unity and mutual support: recovery is not about you versus them — it&apos;s about all of us working together. Melksham Mental Health includes:</p>
              <ul className="space-y-3 pl-4">
                <li><strong className="text-white">Fifty topic-specific courses</strong> — Each course lasts up to two hours and covers topics such as coping with trauma, managing anxiety, rebuilding relationships and developing resilience. Members will be able to attend live sessions delivered by me and guest speakers, with plans for weekly, fortnightly and monthly group sessions.</li>
                <li><strong className="text-white">An online forum</strong> — A secure members&apos; feed where people can share experiences, ask questions and support one another without fear of judgment or interference from outside parties. Peer support research suggests that sharing lived experiences in this way enhances confidence and social connection.</li>
                <li><strong className="text-white">Flexible access</strong> — Once fully developed, the courses will be recorded so that members can access them at any time. I also hope to introduce group activities and collaborations with other mental health practitioners.</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 normal-case tracking-normal">Rock Bottom: The Police Chase and Turning Point</h2>
            <div className="space-y-4 text-base text-zinc-100 leading-relaxed">
              <p>Despite the progress I had made, unresolved trauma and substance use caught up with me. On 3 January 2023 I hit rock bottom. After a night of heavy drinking, I drove my car recklessly through Melksham: wrong side of the road, speeding over 90 mph, overtaking buses, mounting pavements and even driving on blown tyres. In my passenger seat were a friend and his dog — both silent witnesses to my spiral. The police chase ended with charges for dangerous driving, assault, fraud and other offences.</p>
              <p>In that moment I realised that I was on the path to becoming another statistic. Studies show that survivors of childhood trauma who engage in substance use are at high risk of suicide attempts and addiction. Instead of succumbing, I made a decision: <strong className="text-white">I stopped drinking that day.</strong> It was the hardest choice I&apos;ve ever made, but it saved my life.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 normal-case tracking-normal">Recovery and Purpose</h2>
            <div className="space-y-4 text-base text-zinc-100 leading-relaxed">
              <p>Sobriety brought clarity. I began working on my legal issues, fought for my parental rights and focused on rebuilding my life. I channelled my energy into developing Melksham Mental Health, using my experiences to design courses that address the complex interplay between trauma, addiction, relationships and mental health. My goal is not only to share my story but to provide practical tools and a supportive community for people who feel alone. I know I can&apos;t help everyone, but if I can help even one person, then our community will have made a difference.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 normal-case tracking-normal">Message to Readers</h2>
            <div className="space-y-4 text-base text-zinc-100 leading-relaxed">
              <p>I have survived violence, abuse, addiction, loneliness and a brush with the law. I&apos;ve learned that early trauma and father absence can profoundly shape mental health and that survivors of such trauma face a high risk of depression, addiction and suicide. During the COVID-19 lockdown many people felt isolated and lonely, and prolonged loneliness increases the risk of mental health issues. Peer support and community are powerful antidotes.</p>
              <p>Melksham Mental Health exists because of these lessons. It is a place where we can confront our pasts, share our experiences and build resilience together. Whether you&apos;re struggling with loneliness, trauma, addiction or just need someone to listen, know that you are welcome. I&apos;m still on my journey, but together we can turn hardship into healing.</p>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t-4 border-error/70">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4 normal-case tracking-normal flex items-center gap-3 justify-center">
            <FaExclamationTriangle className="text-error" /> If you&apos;re in crisis
          </h2>
          <p className="text-zinc-100 mb-4">
            If you&apos;re experiencing thoughts of suicide or self-harm, please reach out for help now:
          </p>
          <div className="space-y-2 text-zinc-100 mb-6">
            <p>• Call <a href="tel:999" className="underline font-semibold">999</a> for immediate danger</p>
            <p>• Call <a href="tel:116123" className="underline font-semibold">Samaritans on 116 123</a> (24/7, free)</p>
            <p>• Call <a href="tel:111" className="underline font-semibold">NHS 111</a> and select mental health option (24/7)</p>
            <p>• Text <a href="sms:85258" className="underline font-semibold">SHOUT to 85258</a> on your mobile (24/7, or text manually if link doesn&apos;t open)</p>
            <p>• In Wiltshire: <a href="tel:08009530110" className="underline font-semibold">0800 953 0110</a> (24/7 crisis line)</p>
          </div>
          <p className="text-sm text-zinc-200">
            This content reflects lived experience but doesn&apos;t replace professional help.{' '}
            <Link href="/resources/crisis" className="underline font-semibold">See our Crisis Help page</Link> for more resources.
          </p>
        </div>

        {/* Research sources */}
        <div className="mt-12 pt-6 border-t border-zinc-700 text-left">
          <h2 className="text-sm font-black text-zinc-400 mb-3 normal-case tracking-normal">Research Sources Referenced</h2>
          <p className="text-zinc-500 text-xs mb-2">
            The research references woven into this story draw on evidence from trusted sources. Key resources for further reading:
          </p>
          <ul className="space-y-1 text-xs text-zinc-500">
            <li>•{' '}
              <a href="https://www.mind.org.uk/information-support/tips-for-everyday-living/loneliness/loneliness-and-mental-health/" target="_blank" rel="noopener noreferrer" className="text-orange-400/70 hover:text-orange-400 underline">
                Mind UK — Loneliness and Mental Health
              </a>
            </li>
            <li>•{' '}
              <a href="https://www.mentalhealth.org.uk/a-to-z/c/children-and-young-people" target="_blank" rel="noopener noreferrer" className="text-orange-400/70 hover:text-orange-400 underline">
                Mental Health Foundation — Children, Trauma and Resilience
              </a>
            </li>
            <li>•{' '}
              <a href="https://www.nspcc.org.uk/preventing-abuse/child-abuse-and-neglect/child-sexual-abuse/effects-of-child-sexual-abuse/" target="_blank" rel="noopener noreferrer" className="text-orange-400/70 hover:text-orange-400 underline">
                NSPCC — Effects of Child Sexual Abuse
              </a>
            </li>
            <li>•{' '}
              <a href="https://www.mind.org.uk/information-support/tips-for-everyday-living/peer-support/about-peer-support/" target="_blank" rel="noopener noreferrer" className="text-orange-400/70 hover:text-orange-400 underline">
                Mind UK — About Peer Support
              </a>
            </li>
            <li>•{' '}
              <a href="https://www.nhs.uk/mental-health/self-help/tips-and-support/loneliness/" target="_blank" rel="noopener noreferrer" className="text-orange-400/70 hover:text-orange-400 underline">
                NHS — Loneliness and Mental Health Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
