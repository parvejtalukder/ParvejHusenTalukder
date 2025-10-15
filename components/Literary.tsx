import React, { useState, useEffect, useRef } from 'react';
import { LITERARY_HIGHLIGHTS } from '../constants';
import SectionTitle from './SectionTitle';

const Literary: React.FC = () => {
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
    <section
      id="literary"
      ref={sectionRef}
      className={`py-16 sm:py-20 transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <SectionTitle>Poetic & Literary Profile</SectionTitle>
      <div className="space-y-6 text-center sm:text-left">
        {LITERARY_HIGHLIGHTS.map((item, index) => (
          <div key={index} className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
            <h3 className="text-xl font-semibold text-cyan-400">{item.title}</h3>
            <p className="mt-2 text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Literary;