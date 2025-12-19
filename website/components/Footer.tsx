import Link from 'next/link';
import { FaFacebook, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-darker border-t border-primary/20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-primary font-bold text-lg mb-4">About</h3>
            <p className="text-muted text-sm">
              Mental health support for Melksham, Wiltshire and beyond.
            </p>
            <p className="text-white font-bold mt-4 text-sm">
              ⚡ REAL STRUGGLES. REAL SUPPORT ⚡
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources" className="text-muted hover:text-primary text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/resources/crisis" className="text-muted hover:text-primary text-sm">
                  Crisis Support
                </Link>
              </li>
              <li>
                <Link href="/app" className="text-muted hover:text-primary text-sm">
                  Download App
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted hover:text-primary text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-primary font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-muted hover:text-primary text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/app/support" className="text-muted hover:text-primary text-sm">
                  App Support
                </Link>
              </li>
              <li>
                <Link href="/license" className="text-muted hover:text-primary text-sm">
                  Purchase License
                </Link>
              </li>
              <li>
                <Link href="/community/stories" className="text-muted hover:text-primary text-sm">
                  Share Your Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-primary font-bold text-lg mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:help@melksham-mentalhealth.us"
                className="flex items-center space-x-2 text-muted hover:text-primary text-sm"
              >
                <FaEnvelope />
                <span>help@melksham-mentalhealth.us</span>
              </a>
              <a
                href="https://facebook.com/melkshammentalhealth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted hover:text-primary text-sm"
              >
                <FaFacebook />
                <span>/melkshammentalhealth</span>
              </a>
            </div>
            <div className="mt-4 space-x-2">
              <span className="text-muted text-xs">#melksham-mentalhealth</span>
              <span className="text-muted text-xs">#wobbob</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted text-sm">
            © 2024 Melksham Mental Health. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-muted hover:text-primary text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted hover:text-primary text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
