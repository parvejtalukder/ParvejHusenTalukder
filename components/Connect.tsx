import React, { useState, useEffect, useRef } from 'react';
import { SOCIAL_LINKS } from '../constants';

const Connect: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className={`py-16 sm:py-20 text-center transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-3xl font-bold text-white mb-4">Connect With Me</h2>
      <p className="text-gray-400 mb-8 max-w-xl mx-auto">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
      </p>
      <div className="flex justify-center items-center flex-wrap gap-6 mb-8">
        {SOCIAL_LINKS.map(({ name, url, Icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="text-gray-400 hover:text-cyan-400 transition-transform duration-300 hover:scale-110"
          >
            <Icon className="w-8 h-8" />
          </a>
        ))}
      </div>
      <div className="text-sm text-slate-500 mt-12">
        <p>&copy; {new Date().getFullYear()} Parvej Husen Talukder. All rights reserved.</p>
        <p>Designed & Built with React and Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Connect;