import Link from 'next/link';
import { FaCheckCircle, FaCreditCard, FaKey } from 'react-icons/fa';

export const metadata = {
  title: "License Purchase | Melksham Mental Health",
  description: "Purchase a license to remove branding from the Post Creator app - £20 one-time payment.",
};

export default function LicensePage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Post Creator License
        </h1>
        <p className="text-xl text-muted text-center mb-12">
          Remove branding and use your own identity
        </p>

        {/* Pricing Card */}
        <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-lg mb-12 text-center">
          <div className="bg-white/10 rounded-lg p-8 mb-6">
            <div className="text-6xl font-bold text-white mb-2">£20</div>
            <div className="text-white text-xl">One-Time Payment</div>
            <div className="text-white/80 text-sm mt-2">No subscription, lifetime access</div>
          </div>

          <Link
            href="/license/purchase"
            className="bg-white hover:bg-gray-100 text-primary font-bold py-4 px-8 rounded-lg text-lg inline-flex items-center transition-colors"
          >
            <FaCreditCard className="mr-3" />
            Purchase License Now
          </Link>
        </div>

        {/* What You Get */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-darker p-6 rounded-lg border border-primary/20">
              <FaCheckCircle className="text-3xl text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Remove Branding</h3>
              <p className="text-muted">
                Remove all Melksham Mental Health branding from generated posts
              </p>
            </div>
            <div className="bg-darker p-6 rounded-lg border border-primary/20">
              <FaCheckCircle className="text-3xl text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Your Branding</h3>
              <p className="text-muted">
                Add your own name, organization, or branding to posts
              </p>
            </div>
            <div className="bg-darker p-6 rounded-lg border border-primary/20">
              <FaCheckCircle className="text-3xl text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Lifetime License</h3>
              <p className="text-muted">
                One-time payment, no recurring fees or subscriptions
              </p>
            </div>
            <div className="bg-darker p-6 rounded-lg border border-primary/20">
              <FaCheckCircle className="text-3xl text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Support the Project</h3>
              <p className="text-muted">
                Help us maintain and improve the app and resources
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">How It Works</h2>
          <div className="bg-darker p-8 rounded-lg border border-primary/20">
            <ol className="space-y-6">
              <li className="flex items-start">
                <span className="bg-primary text-white font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">1</span>
                <div>
                  <h3 className="text-white font-bold mb-2">Purchase License</h3>
                  <p className="text-muted">Complete secure checkout via Stripe (£20 one-time)</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">2</span>
                <div>
                  <h3 className="text-white font-bold mb-2">Receive License Key</h3>
                  <p className="text-muted">Get your unique license key instantly via email (format: MMH-XXXX-XXXX-XXXX)</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">3</span>
                <div>
                  <h3 className="text-white font-bold mb-2">Activate in App</h3>
                  <p className="text-muted">Enter your license key in Settings → Manage License</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">4</span>
                <div>
                  <h3 className="text-white font-bold mb-2">Start Creating</h3>
                  <p className="text-muted">Generate posts with your own branding or no branding at all</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-darker p-6 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold text-white mb-3">Is this a one-time payment?</h3>
              <p className="text-muted">
                Yes! £20 one-time payment for lifetime access. No subscriptions or recurring fees.
              </p>
            </div>
            <div className="bg-darker p-6 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold text-white mb-3">Can I use it on multiple computers?</h3>
              <p className="text-muted">
                Yes, your license key can be used on any computer where you install the app.
              </p>
            </div>
            <div className="bg-darker p-6 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold text-white mb-3">What if I lose my license key?</h3>
              <p className="text-muted">
                You can retrieve your license key anytime from the{' '}
                <Link href="/license/activate" className="text-secondary hover:text-primary">
                  activation page
                </Link>
                {' '}using your email address.
              </p>
            </div>
            <div className="bg-darker p-6 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold text-white mb-3">Is there a refund policy?</h3>
              <p className="text-muted">
                Due to the digital nature of license keys, all sales are final. However, if you experience 
                technical issues, please{' '}
                <Link href="/contact" className="text-secondary hover:text-primary">
                  contact us
                </Link>
                {' '}and we&apos;ll help resolve them.
              </p>
            </div>
          </div>
        </div>

        {/* Already Have a Key */}
        <div className="text-center bg-darker p-8 rounded-lg border border-primary/20">
          <FaKey className="text-5xl text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">
            Already Have a License Key?
          </h2>
          <Link
            href="/license/activate"
            className="bg-primary hover:bg-primary/80 text-white font-bold py-3 px-8 rounded-lg inline-block transition-colors"
          >
            Activate Your License
          </Link>
        </div>
      </div>
    </div>
  );
}
