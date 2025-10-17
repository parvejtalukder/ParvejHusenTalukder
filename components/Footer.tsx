import React from 'react';
// Fix: Corrected import paths to be relative.
import { SOCIAL_LINKS } from '../constants';
import type { SocialLink } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-300 text-base-content">
      <nav>
        <div className="flex justify-center space-x-4">
          {SOCIAL_LINKS.map((link: SocialLink) => (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle transition-all duration-300 hover:scale-110 hover:text-primary">
                <link.icon className="w-7 h-7" />
            </a>
          ))}
        </div>
      </nav>
      <aside>
        <p>Copyright © ${new Date().getFullYear()} - All right reserved by Parvej Husen Talukder</p>
      </aside>
    </footer>
  );
};

export default Footer;