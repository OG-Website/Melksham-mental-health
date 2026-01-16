import Link from 'next/link';
import { FaHome, FaPhone } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="py-16 min-h-[60vh] flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-8xl font-bold text-primary mb-4">404</div>
        <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-xl text-muted mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>

        <div className="bg-darker p-8 rounded-lg border border-primary/20 mb-8">
          <p className="text-white mb-6">
            The page might have been moved, deleted, or the URL might be incorrect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-primary hover:bg-primary/80 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center justify-center transition-colors"
            >
              <FaHome className="mr-2" />
              Go Home
            </Link>
            <Link
              href="/resources/crisis"
              className="bg-error hover:bg-error/80 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center justify-center transition-colors"
            >
              <FaPhone className="mr-2" />
              Crisis Resources
            </Link>
          </div>
        </div>

        <div className="text-muted">
          <p className="mb-2">Looking for something specific?</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/resources" className="text-secondary hover:text-primary">
              Resources
            </Link>
            <Link href="/app" className="text-secondary hover:text-primary">
              Download App
            </Link>
            <Link href="/blog" className="text-secondary hover:text-primary">
              Blog
            </Link>
            <Link href="/contact" className="text-secondary hover:text-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
