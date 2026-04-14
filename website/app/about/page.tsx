import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

export const metadata = {
  title: 'About | Melksham Mental Health',
  description: 'The personal story behind Melksham Mental Health and why it exists.',
};

const LIFE_SECTIONS = [
  {
    title: 'Where I Started',
    paragraphs: [
      'I was born at Wroughton Hospital on 30 January 1989 and grew up in Broadtown in Wiltshire. I am the middle of three boys. My older brother has a different dad, but he has been there since the day I was born and he is still there now. My younger brother is from the same father as me.',
      'I did know my dad for a while, but he was never a stable or meaningful part of my life. He left his mark in the wrong way and, in the end, he became somebody who meant very little to me.',
      'When my mum remarried, my stepdad brought stability into our lives. Around 1997 we moved to Haydon Wick and, for those three years, life felt good. It felt like a proper home and a proper childhood.',
    ],
  },
  {
    title: 'Cornwall And What Happened There',
    paragraphs: [
      'By 2000 my mum had fallen in love with St Ives in Cornwall and we moved there so that she and my stepdad could run a bed and breakfast. That move changed everything.',
      'Cornwall is where my life went badly wrong. I was sexually abused there and I could not talk about it. I carried it in silence, and that silence turned into anger, shame, fear and self-destruction.',
      'I started drinking at around 12 or 13. What should have been a childhood became something much darker. I learned to bury pain instead of speak about it, and that set the tone for years of chaos.',
    ],
  },
  {
    title: 'Crime, Drink, Drugs And Losing Myself',
    paragraphs: [
      'As I got older, the drinking became part of a much bigger mess. My life became tied up with crime, violence, selling drugs, bad choices and hurting people around me. I spent years living in survival mode, acting hard, doing damage and pretending I was in control when really I was not.',
      'I was kicked out around 2005 to 2006 and moved to Hemel Hempstead. The change of place did not fix anything. The pain came with me. So did the drink, the anger and the way I dealt with life.',
      'I was an alcoholic for most of my adult life. A lot of what I built and a lot of what I lost sat on top of trauma I had never dealt with properly. I kept pushing forward on the outside while things were rotting on the inside.',
    ],
  },
  {
    title: '2023 And The Collapse',
    paragraphs: [
      'In 2023 I got arrested and my life unravelled properly. That period dragged everything into the light. I lost financial stability, I lost direction, and I lost access to my children. That pain is one of the worst things I have ever lived through.',
      'At the same time, my mum was battling cancer in Spain and I was dealing with court, shame, fear and the consequences of years of self-destruction. I had to look directly at the damage in my life instead of running from it.',
      'That period broke me open. It forced me to confront the abuse, the alcoholism, the crime, the rage and the person I had become. It also forced me to decide whether I was going to keep sinking or finally do something different.',
    ],
  },
  {
    title: 'Rebuilding And Why This Exists',
    paragraphs: [
      'From 2023 to now, I have been rebuilding my life. That has meant stopping the drink, facing what happened to me, taking responsibility for what I have done, and trying to become a better father, a better man and a better example to the people I love.',
      'Melksham Mental Health was created just after the first lockdown, around 2021 to 2022, and it has grown while I have been rebuilding my own life. This platform exists because I know what it is like to carry trauma for years, to self-destruct, to feel ashamed, and to think you are too far gone to come back from it.',
      'This is not a polished success story. It is the truth behind why I built this. I wanted to create something honest for people who are struggling with trauma, addiction, violence, abuse, grief, isolation or the kind of pain they cannot easily explain. If someone lands here and feels less alone, then at least some of what I have lived through can be used for something good.',
    ],
  },
];

export default function AboutPage() {
  return (
    <div>
      <div className="page-content">
        <p className="section-kicker">About</p>
        <h1 className="text-4xl md:text-5xl font-black text-white normal-case tracking-normal mb-4">
          About Melksham Mental Health
        </h1>
        <p className="text-lg text-zinc-300 mb-12">
          This is the personal story behind Melksham Mental Health. It is not a clean biography or a sanitised
          version of events. It is the truth of where this platform came from and why it matters to me.
        </p>

        <div className="space-y-14 text-left">
          {LIFE_SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4 normal-case tracking-normal">
                {section.title}
              </h2>
              <div className="space-y-4 text-base text-zinc-100 leading-relaxed">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t-4 border-error/70">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4 normal-case tracking-normal flex items-center gap-3 justify-center">
            <FaExclamationTriangle className="text-error" /> If You&apos;re In Crisis
          </h2>
          <p className="text-zinc-100 mb-4">
            If you&apos;re experiencing thoughts of suicide, self-harm or immediate danger, please reach out now:
          </p>
          <div className="space-y-2 text-zinc-100 mb-6">
            <p>Call <a href="tel:999" className="underline font-semibold">999</a> for immediate danger</p>
            <p>Call <a href="tel:116123" className="underline font-semibold">Samaritans on 116 123</a> (24/7, free)</p>
            <p>Call <a href="tel:111" className="underline font-semibold">NHS 111</a> and choose the mental health option</p>
            <p>Text <a href="sms:85258" className="underline font-semibold">SHOUT to 85258</a></p>
            <p>In Wiltshire call <a href="tel:08009530110" className="underline font-semibold">0800 953 0110</a></p>
          </div>
          <p className="text-sm text-zinc-200">
            This platform offers peer-led support and signposting. It does not replace emergency or clinical services.
            {' '}
            <Link href="/resources/crisis" className="underline font-semibold">
              See Crisis Help
            </Link>
            {' '}
            for more.
          </p>
        </div>
      </div>
    </div>
  );
}
