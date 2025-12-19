import Link from 'next/link';
import { FaPhone } from 'react-icons/fa';

export default function CrisisBanner() {
  return (
    <div className="bg-error text-white py-3 sticky top-[73px] z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-center">
          <div className="flex items-center space-x-2">
            <FaPhone className="animate-pulse" />
            <span className="font-bold">Need help now?</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm">
            <a href="tel:116123" className="hover:underline font-semibold">
              Samaritans: 116 123 (24/7)
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="tel:999" className="hover:underline font-semibold">
              Emergency: 999
            </a>
            <span className="hidden sm:inline">|</span>
            <Link href="/resources/crisis" className="hover:underline font-semibold">
              More Resources →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
