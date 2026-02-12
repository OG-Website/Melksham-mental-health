import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="grunge-header mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="content-shell bg-texture-3">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
            <Link href="/" className="flex items-center justify-center xl:justify-start">
              <Image src="/logo.png" alt="Melksham Mental Health" width={220} height={72} className="h-14 w-auto" />
            </Link>

            <nav className="flex flex-wrap justify-center gap-2">
              <Link href="/" className="metal-button metal-button--small">Home</Link>
              <Link href="/about" className="metal-button metal-button--small">My Story</Link>
              <Link href="/app/support" className="metal-button metal-button--small">Get Support</Link>
              <Link href="/resources" className="metal-button metal-button--small">Resources</Link>
              <Link href="/blog" className="metal-button metal-button--small">Blog</Link>
              <Link href="/contact" className="metal-button metal-button--small">Contact</Link>
            </nav>

            <form className="footer-subscribe-bar">
              <input type="email" placeholder="Enter your email>>" className="brand-input" />
              <button type="button" className="metal-button pulse-attention">Subscribe</button>
            </form>
          </div>

          <div className="mt-5 pt-4 border-t border-primary/30 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-muted">
            <p>© {currentYear} Melksham Mental Health. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-secondary transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
