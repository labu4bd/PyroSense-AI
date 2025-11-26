
import React, { useState, useEffect } from 'react';
import Logo from './Logo.tsx';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Solution', href: '#solution' },
    { name: 'Clients', href: '#clients' },
    { name: 'Impact', href: '#impact' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-navy/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between p-4 px-6 md:px-10 lg:px-20">
        <a href="#" className="flex items-center gap-3 group">
          <Logo className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-2xl font-bold text-brand-teal font-mono">
            PyroSense AI
          </span>
        </a>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-lightest-slate hover:text-brand-teal transition-colors duration-300 font-mono"
            >
              <span className="text-brand-teal mr-1">0{index + 1}.</span>
              {link.name}
            </a>
          ))}
        </div>
        <button className="md:hidden text-brand-teal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
