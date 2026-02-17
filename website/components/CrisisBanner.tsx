import Link from 'next/link';
import { FaPhone } from 'react-icons/fa';

export default function CrisisBanner() {
  return (
    <div className="bg-error text-white py-2 z-40 border-y-2 border-primary/40" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5), inset 0 -1px 0 rgba(255, 102, 0, 0.2)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-center">
          <div className="flex items-center space-x-2">
            <FaPhone className="animate-pulse text-white" />
            <span className="font-bold uppercase grunge-text">Need help now?</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm font-bold uppercase">
            <a href="tel:116123" className="hover:text-primary transition-colors grunge-text">
              Samaritans: 116 123 (24/7)
            </a>
            <span className="hidden sm:inline text-primary">|</span>
            <a href="tel:999" className="hover:text-primary transition-colors grunge-text">
              Emergency: 999
            </a>
            <span className="hidden sm:inline text-primary">|</span>
            <Link href="/resources/crisis" className="hover:text-primary transition-colors grunge-text">
              More Resources →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
