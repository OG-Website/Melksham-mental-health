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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Melksham Mental Health Logo" 
              width={280}
              height={90}
              className="h-16 w-auto drop-shadow-2xl"
              priority
              style={{
                filter: 'drop-shadow(0 0 8px rgba(255, 102, 0, 0.6)) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.9))'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-white hover:text-secondary transition-colors font-black uppercase text-base grunge-text"
              >
                {item.name}
              </Link>
            ))}
            <button
              className="text-white hover:text-secondary transition-colors grunge-text"
              aria-label="Search"
            >
              <FaSearch className="text-xl" />
            </button>
            <Link
              href="/license"
              className="grunge-button px-8 py-3 rounded-lg text-secondary font-black uppercase text-base transition-all"
            >
              Join Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-secondary text-3xl"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-primary/30 mt-2 pt-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="block py-3 text-white hover:text-secondary transition-colors font-black uppercase grunge-text"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/license"
              className="block mt-3 grunge-button px-8 py-3 rounded-lg text-secondary font-black uppercase text-center"
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
