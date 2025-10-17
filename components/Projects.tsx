import React, { useState } from 'react';
import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';
// Fix: Corrected import paths to be relative.
import { PROJECTS, REPOS } from '../constants';
import type { Project } from '../types';

const allTechs = [...new Set([...PROJECTS, ...REPOS].flatMap(p => p.tech))].sort();

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="card bg-base-200 shadow-lg hover:-translate-y-2 transition-all duration-300 hover:shadow-primary/20 border-2 border-transparent hover:border-primary/30 h-full">
    <div className="card-body flex flex-col">
      <h3 className="card-title">
        {project.name}
      </h3>
      <p className="flex-grow">{project.description}</p>
      <div className="card-actions justify-between items-center mt-4">
        <div className="flex flex-wrap gap-1">
          {project.tech.map(t => <div key={t} className="badge badge-outline badge-secondary">{t}</div>)}
        </div>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);


const Projects: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState('All');

  const filteredProjects = selectedTech === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.tech.includes(selectedTech));
  
  const filteredRepos = selectedTech === 'All'
    ? REPOS
    : REPOS.filter(r => r.tech.includes(selectedTech));

  return (
    <Section id="projects" title="Projects & Repositories">
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        <button
          onClick={() => setSelectedTech('All')}
          className={`btn btn-sm ${selectedTech === 'All' ? 'btn-primary' : 'btn-outline'}`}
        >
          All
        </button>
        {allTechs.map(tech => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`btn btn-sm ${selectedTech === tech ? 'btn-primary' : 'btn-outline'}`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div>
        <h3 className="text-2xl font-bold text-center mb-8">Featured Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence>
            {filteredProjects.map((project: Project) => (
              <motion.div
                key={project.name}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
       <div>
        <h3 className="text-2xl font-bold text-center mb-8">GitHub Repositories</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
           <AnimatePresence>
            {filteredRepos.map((repo: Project) => (
              <motion.div
                key={repo.name}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={repo} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};

export default Projects;