'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes, FaSearch, FaSkull } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'My Story', path: '/about' },
    { name: 'Get Support', path: '/app/support' },
    { name: 'Resources', path: '/resources' },
    { name: 'Blog', path: '/blog' },
    { name: 'Crisis Help', path: '/resources/crisis' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="grunge-header sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4 py-4">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image src="/logo.png" alt="Melksham Mental Health Logo" width={280} height={90} className="h-14 md:h-16 w-auto drop-shadow-2xl" priority />
          </Link>

          <nav className="hidden md:flex items-center gap-2 lg:gap-3 flex-wrap justify-end">
            {menuItems.map((item) => (
              <Link key={item.path} href={item.path} className="metal-button metal-button--small">
                {item.name}
              </Link>
            ))}
            <button className="brand-icon-button" aria-label="Search">
              <FaSearch className="text-base" />
            </button>
            <Link href="/license" className="metal-button metal-button--small pulse-attention">
              <FaSkull /> Join Now
            </Link>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden brand-icon-button" aria-label="Toggle menu">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-primary/30 mt-2 pt-4 space-y-3">
            {menuItems.map((item) => (
              <Link key={item.path} href={item.path} className="block metal-button metal-button--small" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
            <Link href="/license" className="block text-center metal-button pulse-attention" onClick={() => setIsMenuOpen(false)}>
              <FaSkull /> Join Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
