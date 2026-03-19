'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="font-display text-white text-xl font-bold tracking-wide">
            DEPARTURE DESK
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/services"
              className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/assessment"
              className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
            >
              Assessment
            </Link>
            <Link
              href="/assessment"
              className="bg-gold-400 hover:bg-gold-300 text-navy-900 px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 hover:scale-[1.02]"
            >
              Get Free Assessment
            </Link>
          </nav>

          {/* Mobile: CTA + Hamburger */}
          <div className="flex md:hidden items-center gap-4">
            <Link
              href="/assessment"
              className="bg-gold-400 hover:bg-gold-300 text-navy-900 px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200"
            >
              Free Assessment
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-6 border-t border-white/10">
            <nav className="flex flex-col gap-4 pt-4">
              <Link
                href="/services"
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                href="/assessment"
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
              >
                Assessment
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
