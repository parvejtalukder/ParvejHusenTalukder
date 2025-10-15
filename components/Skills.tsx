import React, { useState, useEffect, useRef } from 'react';
import { SKILL_CATEGORIES } from '../constants';
import SectionTitle from './SectionTitle';

const Skills: React.FC = () => {
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
      id="skills"
      ref={sectionRef}
      className={`py-16 sm:py-20 transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <SectionTitle>Technical & Creative Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-4">{category.title}</h3>
            <ul className="space-y-2 text-left">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;