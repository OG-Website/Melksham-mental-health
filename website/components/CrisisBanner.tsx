import Link from 'next/link';
import { FaPhone } from 'react-icons/fa';

export default function CrisisBanner() {
  return (
    <div className="text-white py-3.5 sticky z-40" style={{ 
      background: '#c85a3e',
      top: '72px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 2px 8px rgba(200, 90, 62, 0.2)'
    }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-center">
          <div className="flex items-center space-x-2">
            <FaPhone className="animate-pulse" style={{ opacity: 0.95 }} />
            <span className="font-semibold">Need help now?</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm font-medium">
            <a href="tel:116123" className="hover:underline transition-all" style={{ opacity: 0.95 }}>
              Samaritans: 116 123 (24/7)
            </a>
            <span className="hidden sm:inline" style={{ opacity: 0.6 }}>|</span>
            <a href="tel:999" className="hover:underline transition-all" style={{ opacity: 0.95 }}>
              Emergency: 999
            </a>
            <span className="hidden sm:inline" style={{ opacity: 0.6 }}>|</span>
            <Link href="/resources/crisis" className="hover:underline transition-all" style={{ opacity: 0.95 }}>
              More Resources →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
