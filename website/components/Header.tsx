'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes, FaSkull } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'My Story', path: '/about' },
    { name: 'Get Support', path: '/app/support' },
    { name: 'Resources', path: '/resources' },
    { name: 'Courses', path: '/courses' },
    { name: 'Blog', path: '/blog' },
    { name: 'Crisis Help', path: '/resources/crisis' },
    { name: 'Contact', path: '/contact' },
    { name: 'Member Portal', path: '/portal' },
  ];

  return (
    <header className="grunge-header sticky top-0 z-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-6 py-3">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image src="/logo.png" alt="Melksham Mental Health Logo" width={400} height={130} className="h-20 md:h-24 w-auto drop-shadow-2xl" priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 flex-wrap justify-end">
            {menuItems.map((item) => (
              <Link key={item.path} href={item.path} className="nav-link">
                {item.name}
              </Link>
            ))}
            <Link href="/license" className="nav-link nav-link--cta">
              <FaSkull /> Join Now
            </Link>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden brand-icon-button" aria-label="Toggle menu">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-primary/30 mt-2 pt-4 space-y-2">
            {menuItems.map((item) => (
              <Link key={item.path} href={item.path} className="block nav-link py-3" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
            <Link href="/license" className="block metal-button mt-2" onClick={() => setIsMenuOpen(false)}>
              <FaSkull /> Join Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
