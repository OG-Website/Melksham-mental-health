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
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-4">Local Mental Health Resources</h1>
        <p className="text-xl text-muted mb-12">Melksham and Wiltshire Services</p>

        <div className="space-y-6">
          {localResources.map((resource, index) => (
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
              
              {resource.location && (
                <p className="text-muted mb-2">
                  <strong className="text-white">Location:</strong> {resource.location}
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

        <div className="mt-12 bg-accent/10 border border-accent p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Your GP</h2>
          <p className="text-muted">
            Your GP is often the best first point of contact for mental health support. They can:
          </p>
          <ul className="text-muted mt-4 space-y-2">
            <li>• Provide initial assessment and advice</li>
            <li>• Prescribe medication if needed</li>
            <li>• Refer you to specialist services</li>
            <li>• Connect you with local support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
