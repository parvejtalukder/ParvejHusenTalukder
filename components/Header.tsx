import React, { useState, useEffect } from 'react';
// Fix: Corrected import paths to be relative.
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onNavigate: (href: string) => void;
}

const menuVariants = {
  hidden: { x: '100%' },
  visible: { 
    x: 0,
    transition: { type: 'spring', stiffness: 300, damping: 30 }
  }
};

const navContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const navItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 20 }
  }
};

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigate(href);
    setIsOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-base-200/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Left: Title */}
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="text-2xl font-bold text-primary transition-transform duration-300 hover:scale-105 z-10">
            PHT
          </a>
          
          {/* Center: Navigation */}
          <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-8">
            {NAV_LINKS.map((link: NavLink) => (
              <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-lg hover:text-primary transition-all duration-300 transform hover:-translate-y-0.5">{link.name}</a>
            ))}
          </nav>

          {/* Right: Blog Button */}
          <div className="hidden md:block z-10">
             <a href="#" className="btn btn-primary btn-outline">Blog</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
            <button onClick={() => setIsOpen(true)} className="btn btn-ghost btn-circle">
              <Menu />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Panel */}
      <AnimatePresence>
      {isOpen && (
        <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-base-200 shadow-lg z-50 md:hidden"
            >
              <div className="p-6">
                <div className="flex justify-end mb-8">
                  <button onClick={() => setIsOpen(false)} className="btn btn-ghost btn-circle">
                    <X />
                  </button>
                </div>
                <motion.nav
                  variants={navContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col items-center space-y-6"
                >
                  {NAV_LINKS.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      variants={navItemVariants}
                      className="text-2xl hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                  <motion.a
                    href="#"
                    variants={navItemVariants}
                    className="btn btn-primary btn-outline mt-4"
                  >
                    Blog
                  </motion.a>
                </motion.nav>
              </div>
            </motion.div>
          </>
      )}
      </AnimatePresence>
    </header>
  );
};

export default Header;