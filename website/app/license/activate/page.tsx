'use client';

import { useState } from 'react';
import { FaKey, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function ActivatePage() {
  const [licenseKey, setLicenseKey] = useState('');
  const [email, setEmail] = useState('');
  const [validationStatus, setValidationStatus] = useState<'idle' | 'checking' | 'valid' | 'invalid'>('idle');
  const [resendStatus, setResendStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleValidate = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationStatus('checking');
    
    // Simulate API call
    setTimeout(() => {
      // Simple validation: check if it matches MMH-XXXX-XXXX-XXXX format
      const isValid = /^MMH-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/i.test(licenseKey);
      setValidationStatus(isValid ? 'valid' : 'invalid');
    }, 1000);
  };

  const handleResend = async (e: React.FormEvent) => {
    e.preventDefault();
    setResendStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      setResendStatus('sent');
    }, 1000);
  };

  return (
    <div className="py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FaKey className="text-6xl text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">
            Activate Your License
          </h1>
          <p className="text-xl text-muted">
            Enter your license key to verify and activate
          </p>
        </div>

        {/* Validation Form */}
        <div className="bg-darker p-8 rounded-lg border border-primary/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Check License Status</h2>
          
          <form onSubmit={handleValidate} className="space-y-6">
            <div>
              <label htmlFor="licenseKey" className="block text-white font-bold mb-2">
                License Key *
              </label>
              <input
                type="text"
                id="licenseKey"
                value={licenseKey}
                onChange={(e) => setLicenseKey(e.target.value.toUpperCase())}
                placeholder="MMH-XXXX-XXXX-XXXX"
                required
                className="w-full px-4 py-3 bg-dark border border-primary/20 rounded text-white text-center text-xl font-mono focus:border-primary focus:outline-none"
                maxLength={19}
              />
              <p className="text-muted text-sm mt-2">
                Format: MMH-XXXX-XXXX-XXXX
              </p>
            </div>

            {validationStatus === 'valid' && (
              <div className="bg-accent/20 border border-accent p-6 rounded-lg flex items-start">
                <FaCheckCircle className="text-3xl text-accent mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">✓ Valid License Key!</h3>
                  <p className="text-white mb-4">
                    Your license key is valid and active. You can now use it in the Post Creator app.
                  </p>
                  <div className="bg-dark p-4 rounded">
                    <h4 className="text-white font-bold mb-2">Activation Steps:</h4>
                    <ol className="text-muted space-y-2">
                      <li>1. Open the Post Creator app</li>
                      <li>2. Go to <strong className="text-white">Settings → Manage License</strong></li>
                      <li>3. Enter your license key: <span className="text-primary font-mono">{licenseKey}</span></li>
                      <li>4. Click <strong className="text-white">Activate</strong></li>
                    </ol>
                  </div>
                </div>
              </div>
            )}

            {validationStatus === 'invalid' && (
              <div className="bg-error/20 border border-error p-6 rounded-lg flex items-start">
                <FaTimesCircle className="text-3xl text-error mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Invalid License Key</h3>
                  <p className="text-white mb-2">
                    This license key is not valid. Please check:
                  </p>
                  <ul className="text-muted space-y-1">
                    <li>• Is the format correct? (MMH-XXXX-XXXX-XXXX)</li>
                    <li>• Did you type it exactly as provided?</li>
                    <li>• Have you purchased a license yet?</li>
                  </ul>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={validationStatus === 'checking'}
              className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
            >
              {validationStatus === 'checking' ? 'Checking...' : 'Validate License Key'}
            </button>
          </form>
        </div>

        {/* Lost License Key */}
        <div className="bg-darker p-8 rounded-lg border border-primary/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Lost Your License Key?</h2>
          <p className="text-muted mb-6">
            Enter the email address you used to purchase your license, and we&apos;ll resend it to you.
          </p>
          
          <form onSubmit={handleResend} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-white font-bold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="w-full px-4 py-3 bg-dark border border-primary/20 rounded text-white focus:border-primary focus:outline-none"
              />
            </div>

            {resendStatus === 'sent' && (
              <div className="bg-accent/20 border border-accent p-4 rounded-lg text-white">
                ✓ If a license exists for this email, we&apos;ve sent it to you. Please check your inbox and spam folder.
              </div>
            )}

            <button
              type="submit"
              disabled={resendStatus === 'sending'}
              className="w-full bg-secondary hover:bg-secondary/80 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
            >
              {resendStatus === 'sending' ? 'Sending...' : 'Resend License Key'}
            </button>
          </form>
        </div>

        {/* Help Section */}
        <div className="bg-primary/10 border border-primary p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold text-white mb-3">Need Help?</h3>
          <p className="text-muted mb-4">
            If you&apos;re having trouble activating your license, we&apos;re here to help.
          </p>
          <a
            href="/contact?subject=license"
            className="bg-primary hover:bg-primary/80 text-white font-bold py-3 px-6 rounded-lg inline-block transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
