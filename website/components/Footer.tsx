import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer mt-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
          <Link href="/" className="flex items-center justify-center xl:justify-start">
            <Image src="/logo.png" alt="Melksham Mental Health" width={220} height={72} className="h-14 w-auto" />
          </Link>

          <nav className="flex flex-wrap justify-center gap-1">
            <Link href="/" className="footer-link">Home</Link>
            <Link href="/about" className="footer-link">My Story</Link>
            <Link href="/app/support" className="footer-link">Get Support</Link>
            <Link href="/resources" className="footer-link">Resources</Link>
            <Link href="/blog" className="footer-link">Blog</Link>
            <Link href="/contact" className="footer-link">Contact</Link>
          </nav>

          <form className="footer-subscribe-bar">
            <input type="email" placeholder="Enter your email..." className="brand-input" />
            <button type="button" className="metal-button metal-button--small pulse-attention">Subscribe</button>
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
    </footer>
  );
}
