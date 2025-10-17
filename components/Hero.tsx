import React from 'react';
// Fix: Corrected import paths to be relative.
import { SOCIAL_LINKS } from '../constants';
import type { SocialLink } from '../types';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-base-200">
      <div className="container mx-auto px-6 lg:px-8 text-center -mt-20">
        <div className="flex flex-col items-center">
            <img 
                src="https://raw.githubusercontent.com/parvejtalukder/ParvejHusenTalukder/refs/heads/main/images/parvej.png" 
                alt="Parvej Husen Talukder"
                className="rounded-full w-40 h-40 md:w-48 md:h-48 mb-8 border-4 border-primary shadow-lg" 
            />
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              <span className="text-accent">👋</span> Hi, I’m Parvej Husen Talukder
            </h1>
            <p className="text-lg md:text-xl text-base-content/80 mb-8 max-w-3xl">
              Competitive Programmer | Web & App Developer | Poet | Digital Entrepreneur
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              {SOCIAL_LINKS.map((link: SocialLink) => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-primary btn-circle transition-transform duration-300 hover:scale-110">
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <a href="#about" className="btn btn-primary btn-wide transition-transform duration-300 hover:scale-105">
              Learn More About Me
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;