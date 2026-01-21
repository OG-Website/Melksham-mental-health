import { FaClock, FaCheckCircle } from 'react-icons/fa';

export const metadata = {
  title: "License - Coming Soon | Melksham Mental Health",
  description: "Licensing options for the Post Creator app are currently being developed.",
};

export default function LicensePage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FaClock className="text-8xl text-secondary mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Coming Soon
          </h1>
          <p className="text-xl text-muted mb-8">
            Licensing options for the Post Creator are currently being developed
          </p>
        </div>

        {/* What to Expect */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">What We&apos;re Planning</h2>
          <div className="bg-darker p-8 rounded-lg border border-primary/20">
            <p className="text-white text-lg mb-6">
              We&apos;re working on a licensing system that will allow you to customize the Post Creator app.
              Planned features include:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheckCircle className="text-accent mr-3 mt-1 flex-shrink-0 text-xl" />
                <span className="text-muted">Remove branding from generated content</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-accent mr-3 mt-1 flex-shrink-0 text-xl" />
                <span className="text-muted">Add your own organization branding</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-accent mr-3 mt-1 flex-shrink-0 text-xl" />
                <span className="text-muted">Lifetime access with one-time payment</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-accent mr-3 mt-1 flex-shrink-0 text-xl" />
                <span className="text-muted">Support the development of mental health resources</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stay Updated */}
        <div className="text-center bg-gradient-to-br from-primary to-secondary p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-white mb-6">
            Pricing and licensing details will be announced soon. Check back for updates!
          </p>
          <a
            href="/contact"
            className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-lg inline-block transition-colors"
          >
            Contact Us for More Info
          </a>
        </div>
      </div>
    </div>
  );
}
