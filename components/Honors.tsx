import React from 'react';
import Section from './Section';
// Fix: Corrected import paths to be relative.
import { HONORS } from '../constants';
import type { Honor } from '../types';
import { Award } from 'lucide-react';

const Honors: React.FC = () => {
    return (
        <Section id="honors" title="Honors & Awards" className="bg-base-200">
            <div className="max-w-3xl mx-auto space-y-6">
                {HONORS.map((honor: Honor, index: number) => (
                    <div key={index} className="flex items-center p-4 bg-base-100 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-base-200/50">
                        <Award className="w-8 h-8 text-accent mr-4 flex-shrink-0" />
                        <div>
                            <h3 className="text-lg font-semibold">{honor.title}</h3>
                            <p className="text-base-content/70">{honor.issuer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Honors;