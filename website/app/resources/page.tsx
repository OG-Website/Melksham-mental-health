import Link from 'next/link';
import { FaMapMarkerAlt, FaGlobeEurope, FaExclamationTriangle } from 'react-icons/fa';

export const metadata = {
  title: "Mental Health Resources | Melksham Mental Health",
  description: "Access comprehensive mental health resources including local Melksham services, national UK resources, and 24/7 crisis support.",
};

export default function ResourcesPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mental Health Resources
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Find the support you need. All resources are free and confidential.
          </p>
        </div>

        {/* Crisis Alert */}
        <div className="bg-error border-2 border-white p-6 rounded-lg mb-12 text-center">
          <FaExclamationTriangle className="text-4xl text-white mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-white mb-2">In Crisis?</h2>
          <p className="text-white mb-4">If you&apos;re in immediate danger or having thoughts of suicide:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:999" className="bg-white text-error font-bold py-3 px-6 rounded-lg hover:bg-gray-100">
              Call 999 (Emergency)
            </a>
            <a href="tel:116123" className="bg-white text-error font-bold py-3 px-6 rounded-lg hover:bg-gray-100">
              Call Samaritans: 116 123
            </a>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Local Resources */}
          <Link href="/resources/local" className="group">
            <div className="bg-darker p-8 rounded-lg border border-primary/20 hover:border-primary transition-all h-full">
              <FaMapMarkerAlt className="text-5xl text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-bold text-white mb-4">Local Resources</h2>
              <p className="text-muted mb-4">
                Melksham and Wiltshire-specific mental health services, support groups, and community resources.
              </p>
              <span className="text-secondary group-hover:text-primary transition-colors">
                Explore Local Support →
              </span>
            </div>
          </Link>

          {/* National Resources */}
          <Link href="/resources/national" className="group">
            <div className="bg-darker p-8 rounded-lg border border-primary/20 hover:border-primary transition-all h-full">
              <FaGlobeEurope className="text-5xl text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-bold text-white mb-4">National Resources</h2>
              <p className="text-muted mb-4">
                UK-wide mental health charities, NHS services, helplines, and online support available nationwide.
              </p>
              <span className="text-secondary group-hover:text-primary transition-colors">
                Browse National Support →
              </span>
            </div>
          </Link>

          {/* Crisis Resources */}
          <Link href="/resources/crisis" className="group">
            <div className="bg-error/10 p-8 rounded-lg border border-error/50 hover:border-error transition-all h-full">
              <FaExclamationTriangle className="text-5xl text-error mb-4 group-hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-bold text-white mb-4">Crisis Support</h2>
              <p className="text-muted mb-4">
                Immediate help available 24/7. Emergency contacts, crisis lines, and urgent mental health support.
              </p>
              <span className="text-error group-hover:text-white transition-colors">
                Get Immediate Help →
              </span>
            </div>
          </Link>
        </div>

        {/* Quick Contact Numbers */}
        <div className="bg-darker p-8 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Quick Contact Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-dark p-4 rounded">
              <h3 className="text-primary font-bold mb-2">Samaritans</h3>
              <a href="tel:116123" className="text-white hover:text-secondary">116 123</a>
              <p className="text-muted text-sm">24/7, Free to call</p>
            </div>
            <div className="bg-dark p-4 rounded">
              <h3 className="text-primary font-bold mb-2">NHS 111</h3>
              <a href="tel:111" className="text-white hover:text-secondary">111</a>
              <p className="text-muted text-sm">Urgent mental health support</p>
            </div>
            <div className="bg-dark p-4 rounded">
              <h3 className="text-primary font-bold mb-2">Shout Crisis Text Line</h3>
              <p className="text-white">Text SHOUT to <a href="sms:85258" className="hover:text-secondary">85258</a></p>
              <p className="text-muted text-sm">24/7, Free text support</p>
            </div>
            <div className="bg-dark p-4 rounded">
              <h3 className="text-primary font-bold mb-2">CALM (Men)</h3>
              <a href="tel:08005858585" className="text-white hover:text-secondary">0800 58 58 58</a>
              <p className="text-muted text-sm">5pm-midnight daily</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-muted text-sm max-w-3xl mx-auto">
            <strong className="text-white">Important:</strong> This website provides information about mental health resources 
            but is not a substitute for professional medical advice, diagnosis, or treatment. If you&apos;re experiencing 
            a mental health emergency, please call 999 or go to your nearest A&E.
          </p>
        </div>
      </div>
    </div>
  );
}
