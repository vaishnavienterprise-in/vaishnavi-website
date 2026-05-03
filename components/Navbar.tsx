'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, PhoneCall } from 'lucide-react';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-white shadow-sm border-gray-100 py-3' : 'bg-white/95 backdrop-blur-sm border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* LOGO */}
        <a href="#home" className="flex items-center group gap-2">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 transition-transform group-hover:scale-105 mix-blend-multiply shrink-0">
             <Image src="/VE_Finalogo.png" alt="Vaishnavi Enterprise Logo" fill className="object-contain" priority quality={100} />
          </div>
          <div className="relative w-36 h-12 sm:w-48 sm:h-16 transition-transform group-hover:scale-105 mix-blend-multiply">
             <Image src="/VE_Name.png" alt="Vaishnavi Enterprise" fill className="object-contain object-left" priority quality={100} />
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-[#092E20] transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href="#calculator"
            className="flex items-center gap-2 bg-[#092E20] text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-[#062016] transition-all shadow-[0_4px_14px_0_rgba(9,46,32,0.2)] hover:shadow-[0_6px_20px_rgba(9,46,32,0.3)] hover:-translate-y-0.5"
          >
            <PhoneCall className="w-4 h-4" />
            Request Quote
          </a>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden text-gray-800 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 px-4 flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-medium text-gray-800 hover:text-[#092E20] py-2 border-b border-gray-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#calculator"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex justify-center items-center gap-2 bg-[#092E20] text-white px-5 py-3 rounded text-sm font-medium hover:bg-[#062016] mt-2"
            >
              <PhoneCall className="w-4 h-4" />
              Request Quote
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
