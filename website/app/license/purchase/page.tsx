'use client';

import { useState } from 'react';
import { FaCreditCard, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

export default function PurchasePage() {
  const [email, setEmail] = useState('');
  const [processing, setProcessing] = useState(false);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    
    // In production, this would redirect to Stripe Checkout
    // For now, simulate the process
    alert('Stripe Checkout integration will be added in production. License key: MMH-' + Math.random().toString(36).substring(2, 6).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase());
    setProcessing(false);
  };

  return (
    <div className="py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">
          Purchase License
        </h1>
        <p className="text-xl text-muted text-center mb-12">
          Remove branding from Post Creator - £20 one-time
        </p>

        {/* Price Summary */}
        <div className="bg-darker p-8 rounded-lg border border-primary/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center pb-4 border-b border-primary/20">
              <div>
                <h3 className="text-lg font-bold text-white">Post Creator License</h3>
                <p className="text-muted text-sm">Lifetime access, one-time payment</p>
              </div>
              <div className="text-2xl font-bold text-primary">£20.00</div>
            </div>
            
            <div className="flex justify-between items-center text-white">
              <span className="font-bold">Total</span>
              <span className="text-3xl font-bold text-primary">£20.00</span>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary p-4 rounded-lg mb-6">
            <h3 className="text-white font-bold mb-2">What You&apos;ll Get:</h3>
            <ul className="space-y-2 text-muted">
              <li className="flex items-start">
                <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                Remove all Melksham Mental Health branding
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                Add your own branding to posts
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                Lifetime license (no subscription)
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                Use on any computer
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-accent mr-2 mt-1 flex-shrink-0" />
                Instant delivery via email
              </li>
            </ul>
          </div>

          {/* Checkout Form */}
          <form onSubmit={handleCheckout} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-white font-bold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-dark border border-primary/20 rounded text-white focus:border-primary focus:outline-none"
              />
              <p className="text-muted text-sm mt-2">
                Your license key will be sent to this email address
              </p>
            </div>

            <button
              type="submit"
              disabled={processing}
              className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-4 px-6 rounded-lg text-lg flex items-center justify-center transition-colors disabled:opacity-50"
            >
              <FaCreditCard className="mr-3" />
              {processing ? 'Processing...' : 'Proceed to Secure Checkout'}
            </button>

            <div className="flex items-center justify-center text-muted text-sm">
              <FaShieldAlt className="mr-2" />
              <span>Secure payment powered by Stripe</span>
            </div>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-darker p-4 rounded-lg border border-primary/20 text-center">
            <FaShieldAlt className="text-3xl text-accent mx-auto mb-2" />
            <h3 className="text-white font-bold mb-1">Secure Payment</h3>
            <p className="text-muted text-sm">SSL encrypted</p>
          </div>
          <div className="bg-darker p-4 rounded-lg border border-primary/20 text-center">
            <FaCheckCircle className="text-3xl text-accent mx-auto mb-2" />
            <h3 className="text-white font-bold mb-1">Instant Delivery</h3>
            <p className="text-muted text-sm">Email within minutes</p>
          </div>
          <div className="bg-darker p-4 rounded-lg border border-primary/20 text-center">
            <div className="text-3xl mb-2">💚</div>
            <h3 className="text-white font-bold mb-1">Support Project</h3>
            <p className="text-muted text-sm">Help us grow</p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <p className="text-muted text-sm">
            By purchasing, you agree to our{' '}
            <a href="/terms" className="text-secondary hover:text-primary">
              Terms of Service
            </a>
            . All sales are final due to the digital nature of license keys.
          </p>
        </div>
      </div>
    </div>
  );
}
