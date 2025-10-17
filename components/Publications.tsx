import React from 'react';
import Section from './Section';
// Fix: Corrected import paths to be relative.
import { PUBLICATIONS } from '../constants';
import type { Publication } from '../types';
import { Book, Award, UserCheck } from 'lucide-react';

const iconMap = {
    'Book': Book,
    'Award': Award,
    'Role': UserCheck,
};

const Publications: React.FC = () => {
  return (
    <Section id="publications" title="Poet & Author" className="bg-base-200">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PUBLICATIONS.map((pub: Publication, index: number) => {
            const Icon = iconMap[pub.type];
            return (
                <div key={index} className="card bg-base-100 shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2">
                    <div className="card-body">
                        <div className="flex items-center gap-4 mb-2">
                             <Icon className="w-8 h-8 text-accent"/>
                             <h3 className="card-title">{pub.title}</h3>
                        </div>
                        <p className="text-base-content/80">{pub.description}</p>
                    </div>
                </div>
            );
        })}
      </div>
    </Section>
  );
};

export default Publications;