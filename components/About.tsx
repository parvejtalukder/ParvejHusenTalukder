
import React from 'react';
import Section from './Section';
import { Briefcase, Code, Award, GraduationCap } from 'lucide-react';

const aboutPoints = [
  { icon: Briefcase, text: 'Currently working on MkT&C' },
  { icon: Code, text: 'Practicing C, C++, Java, JavaScript' },
  { icon: Award, text: 'Intra-University Programming Contest Champion, SIU ICT Fest 2025' },
  { icon: GraduationCap, text: 'CSE undergraduate passionate about algorithms & problem-solving' },
];

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" className="bg-base-200">
      <div className="max-w-4xl mx-auto text-center text-lg text-base-content/80 mb-12">
        <p>
            I am a dedicated and versatile professional with a passion for technology, literature, and entrepreneurship. My journey spans from competitive programming and full-stack development to poetry and digital strategy, driven by a commitment to open knowledge and continuous learning.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {aboutPoints.map((point, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0">
                <point.icon className="w-8 h-8 text-accent" />
            </div>
            <p className="text-lg">{point.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default About;
