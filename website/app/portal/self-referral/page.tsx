import { redirect } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaExternalLinkAlt, FaExclamationTriangle } from 'react-icons/fa';
import { loadCurrentSessionUser } from '@/lib/portalAuth';

export const metadata = {
  title: 'Self-Referral & Support Links | Melksham Mental Health Portal',
  description: 'Direct self-referral links to NHS, ADHD, cancer support, talking therapies and more.',
};

const selfReferralLinks = [
  {
    category: 'NHS Talking Therapies (IAPT)',
    links: [
      {
        name: 'Refer Yourself to NHS Talking Therapies',
        description: 'Free NHS psychological therapies for anxiety and depression — self-refer online or by phone without a GP referral.',
        url: 'https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/',
        phone: null,
      },
      {
        name: 'AWP / Wiltshire IAPT Self-Referral',
        description: 'Self-refer to Avon & Wiltshire Mental Health Partnership NHS Trust talking therapies.',
        url: 'https://www.awp.nhs.uk/service-users-and-carers/talking-therapies',
        phone: null,
      },
    ],
  },
  {
    category: 'ADHD — Right to Choose',
    links: [
      {
        name: 'Right to Choose — ADHD Assessment',
        description: 'Under the NHS Right to Choose scheme you can request an ADHD assessment with a specialist provider without a long waiting list. Ask your GP to refer you.',
        url: 'https://psychiatry-uk.com/right-to-choose/',
        phone: null,
      },
      {
        name: 'ADHD UK — Right to Choose Guide',
        description: 'Step-by-step guide explaining the Right to Choose pathway for ADHD diagnosis on the NHS.',
        url: 'https://adhduk.co.uk/right-to-choose/',
        phone: null,
      },
      {
        name: 'ADHD Foundation',
        description: 'Neurodiversity charity offering resources, diagnosis pathways, and support.',
        url: 'https://www.adhdfoundation.org.uk',
        phone: '0151 541 9020',
      },
    ],
  },
  {
    category: 'Cancer & Serious Illness Support',
    links: [
      {
        name: 'Macmillan Cancer Support',
        description: 'Support for anyone affected by cancer — financial help, emotional support, and practical advice.',
        url: 'https://www.macmillan.org.uk',
        phone: '0808 808 00 00',
      },
      {
        name: 'Cancer Research UK',
        description: 'Information about cancer types, treatment, and how to get support.',
        url: 'https://www.cancerresearchuk.org',
        phone: null,
      },
    ],
  },
  {
    category: 'Mental Health Self-Referral',
    links: [
      {
        name: 'NHS Mental Health Self-Referral',
        description: 'Find your local NHS mental health self-referral service.',
        url: 'https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/',
        phone: '111',
      },
      {
        name: 'Mind — Find Local Services',
        description: 'Find local Mind services, support groups and mental health services near you.',
        url: 'https://www.mind.org.uk/information-support/local-minds/',
        phone: '0300 123 3393',
      },
      {
        name: 'Wiltshire Mind',
        description: 'Local mental health support across Wiltshire.',
        url: 'https://www.wiltshiremind.co.uk',
        phone: null,
      },
      {
        name: 'Rethink Mental Illness',
        description: 'Self-referral to support groups, carer groups, and mental health services.',
        url: 'https://www.rethink.org/help-in-your-area/services-groups-near-you/',
        phone: '0808 801 0525',
      },
    ],
  },
  {
    category: 'Crisis & Urgent Support',
    links: [
      {
        name: 'Samaritans',
        description: 'Free, confidential support 24/7 — call, email, or visit.',
        url: 'https://www.samaritans.org',
        phone: '116 123',
      },
      {
        name: 'Shout Crisis Text Line',
        description: 'Text SHOUT to 85258 — free, 24/7 mental health crisis support by text.',
        url: 'https://giveusashout.org',
        phone: 'Text SHOUT to 85258',
      },
      {
        name: 'Crisis Care — AWP Wiltshire (24/7)',
        description: 'Wiltshire 24/7 mental health crisis helpline.',
        url: 'https://www.awp.nhs.uk',
        phone: '0800 953 0110',
      },
      {
        name: 'CALM (Campaign Against Living Miserably)',
        description: 'Helpline and webchat for people in crisis, particularly men.',
        url: 'https://www.thecalmzone.net',
        phone: '0800 58 58 58',
      },
    ],
  },
  {
    category: 'Addiction & Substance Use',
    links: [
      {
        name: 'Frank — Drug Information & Referral',
        description: 'Talk to Frank — confidential drugs advice and referral to local treatment services.',
        url: 'https://www.talktofrank.com',
        phone: '0300 123 6600',
      },
      {
        name: 'Alcoholics Anonymous',
        description: 'Free support and local meetings for anyone with alcohol dependency.',
        url: 'https://www.alcoholics-anonymous.org.uk',
        phone: '0800 9177 650',
      },
      {
        name: 'Change Grow Live (Wiltshire)',
        description: 'Free drug and alcohol support service in Wiltshire.',
        url: 'https://www.changegrowlive.org',
        phone: null,
      },
    ],
  },
  {
    category: 'Young People',
    links: [
      {
        name: 'YoungMinds — Self-Refer for Help',
        description: 'Mental health resources for young people, plus a parent helpline.',
        url: 'https://www.youngminds.org.uk/young-person/find-help/',
        phone: '0808 802 5544 (Parents)',
      },
      {
        name: 'Childline',
        description: 'Free, confidential support for children and young people.',
        url: 'https://www.childline.org.uk',
        phone: '0800 1111',
      },
    ],
  },
  {
    category: 'Domestic Abuse',
    links: [
      {
        name: 'National Domestic Abuse Helpline',
        description: '24/7 confidential support for anyone experiencing domestic abuse.',
        url: 'https://www.nationaldahelpline.org.uk',
        phone: '0808 2000 247',
      },
      {
        name: 'Mankind Initiative (Male Victims)',
        description: 'Support for male victims of domestic abuse.',
        url: 'https://www.mankind.org.uk',
        phone: '01823 334244',
      },
    ],
  },
  {
    category: 'Autism & Neurodiversity',
    links: [
      {
        name: 'National Autistic Society',
        description: 'Information, support, and self-referral pathways for autism diagnosis.',
        url: 'https://www.autism.org.uk',
        phone: '0808 800 4104',
      },
      {
        name: 'Ambitious About Autism',
        description: 'Support for autistic children and young people.',
        url: 'https://www.ambitiousaboutautism.org.uk',
        phone: null,
      },
    ],
  },
];

