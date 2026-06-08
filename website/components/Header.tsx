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
      <div className="site-header-shell relative z-10">
        <div className="site-header-row">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image src="/logo.png" alt="Melksham Mental Health Logo" width={400} height={130} className="h-20 md:h-24 w-auto drop-shadow-2xl" priority />
          </Link>

          <nav className="site-header-nav" aria-label="Main navigation">
            {menuItems.map((item) => (
              <Link key={item.path} href={item.path} className="nav-link">
                {item.name}
              </Link>
            ))}
            <Link href="/portal/register" className="nav-link nav-link--cta">
              <FaSkull /> Join Now
            </Link>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="brand-icon-button site-header-menu-button" aria-label="Toggle menu">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="site-header-mobile-nav pb-4 border-t border-primary/30 mt-2 pt-4 space-y-2">
            {menuItems.map((item) => (
              <Link key={item.path} href={item.path} className="block nav-link py-3" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
            <Link href="/portal/register" className="block metal-button mt-2" onClick={() => setIsMenuOpen(false)}>
              <FaSkull /> Join Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
