import Link from 'next/link';
import { FaDownload, FaStar, FaWindows } from 'react-icons/fa';

export const metadata = {
  title: "Post Creator App | Melksham Mental Health",
  description: "Download the free Melksham Mental Health Post Creator - generate mental health awareness content.",
};

export default function AppPage() {
  const features = [
    "100+ inspirational quotes from mental health professionals",
    "50+ uplifting recovery stories",
    "100+ evidence-based practical advice tips",
    "100+ positive affirmations",
    "Educational content about mental health conditions",
    "Local Melksham & Wiltshire resources",
    "Crisis support information",
    "20+ mental health topics covered",
    "Filter by type, topic, or audience",
    "Export to TXT or JSON",
    "Print support",
    "FREE to use"
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">💚</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Post Creator Desktop App
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
            Generate positive, evidence-based mental health content to raise awareness 
            and support your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/app/download"
              className="bg-primary hover:bg-primary/80 text-white font-bold py-4 px-8 rounded-lg text-lg inline-flex items-center justify-center transition-colors"
            >
              <FaDownload className="mr-2" />
              Download for Windows
            </Link>
            <Link
              href="/app/features"
              className="bg-darker hover:bg-dark text-white font-bold py-4 px-8 rounded-lg text-lg border border-primary/20 hover:border-primary transition-all"
            >
              View Features
            </Link>
          </div>
        </div>

        {/* App Preview */}
        <div className="mb-16">
          <div className="bg-darker p-8 rounded-lg border border-primary/20">
            <div className="aspect-video bg-dark rounded flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">💻</div>
                <p className="text-muted text-lg">App Screenshot Preview</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-darker p-6 rounded-lg border border-primary/20 flex items-start">
                <FaStar className="text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System Requirements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            System Requirements
          </h2>
          <div className="bg-darker p-8 rounded-lg border border-primary/20 max-w-2xl mx-auto">
            <div className="flex items-center mb-4">
              <FaWindows className="text-4xl text-primary mr-4" />
              <h3 className="text-2xl font-bold text-white">Windows</h3>
            </div>
            <ul className="space-y-2 text-muted">
              <li>• Windows 7 or later</li>
              <li>• Python 3.7+ (included in installer)</li>
              <li>• 100MB disk space</li>
              <li>• Internet connection for initial setup</li>
            </ul>
          </div>
        </div>

        {/* License Upsell */}
        <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Remove Branding
          </h2>
          <p className="text-white text-lg mb-6">
            Purchase a license for £20 to remove Melksham Mental Health branding 
            from generated posts and use your own branding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/license"
              className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Purchase License - £20
            </Link>
            <Link
              href="/app/features"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-lg border border-white transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Support Links */}
        <div className="mt-12 text-center">
          <p className="text-muted mb-4">Need help?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/app/support" className="text-secondary hover:text-primary">
              App Support & FAQ
            </Link>
            <span className="hidden sm:inline text-muted">|</span>
            <Link href="/contact" className="text-secondary hover:text-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
