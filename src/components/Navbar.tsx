'use client';

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-4 z-50 flex justify-center px-6 mb-4">
      <nav 
        className={`flex items-center justify-between w-full max-w-[1200px] h-16 px-6 rounded-[32px] transition-all duration-300 ${
          scrolled 
            ? 'bg-snow shadow-subtle-2 border border-ash/10' 
            : 'bg-snow/80 backdrop-blur-md border border-ash/5'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-midnight-ink rounded-small flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-display text-xl font-normal tracking-tight text-carbon">Dialog</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Produto', 'Soluções', 'Preços', 'Sobre'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="font-body text-[14px] text-stone hover:text-carbon transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block font-body text-[14px] text-stone hover:text-carbon transition-colors duration-200">
            Login
          </button>
          <button className="bg-tangerine-tag text-carbon font-body text-[14px] font-medium px-6 py-3 rounded-buttons shadow-subtle-2 hover:opacity-90 transition-all duration-200 active:scale-95">
            Book a demo
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
