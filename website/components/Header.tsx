'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Resources', path: '/resources' },
    { name: 'Blog', path: '/blog' },
    { name: 'Support', path: '/app/support' },
  ];

  return (
    <header className="grunge-header sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Melksham Mental Health Logo" 
              width={280}
              height={90}
              className="h-14 w-auto"
              priority
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(61, 56, 52, 0.15))'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="font-medium transition-colors text-base"
                style={{ color: '#5d7861' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#b86f56'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#5d7861'}
              >
                {item.name}
              </Link>
            ))}
            <button
              className="transition-colors"
              style={{ color: '#5d7861' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#b86f56'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#5d7861'}
              aria-label="Search"
            >
              <FaSearch className="text-lg" />
            </button>
            <Link
              href="/license"
              className="grunge-button px-6 py-2.5 font-medium text-white transition-all"
            >
              Join Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-3xl transition-colors"
            style={{ color: '#b86f56' }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-5 mt-4 pt-5" style={{
            borderTop: '1px solid rgba(143, 165, 143, 0.15)'
          }}>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="block py-3 font-medium transition-colors"
                style={{ color: '#5d7861' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#b86f56'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#5d7861'}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/license"
              className="block mt-4 grunge-button px-6 py-3 font-medium text-white text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
