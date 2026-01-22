export const metadata = {
  title: "National Resources - UK Mental Health Services | Melksham Mental Health",
  description: "UK-wide mental health charities, NHS services, and national support organizations.",
};

export default function NationalResourcesPage() {
  const nationalResources = [
    {
      name: "Mind",
      description: "Leading mental health charity in England and Wales",
      phone: "0300 123 3393",
      website: "https://www.mind.org.uk",
      services: ["Information", "Legal advice", "Local Mind services"]
    },
    {
      name: "Rethink Mental Illness",
      description: "Support and campaign for those affected by mental illness",
      phone: "0808 801 0525",
      website: "https://www.rethink.org",
      services: ["Advice service", "Support groups", "Campaigns"]
    },
    {
      name: "Mental Health Foundation",
      description: "UK charity for mental health research and information",
      website: "https://www.mentalhealth.org.uk",
      services: ["Research", "Resources", "Public awareness"]
    },
    {
      name: "YoungMinds",
      description: "UK's leading charity for children and young people's mental health",
      phone: "0808 802 5544 (Parents Helpline)",
      website: "https://www.youngminds.org.uk",
      services: ["Parents helpline", "Youth resources", "Schools support"]
    },
    {
      name: "Anxiety UK",
      description: "Charity for those affected by anxiety, stress and anxiety-based depression",
      phone: "03444 775 774",
      website: "https://www.anxietyuk.org.uk",
      services: ["Helpline", "Therapy", "Support groups"]
    },
    {
      name: "OCD UK",
      description: "Charity for people affected by Obsessive Compulsive Disorder",
      phone: "0333 212 7890",
      website: "https://www.ocduk.org",
      services: ["Helpline", "Support groups", "Information"]
    },
    {
      name: "Beat",
      description: "UK's eating disorder charity",
      phone: "0808 801 0677",
      website: "https://www.beateatingdisorders.org.uk",
      services: ["Helplines", "Online support", "Recovery information"]
    },
    {
      name: "NHS Mental Health Services",
      description: "Access NHS mental health support",
      phone: "111 (NHS 111)",
      website: "https://www.nhs.uk/mental-health/",
      services: ["Online resources", "Service finder", "Self-referral"]
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-4">National Mental Health Resources</h1>
        <p className="text-xl text-muted mb-12">UK-wide Support Services</p>

        <div className="space-y-6">
          {nationalResources.map((resource, index) => (
            <div key={index} className="bg-darker p-6 rounded-lg border border-primary/20">
              <h2 className="text-2xl font-bold text-primary mb-3">{resource.name}</h2>
              <p className="text-white mb-4">{resource.description}</p>
              
              {resource.phone && (
                <p className="text-muted mb-2">
                  <strong className="text-white">Phone:</strong>{' '}
                  <a href={`tel:${resource.phone.replace(/\s/g, '')}`} className="text-secondary hover:text-primary">
                    {resource.phone}
                  </a>
                </p>
              )}
              
              {resource.website && (
                <p className="text-muted mb-2">
                  <strong className="text-white">Website:</strong>{' '}
                  <a href={resource.website} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary">
                    {resource.website}
                  </a>
                </p>
              )}
              
              {resource.services && (
                <div className="mt-4">
                  <strong className="text-white block mb-2">Services:</strong>
                  <div className="flex flex-wrap gap-2">
                    {resource.services.map((service, idx) => (
                      <span key={idx} className="bg-primary/20 text-primary px-3 py-1 rounded text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary/10 border border-primary p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Online Resources</h2>
          <ul className="text-muted space-y-3">
            <li>
              <strong className="text-white">Every Mind Matters:</strong>{' '}
              <a href="https://www.nhs.uk/every-mind-matters/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary">
                NHS self-help resources
              </a>
            </li>
            <li>
              <strong className="text-white">Big White Wall:</strong>{' '}
              <a href="https://www.bigwhitewall.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary">
                Online mental health community
              </a>
            </li>
            <li>
              <strong className="text-white">Elefriends:</strong>{' '}
              <a href="https://www.elefriends.org.uk" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary">
                Mind&apos;s supportive online community
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
