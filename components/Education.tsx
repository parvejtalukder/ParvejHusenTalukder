

import React from 'react';
import Section from './Section';
// Fix: Corrected import paths to be relative.
import { EDUCATION } from '../constants';
import type { Education } from '../types';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
    return (
        <Section id="education" title="Education">
            <div className="max-w-3xl mx-auto space-y-8">
                {EDUCATION.map((edu: Education, index: number) => (
                    <div key={index} className="flex items-start">
                        <div className="mr-6">
                            <GraduationCap className="w-10 h-10 text-accent"/>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">{edu.degree}</h3>
                            <p className="text-lg font-semibold text-primary">{edu.institution}</p>
                            <p className="text-base-content/70">{edu.period}</p>
                            {edu.grade && <p className="text-base-content/70">Grade: {edu.grade}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Education;