export default async function SelfReferralPage() {
  const { user } = await loadCurrentSessionUser();

  if (!user) {
    redirect('/portal/login?next=/portal/self-referral');
  }

  return (
    <div className="page-content">
      <div className="flex items-center gap-3 mb-2">
        <Link href="/portal" className="text-zinc-400 hover:text-orange-400 transition-colors">
          <FaArrowLeft />
        </Link>
        <p className="section-kicker">Members Portal</p>
      </div>
      <h1 className="text-3xl md:text-4xl font-black text-white mb-2 normal-case tracking-normal">
        Self-Referral &amp; Support Links
      </h1>
      <p className="text-zinc-300 text-sm mb-2 max-w-2xl mx-auto">
        You don&apos;t always need a GP referral to access help. Many services below accept
        self-referrals — you can contact them directly. All services are free or NHS-funded
        unless otherwise noted.
      </p>
      <div className="bg-red-900/20 border border-red-500/40 rounded-lg px-4 py-3 mb-8 text-sm text-red-200 flex items-start gap-3 max-w-2xl mx-auto text-left">
        <FaExclamationTriangle className="text-red-400 flex-shrink-0 mt-0.5" />
        <span>
          <strong>In crisis?</strong> Call <a href="tel:999" className="underline">999</a> or{' '}
          <a href="tel:116123" className="underline">Samaritans 116 123</a> (24/7, free).
          In Wiltshire: <a href="tel:08009530110" className="underline">0800 953 0110</a> (24/7).
        </span>
      </div>

      <div className="space-y-10 text-left">
        {selfReferralLinks.map((section) => (
          <div key={section.category}>
            <h2 className="text-xl font-black text-white mb-4 normal-case tracking-normal border-b border-zinc-700 pb-2">
              {section.category}
            </h2>
            <div className="space-y-3">
              {section.links.map((link) => (
                <div key={link.name} className="border border-zinc-700 rounded-lg px-5 py-4 hover:border-orange-500/40 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-300 font-semibold text-base hover:text-orange-200 transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                        <FaExternalLinkAlt className="text-xs text-zinc-500" />
                      </a>
                      <p className="text-zinc-300 text-sm mt-1 leading-relaxed">{link.description}</p>
                      {link.phone && (
                        <p className="text-zinc-400 text-xs mt-2">
                          📞{' '}
                          <a href={`tel:${link.phone.replace(/\s/g, '')}`} className="text-orange-400 underline">
                            {link.phone}
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 border border-zinc-700 rounded-lg px-5 py-4 text-sm text-zinc-400">
        <p className="text-zinc-300 font-semibold mb-1">Disclaimer</p>
        <p>
          This information is provided in good faith. Services, phone numbers and referral pathways
          may change — always verify details on the official website. This page does not replace
          professional medical advice. If you are unsure, speak to your GP or call NHS 111.
        </p>
      </div>
    </div>
  );
}
