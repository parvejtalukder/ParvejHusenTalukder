import React, { useState, useEffect, useRef } from 'react';
import { ACHIEVEMENTS } from '../constants';
import SectionTitle from './SectionTitle';

const Achievements: React.FC = () => {
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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className={`py-16 sm:py-20 transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <SectionTitle>Key Achievements</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* FIX: Corrected typo from ACHVEMENTS to ACHIEVEMENTS. */}
        {ACHIEVEMENTS.map((achievement) => (
          <div
            key={achievement.title}
            className="bg-slate-800 p-6 rounded-lg shadow-lg text-center border border-slate-700 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex justify-center mb-4">
              <achievement.Icon className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
            <p className="text-gray-400">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;