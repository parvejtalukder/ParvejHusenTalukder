import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center sm:items-start sm:text-left py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
          Parvej Husen Talukder
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-cyan-400">
          Poet, Programmer, and Entrepreneur
        </h2>
        <p className="mt-6 text-lg text-gray-400">
          Blending literature, technology, and entrepreneurship to make knowledge more accessible worldwide. Currently pursuing Computer Science and Engineering at Sylhet International University.
        </p>
        <div className="mt-8 flex items-center justify-center sm:justify-start space-x-5">
          {SOCIAL_LINKS.map(({ name, url, Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="text-gray-400 hover:text-cyan-400 transition-transform duration-300 hover:scale-110"
            >
              <Icon className="w-7 h-7" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;