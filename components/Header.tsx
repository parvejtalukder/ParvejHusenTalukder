import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Literary', href: '#literary' },
  { name: 'Activities', href: '#activities' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Prevent scrolling when the mobile menu is open
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-4 sm:px-6 md:px-8 py-4 flex justify-between items-center">
          <a href="#hero" className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
            PHT
          </a>
          
          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu" className="p-2 -mr-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
              </button>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-slate-900 z-50 flex flex-col items-center justify-center transition-opacity duration-300 animate-fadeIn">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="absolute top-5 right-5 p-2">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col items-center gap-y-8">
            {NAV_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-300 hover:text-cyan-400 text-2xl font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

// FIX: Added a default export for the Header component.
export default Header;