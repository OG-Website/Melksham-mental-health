import Link from 'next/link';
import { FaQuestionCircle, FaTools } from 'react-icons/fa';

export const metadata = {
  title: "App Support | Melksham Mental Health",
  description: "Get help with the Melksham Mental Health Post Creator app.",
};

export default function SupportPage() {
  const faqs = [
    {
      question: "How do I install the app?",
      answer: "Download the installer from the download page, run the .exe file, and follow the on-screen instructions. The app will be installed in your Start Menu."
    },
    {
      question: "Is the app really free?",
      answer: "Yes! The app is completely free to download and use. All content is freely accessible. The only paid feature is removing branding (£20 one-time)."
    },
    {
      question: "What's included in the £20 license?",
      answer: "The license removes Melksham Mental Health branding from generated posts and allows you to add your own branding. It's a one-time payment with lifetime access."
    },
    {
      question: "How do I activate my license key?",
      answer: "Open the app, go to Settings → Manage License, enter your key (format: MMH-XXXX-XXXX-XXXX), and click Activate."
    },
    {
      question: "I lost my license key. What should I do?",
      answer: "Visit the license activation page and use the 'Lost Your License Key?' form to have it resent to your email."
    },
    {
      question: "Can I use the app on multiple computers?",
      answer: "Yes, you can install and use the app on any computer. Your license key works across all installations."
    },
    {
      question: "How do I export posts?",
      answer: "After generating a post, use the Export button to save as TXT or JSON format. You can also use the Print function to print directly."
    },
    {
      question: "The app won't open. What should I do?",
      answer: "Make sure you have Windows 7 or later. Try running as administrator. If the problem persists, contact us for support."
    },
    {
      question: "Can I suggest new content or features?",
      answer: "Absolutely! We welcome suggestions. Use the contact form or email us at Melksham-mental-health@outlook.com"
    },
    {
      question: "Is my data safe?",
      answer: "Yes. The app stores your preferences and favorites locally on your computer. We don't collect or transmit any personal data from the app."
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FaQuestionCircle className="text-6xl text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">
            App Support & FAQ
          </h1>
          <p className="text-xl text-muted">
            Find answers to common questions
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-darker p-6 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-3">{faq.question}</h3>
                <p className="text-white">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Troubleshooting</h2>
          <div className="bg-darker p-6 rounded-lg border border-primary/20">
            <div className="flex items-start mb-6">
              <FaTools className="text-3xl text-primary mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Common Issues</h3>
                <div className="space-y-4 text-white">
                  <div>
                    <p className="font-bold mb-2">Windows SmartScreen Warning</p>
                    <p className="text-muted">Click "More info" then "Run anyway" - this is normal for new applications.</p>
                  </div>
                  <div>
                    <p className="font-bold mb-2">App Crashes on Startup</p>
                    <p className="text-muted">Try running as administrator or reinstalling the app.</p>
                  </div>
                  <div>
                    <p className="font-bold mb-2">License Key Not Working</p>
                    <p className="text-muted">Check the format (MMH-XXXX-XXXX-XXXX) and ensure you&apos;re typing it correctly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Requirements */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">System Requirements</h2>
          <div className="bg-darker p-6 rounded-lg border border-primary/20">
            <ul className="text-white space-y-2">
              <li>• Windows 7 or later</li>
              <li>• Python 3.7+ (included in installer)</li>
              <li>• 100MB free disk space</li>
              <li>• Internet connection for initial setup</li>
            </ul>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-white text-lg mb-6">
            Can&apos;t find the answer you&apos;re looking for? We&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="/app/download"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-lg border border-white transition-all"
            >
              Download App
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
