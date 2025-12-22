import Link from 'next/link';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="grunge-header mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div>
            <h3 className="text-primary font-bold text-xl mb-4 grunge-text uppercase">
              Melksham<br />Mental Health
            </h3>
            <p className="text-primary font-bold text-sm grunge-text">
              ⚡ REAL STRUGGLES. REAL SUPPORT ⚡
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-muted hover:text-primary text-sm font-bold uppercase transition-colors">
                Home
              </Link>
              <Link href="/resources" className="text-muted hover:text-primary text-sm font-bold uppercase transition-colors">
                Resources
              </Link>
              <Link href="/blog" className="text-muted hover:text-primary text-sm font-bold uppercase transition-colors">
                Blog
              </Link>
              <Link href="/app/support" className="text-muted hover:text-primary text-sm font-bold uppercase transition-colors">
                Support
              </Link>
              <Link href="/about" className="text-muted hover:text-primary text-sm font-bold uppercase transition-colors">
                About
              </Link>
            </nav>
          </div>

          {/* Social and Email */}
          <div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full px-4 py-2 bg-dark border border-primary/30 rounded text-white placeholder-muted focus:border-primary focus:outline-none"
              />
              <button className="grunge-button w-full mt-2 px-6 py-2 rounded text-primary font-bold uppercase text-sm transition-all">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com/melkshammentalhealth" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <FaYoutube className="text-2xl" />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-muted mb-4 md:mb-0">
            © {currentYear} Melksham Mental Health. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-muted hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="text-muted">|</span>
            <Link href="/terms" className="text-muted hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
