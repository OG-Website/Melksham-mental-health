import Link from 'next/link';
import { FaExternalLinkAlt, FaHandHoldingHeart, FaExclamationTriangle } from 'react-icons/fa';

export const metadata = {
  title: "Local Resources - Melksham & Wiltshire | Melksham Mental Health",
  description: "Mental health services and support in Melksham and Wiltshire.",
};

export default function LocalResourcesPage() {
  const localResources = [
    {
      name: "Wiltshire Mind",
      description: "Local mental health charity providing support services across Wiltshire",
      phone: "01380 728888",
      website: "https://wiltshiremind.co.uk",
      services: ["Counselling", "Support groups", "Wellbeing courses"]
    },
    {
      name: "Avon and Wiltshire Mental Health Partnership NHS Trust (AWP)",
      description: "NHS mental health services for Wiltshire residents",
      phone: "0300 421 6555",
      website: "https://www.awp.nhs.uk",
      services: ["Crisis support", "Community mental health teams", "Inpatient services"]
    },
    {
      name: "Melksham Community Hub",
      description: "Local community support and wellbeing activities",
      location: "Melksham Town Centre",
      services: ["Drop-in sessions", "Social activities", "Signposting"]
    },
    {
      name: "Wiltshire Council Adult Care",
      description: "Social care and mental health support from the local authority",
      phone: "0300 456 0111",
      services: ["Care assessments", "Community support", "Crisis intervention"]
    }
  ];

  return (
    <div>
      <div className="page-content">
        <p className="section-kicker">Local Services</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 normal-case tracking-normal">
          Local Mental Health Resources
        </h1>
        <p className="text-lg text-zinc-100 mb-12">Melksham and Wiltshire Services</p>

        <div className="space-y-6 text-left">
          {localResources.map((resource, index) => (
            <div key={index} className="border border-zinc-700 rounded-lg p-6 hover:border-primary/60 transition-colors">
              <h2 className="text-xl font-black text-white mb-3 normal-case tracking-normal" style={{ textShadow: 'none', filter: 'none' }}>
                {resource.name}
              </h2>
              <p className="text-zinc-200 mb-4">{resource.description}</p>

              {resource.phone && (
                <p className="text-zinc-300 mb-2 text-sm">
                  <strong className="text-white">Phone:</strong>{' '}
                  <a href={`tel:${resource.phone.replace(/\s/g, '')}`} className="text-orange-400 hover:underline">
                    {resource.phone}
                  </a>
                </p>
              )}

              {resource.website && (
                <p className="text-zinc-300 mb-2 text-sm">
                  <strong className="text-white">Website:</strong>{' '}
                  <a href={resource.website} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline inline-flex items-center gap-1">
                    {resource.website} <FaExternalLinkAlt className="text-xs" />
                  </a>
                </p>
              )}

              {resource.location && (
                <p className="text-zinc-300 mb-2 text-sm">
                  <strong className="text-white">Location:</strong> {resource.location}
                </p>
              )}

              {resource.services && (
                <div className="mt-3">
                  <strong className="text-white text-sm block mb-2">Services:</strong>
                  <div className="flex flex-wrap gap-2">
                    {resource.services.map((service, idx) => (
                      <span key={idx} className="bg-primary/20 text-orange-300 px-3 py-1 rounded-full text-xs font-semibold border border-primary/30">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 border border-zinc-700 rounded-lg p-6 text-left">
          <h2 className="text-2xl font-black text-white mb-4 normal-case tracking-normal" style={{ textShadow: 'none', filter: 'none' }}>Your GP</h2>
          <p className="text-zinc-200 text-sm mb-3">
            Your GP is often the best first point of contact for mental health support. They can:
          </p>
          <ul className="text-zinc-300 text-sm space-y-2">
            <li>• Provide initial assessment and advice</li>
            <li>• Prescribe medication if needed</li>
            <li>• Refer you to specialist services</li>
            <li>• Connect you with local support</li>
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link href="/resources/crisis" className="metal-button metal-button--small pulse-attention">
            <FaExclamationTriangle /> Crisis Help
          </Link>
          <Link href="/resources/national" className="metal-button metal-button--small">
            National Services
          </Link>
          <Link href="/portal/self-referral" className="metal-button metal-button--small">
            <FaHandHoldingHeart /> Self-Referral Links
          </Link>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-700 text-center text-sm text-zinc-400">
          <p>
            For self-referral links and direct service contacts, visit{' '}
            <Link href="/portal/self-referral" className="text-orange-400 underline">Self-Referral Links</Link>{' '}
            (members portal).
          </p>
        </div>
      </div>
    </div>
  );
}
