'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gradient-to-r from-blue-900/95 via-indigo-900/95 to-blue-900/95 backdrop-blur-md shadow-lg'
        : 'bg-gradient-to-r from-blue-900/50 via-indigo-900/50 to-blue-900/50 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10">
                <Image
                  src="/image.png"
                  alt="Digital Aksumite"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 hover:from-blue-300 hover:via-indigo-200 hover:to-purple-300 transition-all duration-300">
                Digital Aksumite
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/careers', label: 'Careers' },
              { 
                href: '/contact', 
                label: 'Contact',
                isButton: true 
              }
            ].map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`px-4 py-2 rounded-full transition-all duration-300 group ${
                  link.isButton 
                    ? 'bg-blue-600 hover:bg-blue-500 ml-4 shadow-lg hover:shadow-blue-500/50'
                    : 'hover:bg-white/10'
                }`}
              >
                <span className="relative inline-block">
                  {link.label}
                  {!link.isButton && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  )}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-all duration-300"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span 
                  className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-45 translate-y-0' : 'translate-y-2'
                  }`}
                />
                <span 
                  className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0' : 'translate-y-3'
                  }`}
                />
                <span 
                  className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-4'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed top-20 right-0 w-72 h-[calc(100vh-5rem)] transform transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-full opacity-0'
        }`}
      >
        <div className="h-full bg-gradient-to-b from-blue-900/95 via-indigo-900/95 to-blue-900/95 backdrop-blur-md shadow-lg px-4 py-6">
          <div className="space-y-2">
            {[
              { href: '/', label: 'Home', icon: '🏠' },
              { href: '/about', label: 'About', icon: 'ℹ️' },
              { href: '/services', label: 'Services', icon: '⚡' },
              { href: '/careers', label: 'Careers', icon: '💼' },
              { href: '/contact', label: 'Contact', icon: '📞' }
            ].map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="block w-full px-4 py-3 text-left rounded-lg hover:bg-white/10 transition-all duration-300 group"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animation: isMenuOpen ? `slideIn 0.4s ease-out forwards ${index * 0.1}s` : 'none',
                  opacity: isMenuOpen ? 1 : 0
                }}
              >
                <span className="flex items-center space-x-3">
                  <span className="text-xl">{link.icon}</span>
                  <span className="relative">
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Contact Info */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="space-y-4">
              <a href="mailto:Digital.aksumite@gmail.com" className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                <span className="flex items-center space-x-3">
                  <span className="text-xl">📧</span>
                  <span>Digital.aksumite@gmail.com</span>
                </span>
              </a>
              <a href="tel:+251912345678" className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                <span className="flex items-center space-x-3">
                  <span className="text-xl">📱</span>
                  <span>+251 912 345 678</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
