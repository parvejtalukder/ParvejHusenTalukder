import React from 'react';
import Section from './Section';
// Fix: Corrected import paths to be relative.
import { EXPERIENCES } from '../constants';
import type { Experience } from '../types';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Professional Experience">
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical timeline bar: left on mobile, centered on desktop */}
        <div className="absolute left-3 w-0.5 h-full bg-primary/20 transform md:left-1/2 md:-translate-x-1/2"></div>
        
        {EXPERIENCES.map((exp: Experience, index: number) => (
          <div key={index} className="relative mb-8 pl-10 md:pl-0">
            {/* Timeline Icon: positioned on the bar */}
            <div className="absolute left-3 top-1 w-6 h-6 bg-primary rounded-full transform -translate-x-1/2 border-4 border-base-100 flex items-center justify-center md:left-1/2 md:top-1/2 md:-translate-y-1/2">
              <Briefcase className="w-3 h-3 text-primary-content" />
            </div>

            {/* Card Container: applies desktop flexbox for alternating layout */}
            <div className={`md:flex md:items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
              
              {/* Card Wrapper: sets width for desktop */}
              <div className="md:w-5/12">
                <div 
                  className={`
                    card bg-base-200 shadow-lg 
                    ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}
                  `}
                >
                  <div className={`card-body ${index % 2 === 0 ? 'md:items-end' : ''}`}>
                    <h3 className="card-title text-accent">{exp.role}</h3>
                    <p className="font-semibold">{exp.company}</p>
                    <p className="text-sm text-base-content/70">{exp.period}</p>
                    <ul className={`list-disc list-inside mt-2 text-sm text-left ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.description.map((desc, i) => <li key={i}>{desc}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;