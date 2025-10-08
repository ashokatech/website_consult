import React, { useState, useEffect } from 'react';

const Logo: React.FC = () => (
  <div className="flex items-center space-x-3">
    <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 4L58.7846 20V52L32 68L5.21539 52V20L32 4Z" stroke="#D1D5DB" strokeWidth="1"/>
      <g>
        <path d="M32 4V20M32 68V52M5.21539 20L18.6077 28M58.7846 52L45.3923 44M5.21539 52L18.6077 44M58.7846 20L45.3923 28M18.6077 28L32 20L45.3923 28L45.3923 44L32 52L18.6077 44L18.6077 28Z" stroke="#9CA3AF" strokeWidth="1.5"/>
        <circle cx="32" cy="4" r="2" fill="#f97316"/>
        <circle cx="58.78" cy="20" r="2" fill="#84cc16"/>
        <circle cx="58.78" cy="52" r="2" fill="#3b82f6"/>
        <circle cx="32" cy="68" r="2" fill="#a855f7"/>
        <circle cx="5.22" cy="52" r="2" fill="#ef4444"/>
        <circle cx="5.22" cy="20" r="2" fill="#eab308"/>
        <circle cx="18.61" cy="28" r="2" fill="#eab308"/>
        <circle cx="45.39" cy="28" r="2" fill="#84cc16"/>
        <circle cx="45.39" cy="44" r="2" fill="#3b82f6"/>
        <circle cx="18.61" cy="44" r="2" fill="#ef4444"/>
        <circle cx="32" cy="20" r="2.5" fill="#f97316"/>
        <circle cx="32" cy="52" r="2.5" fill="#a855f7"/>
      </g>
    </svg>
    <div className="flex flex-col">
      <span className="text-xl font-extrabold text-gray-800 tracking-tight">SM CONSULTING SERVICES</span>
      <span className="text-xs font-semibold text-blue-600">Builds Stories of Choice</span>
    </div>
  </div>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#home', label: 'Home' },
    { href: '/#about', label: 'About Us' },
    { href: '/#services', label: 'Services' },
    { href: '/#values', label: 'Core Values' },
    { href: '/#blog', label: 'Blog' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="/#home" aria-label="SM Consulting Services Home Page">
            <Logo />
          </a>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <a href="/#contact" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg">
              Contact
            </a>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none" aria-expanded={isMenuOpen} aria-controls="mobile-menu">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div id="mobile-menu" className="lg:hidden mt-4 bg-white rounded-lg shadow-xl p-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href="/#contact" className="bg-blue-600 text-white text-center font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;