import { FaStar, FaDownload } from 'react-icons/fa';
import Link from 'next/link';

export const metadata = {
  title: "App Features | Melksham Mental Health",
  description: "Explore all features of the Melksham Mental Health Post Creator app.",
};

export default function FeaturesPage() {
  const features = [
    {
      icon: "💬",
      title: "Inspirational Quotes",
      description: "100+ quotes from UK mental health professionals, charities, and experts."
    },
    {
      icon: "📖",
      title: "Recovery Stories",
      description: "50+ uplifting stories of hope, recovery, and resilience."
    },
    {
      icon: "💡",
      title: "Practical Advice",
      description: "100+ evidence-based tips for managing mental health."
    },
    {
      icon: "💚",
      title: "Positive Affirmations",
      description: "100+ affirmations to support your mental wellbeing."
    },
    {
      icon: "📚",
      title: "Educational Content",
      description: "50+ pieces about mental health conditions and treatments."
    },
    {
      icon: "📍",
      title: "Local Resources",
      description: "Access Melksham and Wiltshire specific support services."
    },
    {
      icon: "🆘",
      title: "Crisis Support",
      description: "Quick access to 24/7 crisis helplines and resources."
    },
    {
      icon: "🎯",
      title: "Filtered Generation",
      description: "Generate by content type, topic, or target audience."
    },
    {
      icon: "⭐",
      title: "Favorites System",
      description: "Save and organize your favorite posts."
    },
    {
      icon: "📤",
      title: "Export Options",
      description: "Export posts as TXT or JSON files."
    },
    {
      icon: "🖨️",
      title: "Print Support",
      description: "Print posts directly from the app."
    },
    {
      icon: "👤",
      title: "Custom Branding",
      description: "Add your own branding with a license (£20)."
    }
  ];

  const topics = [
    "Depression & Low Mood", "Anxiety Disorders", "Stress & Burnout",
    "Loneliness & Isolation", "Grief & Bereavement", "Trauma & PTSD",
    "ADHD & Autism", "Eating Disorders", "Substance Use",
    "Self-harm Awareness", "Suicide Prevention", "Perinatal Mental Health",
    "Men's Mental Health", "Youth Mental Health", "Elderly Mental Health",
    "Workplace Mental Health", "LGBTQ+ Mental Health", "Physical-Mental Health",
    "Relationship Issues", "Financial Stress"
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          App Features
        </h1>
        <p className="text-xl text-muted text-center mb-12">
          Everything you need to spread mental health awareness
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-darker p-6 rounded-lg border border-primary/20 hover:border-primary transition-colors">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Topics Covered */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            20+ Mental Health Topics
          </h2>
          <div className="bg-darker p-8 rounded-lg border border-primary/20">
            <div className="flex flex-wrap gap-3 justify-center">
              {topics.map((topic, index) => (
                <span
                  key={index}
                  className="bg-primary/20 text-primary px-4 py-2 rounded-lg font-semibold"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white text-lg mb-6">
            Download the app for free and start generating positive mental health content today.
          </p>
          <Link
            href="/app/download"
            className="bg-white hover:bg-gray-100 text-primary font-bold py-4 px-8 rounded-lg inline-flex items-center transition-colors"
          >
            <FaDownload className="mr-3" />
            Download Now
          </Link>
        </div>
      </div>
    </div>
  );
}
