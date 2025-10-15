import React, { useEffect } from 'react';
import { Project } from '../types';
import { GitHubIcon, LinkIcon } from './icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors z-10 p-2 rounded-full bg-slate-800/50 hover:bg-slate-700"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        
        <img src={project.image} alt={project.title} className="w-full h-48 sm:h-64 object-cover rounded-t-lg" />

        <div className="p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-gray-400 text-base sm:text-lg mb-6">{project.longDescription}</p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors"
              >
                <LinkIcon className="w-5 h-5" />
                <span>Live Site</span>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 text-gray-300 font-semibold rounded-lg hover:bg-slate-600 transition-colors"
              >
                <GitHubIcon className="w-5 h-5" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;