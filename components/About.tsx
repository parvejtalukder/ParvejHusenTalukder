import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
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
      id="about"
      ref={sectionRef}
      className={`py-16 sm:py-20 transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <SectionTitle>About Me</SectionTitle>
      <div className="text-gray-400 text-lg space-y-4 max-w-4xl mx-auto sm:mx-0 text-center sm:text-left">
        <p>
          I am a passionate creator from Bangladesh, working at the intersection of poetry, software development, and digital entrepreneurship. My journey began with a love for literature, which earned me early recognition for my rhymes and poems. This creative foundation now fuels my technical pursuits in Computer Science and Engineering.
        </p>
        <p>
          As an entrepreneur, I am driven by the mission to democratize knowledge. I have founded several platforms, including <span className="text-cyan-400 font-medium">Bhikitia</span>, a multilingual encyclopedia, and <span className="text-cyan-400 font-medium">Khujoweb</span>, a Bengali search engine, to empower communities with accessible information. My goal is to continue building innovative solutions that bridge the gap between technology and the humanities.
        </p>
      </div>
    </section>
  );
};

export default About;