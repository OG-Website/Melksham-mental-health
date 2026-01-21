import { FaDownload, FaClock, FaCheckCircle } from 'react-icons/fa';

export const metadata = {
  title: "Post Creator - Coming Soon | Melksham Mental Health",
  description: "The Melksham Mental Health Post Creator desktop application is currently in development.",
};

export default function DownloadPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FaClock className="text-8xl text-secondary mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Coming Soon
          </h1>
          <p className="text-xl text-muted mb-8">
            The Post Creator desktop application is currently in development
          </p>
        </div>

        {/* What to Expect */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">What to Expect</h2>
          <div className="bg-darker p-8 rounded-lg border border-primary/20">
            <p className="text-white text-lg mb-6">
              We&apos;re building a powerful desktop application to help you create mental health awareness content. 
              Here&apos;s what will be included:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheckCircle className="text-accent mr-3 mt-1 flex-shrink-0 text-xl" />
                <span className="text-muted">100+ inspirational quotes and affirmations</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-accent mr-3 mt-1 flex-shrink-0 text-xl" />
                <span className="text-muted">Uplifting recovery stories</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-accent mr-3 mt-1 flex-shrink-0 text-xl" />
                <span className="text-muted">Evidence-based advice and tips</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-accent mr-3 mt-1 flex-shrink-0 text-xl" />
                <span className="text-muted">Local Melksham & Wiltshire resources</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-accent mr-3 mt-1 flex-shrink-0 text-xl" />
                <span className="text-muted">20+ mental health topics covered</span>
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
            The app is currently in development. Check back soon for updates!
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
