'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="grunge-header mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Logo and Tagline */}
          <div>
            <h3 className="font-semibold text-2xl mb-2 grunge-text">
              Melksham Mental Health
            </h3>
            <p className="text-sm" style={{ color: '#5d7861', lineHeight: '1.6' }}>
              Real struggles. Real support.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <nav className="flex flex-wrap gap-x-4 gap-y-2 justify-center items-center">
              <Link href="/" className="transition-colors font-medium text-sm" style={{ color: '#5d7861' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#b86f56'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#5d7861'}>
                Home
              </Link>
              <span style={{ color: '#d4866a' }}>•</span>
              <Link href="/resources" className="transition-colors font-medium text-sm" style={{ color: '#5d7861' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#b86f56'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#5d7861'}>
                Resources
              </Link>
              <span style={{ color: '#d4866a' }}>•</span>
              <Link href="/blog" className="transition-colors font-medium text-sm" style={{ color: '#5d7861' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#b86f56'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#5d7861'}>
                Blog
              </Link>
              <span style={{ color: '#d4866a' }}>•</span>
              <Link href="/app/support" className="transition-colors font-medium text-sm" style={{ color: '#5d7861' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#b86f56'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#5d7861'}>
                Support
              </Link>
              <span style={{ color: '#d4866a' }}>•</span>
              <Link href="/about" className="transition-colors font-medium text-sm" style={{ color: '#5d7861' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#b86f56'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#5d7861'}>
                About
              </Link>
            </nav>
          </div>

          {/* Email Subscribe */}
          <div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2.5 rounded-lg font-medium text-sm focus:outline-none transition-all"
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(143, 165, 143, 0.25)',
                  color: '#3d3834'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#8fa58f'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(143, 165, 143, 0.25)'}
              />
              <button className="grunge-button px-5 py-2.5 text-white font-medium text-sm transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm" style={{
          borderTop: '1px solid rgba(143, 165, 143, 0.15)'
        }}>
          <p className="mb-4 md:mb-0 font-medium" style={{ color: '#5d7861' }}>
            © {currentYear} Melksham Mental Health. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="transition-colors font-medium" style={{ color: '#5d7861' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#b86f56'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#5d7861'}>
              Privacy Policy
            </Link>
            <span style={{ color: '#d4866a' }}>|</span>
            <Link href="/terms" className="transition-colors font-medium" style={{ color: '#5d7861' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#b86f56'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#5d7861'}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
