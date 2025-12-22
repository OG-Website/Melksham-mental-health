import Link from 'next/link';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="grunge-header mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div>
            <h3 className="text-secondary font-black text-2xl mb-4 grunge-text">
              MELKSHAM<br />MENTAL HEALTH
            </h3>
          </div>

          {/* Navigation Links */}
          <div>
            <nav className="flex flex-wrap gap-4 justify-center items-center">
              <Link href="/" className="text-white hover:text-secondary transition-colors font-black uppercase text-sm grunge-text">
                Home
              </Link>
              <span className="text-primary">•</span>
              <Link href="/resources" className="text-white hover:text-secondary transition-colors font-black uppercase text-sm grunge-text">
                Resources
              </Link>
              <span className="text-primary">•</span>
              <Link href="/blog" className="text-white hover:text-secondary transition-colors font-black uppercase text-sm grunge-text">
                Blog
              </Link>
              <span className="text-primary">•</span>
              <Link href="/app/support" className="text-white hover:text-secondary transition-colors font-black uppercase text-sm grunge-text">
                Support
              </Link>
              <span className="text-primary">•</span>
              <Link href="/about" className="text-white hover:text-secondary transition-colors font-black uppercase text-sm grunge-text">
                About
              </Link>
            </nav>
          </div>

          {/* Email Subscribe */}
          <div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 px-4 py-2 bg-darker border-2 border-primary/30 rounded text-white placeholder-muted focus:border-primary focus:outline-none font-bold"
              />
              <button className="grunge-button px-6 py-2 rounded text-secondary font-black uppercase text-sm transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-primary/30 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-white mb-4 md:mb-0 font-bold">
            © {currentYear} Melksham Mental Health. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-white hover:text-secondary transition-colors font-bold">
              Privacy Policy
            </Link>
            <span className="text-primary">|</span>
            <Link href="/terms" className="text-white hover:text-secondary transition-colors font-bold">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
