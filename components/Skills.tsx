import React, { useState, useEffect, useRef } from 'react';
import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';
// Fix: Corrected import paths to be relative.
import { LANGUAGE_STATS, TOOLS_AND_SKILLS } from '../constants';
import type { LanguageStat, ToolSkill } from '../types';

const SkillBar = ({ name, value, index, color }: { name: string; value: number; index: number; color?: string }) => (
    <div key={name}>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium">{name}</span>
        <span className="text-sm font-medium">{value}%</span>
      </div>
      <div className="w-full bg-base-300 rounded-full h-3">
        <div
          className={`h-3 rounded-full transition-[width] duration-1000 ease-out ${!color ? 'bg-accent' : ''}`}
          style={{
            width: 'var(--skill-width, 0%)',
            backgroundColor: color,
            transitionDelay: `${index * 100}ms`,
          }}
        ></div>
      </div>
    </div>
  );

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSkillsExpanded, setIsSkillsExpanded] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Set CSS variable on the parent
          skillsRef.current?.style.setProperty('--skill-width-visible', '1');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Animate when 10% of the component is visible
      }
    );

    const currentRef = skillsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const topSkills = TOOLS_AND_SKILLS.slice(0, 6);
  const otherSkills = TOOLS_AND_SKILLS.slice(6);

  const renderSkillBar = (skill: LanguageStat | ToolSkill, index: number) => {
    const isTool = 'proficiency' in skill;
    const value = isTool ? skill.proficiency : skill.usage;
    const color = isTool ? undefined : skill.color;

    return (
        <div key={skill.name}>
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium">{skill.name}</span>
                <span className="text-sm font-medium">{value}%</span>
            </div>
            <div className="w-full bg-base-300 rounded-full h-3">
                <div
                    className={`h-3 rounded-full transition-[width] duration-1000 ease-out ${isTool ? 'bg-accent' : ''}`}
                    style={{
                        width: isVisible ? `${value}%` : '0%',
                        backgroundColor: color,
                        transitionDelay: `${index * 100}ms`,
                    }}
                ></div>
            </div>
        </div>
    );
  };


  return (
    <Section id="skills" title="Languages & Tools">
      <div ref={skillsRef} className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-center mb-6">Most Used Languages</h3>
          <div className="space-y-4">
            {LANGUAGE_STATS.map((lang, index) => renderSkillBar(lang, index))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-center mb-6">Other Tools & Skills</h3>
          <div className="space-y-4">
            {topSkills.map((skill, index) => renderSkillBar(skill, index))}
          </div>

          <AnimatePresence>
            {isSkillsExpanded && (
              <motion.div
                className="space-y-4 overflow-hidden pt-4"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: { opacity: 1, height: 'auto' },
                  hidden: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                {otherSkills.map((skill, index) => (
                    renderSkillBar(skill, topSkills.length + index)
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {otherSkills.length > 0 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setIsSkillsExpanded(!isSkillsExpanded)}
                className="btn btn-outline btn-primary btn-sm"
              >
                {isSkillsExpanded ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
