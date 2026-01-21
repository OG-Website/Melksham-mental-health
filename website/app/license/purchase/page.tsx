'use client';

import { FaClock } from 'react-icons/fa';

export default function PurchasePage() {
  return (
    <div className="py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FaClock className="text-8xl text-secondary mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Coming Soon
          </h1>
          <p className="text-xl text-muted mb-8">
            License purchase will be available once the Post Creator app is released
          </p>
        </div>

        {/* Info Card */}
        <div className="bg-darker p-8 rounded-lg border border-primary/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Stay Tuned
          </h2>
          <p className="text-muted mb-6">
            We&apos;re still developing the Post Creator app. Licensing options will be announced when the app is ready for release.
          </p>
          <a
            href="/contact"
            className="bg-primary hover:bg-primary/80 text-white font-bold py-3 px-8 rounded-lg inline-block transition-colors"
          >
            Contact Us for Updates
          </a>
        </div>
      </div>
    </div>
  );
}
