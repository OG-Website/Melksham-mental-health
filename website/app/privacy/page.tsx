export const metadata = {
  title: "Privacy Policy | Melksham Mental Health",
  description: "Privacy policy for Melksham Mental Health website and services.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-muted mb-8">Last Updated: December 2024</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="bg-darker p-6 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
            <p className="text-white mb-3">
              Melksham Mental Health (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed 
              to protecting your personal data. This privacy policy explains how we collect, use, and protect 
              your information.
            </p>
          </section>

          <section className="bg-darker p-6 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
            <div className="text-white space-y-3">
              <p><strong>Contact Forms:</strong> Name, email address, and message content when you contact us.</p>
              <p><strong>License Purchases:</strong> Email address and payment information (processed securely by Stripe).</p>
              <p><strong>Community Stories:</strong> Name (optional), email address, and story content submitted.</p>
              <p><strong>Website Analytics:</strong> Anonymous usage data including pages visited, time on site, and referring sources.</p>
            </div>
          </section>

          <section className="bg-darker p-6 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
            <ul className="text-white space-y-2">
              <li>• To respond to your inquiries and support requests</li>
              <li>• To process license purchases and deliver license keys</li>
              <li>• To moderate and publish community stories (with your consent)</li>
              <li>• To improve our website and services</li>
              <li>• To send important updates about our services (you can opt-out)</li>
            </ul>
          </section>

          <section className="bg-darker p-6 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-bold text-primary mb-4">4. Data Storage and Security</h2>
            <p className="text-white">
              We use industry-standard security measures to protect your data. Payment information is processed 
              securely by Stripe and we do not store credit card details. All data is encrypted in transit and at rest.
            </p>
          </section>

          <section className="bg-darker p-6 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-bold text-primary mb-4">5. Cookies</h2>
            <p className="text-white">
              We use essential cookies to ensure the website functions properly and analytics cookies to understand 
              how visitors use our site. You can control cookies through your browser settings.
            </p>
          </section>

          <section className="bg-darker p-6 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-bold text-primary mb-4">6. Third-Party Services</h2>
            <div className="text-white space-y-3">
              <p><strong>Stripe:</strong> Payment processing (subject to Stripe&apos;s privacy policy)</p>
              <p><strong>Analytics:</strong> We use analytics tools to improve our website</p>
              <p>These services have their own privacy policies and we encourage you to review them.</p>
            </div>
          </section>

          <section className="bg-darker p-6 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-bold text-primary mb-4">7. Your Rights (GDPR)</h2>
            <p className="text-white mb-3">Under UK GDPR, you have the right to:</p>
            <ul className="text-white space-y-2">
              <li>• Access your personal data</li>
              <li>• Correct inaccurate data</li>
              <li>• Request deletion of your data</li>
              <li>• Object to processing of your data</li>
              <li>• Data portability</li>
            </ul>
            <p className="text-white mt-4">
              To exercise these rights, contact us at{' '}
              <a href="mailto:Melksham-mental-health@outlook.com" className="text-secondary hover:text-primary">
                Melksham-mental-health@outlook.com
              </a>
            </p>
          </section>

          <section className="bg-darker p-6 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-bold text-primary mb-4">8. Data Retention</h2>
            <p className="text-white">
              We retain your data only as long as necessary for the purposes outlined in this policy. 
              Contact form data is deleted after 1 year. License information is retained indefinitely 
              to support your license activation.
            </p>
          </section>

          <section className="bg-darker p-6 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-bold text-primary mb-4">9. Children&apos;s Privacy</h2>
            <p className="text-white">
              Our services are not directed to children under 13. We do not knowingly collect data from children. 
              If you believe a child has provided us with personal data, please contact us.
            </p>
          </section>

          <section className="bg-darker p-6 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-bold text-primary mb-4">10. Changes to This Policy</h2>
            <p className="text-white">
              We may update this privacy policy from time to time. Changes will be posted on this page with 
              an updated revision date.
            </p>
          </section>

          <section className="bg-darker p-6 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-bold text-primary mb-4">11. Contact Us</h2>
            <p className="text-white">
              If you have questions about this privacy policy or how we handle your data, please contact us:
            </p>
            <p className="text-white mt-4">
              Email:{' '}
              <a href="mailto:Melksham-mental-health@outlook.com" className="text-secondary hover:text-primary">
                Melksham-mental-health@outlook.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
