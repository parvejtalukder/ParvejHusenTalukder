import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import SectionTitle from './SectionTitle';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className={`py-16 sm:py-20 transition-all duration-1000 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer"
              onClick={() => openModal(project)}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </>
  );
};

export default Projects;