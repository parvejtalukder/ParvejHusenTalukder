import React, { useState, useEffect, useRef } from 'react';
import Section from './Section';
import { LANGUAGE_COLORS } from '../constants';
import type { GitHubStats as GitHubStatsType } from '../types';
import { Star, GitFork, Code } from 'lucide-react';

// Static data to replace the live API call
const staticStats: GitHubStatsType = {
  totalStars: 42,
  totalForks: 18,
  totalRepos: 25,
  languages: {
    'C': 8,
    'C++': 6,
    'JavaScript': 5,
    'HTML': 4,
    'Java': 2,
  },
};

const GitHubStats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

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

    const currentRef = componentRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const sortedLanguages = Object.entries(staticStats.languages)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 7);

  return (
    <Section id="github-stats" title="GitHub Statistics" className="bg-base-200">
      <div ref={componentRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col gap-4 justify-center">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body flex-row items-center gap-4">
                    <Star className="w-10 h-10 text-accent" />
                    <div>
                        <div className="text-3xl font-bold">{staticStats.totalStars}</div>
                        <div className="text-base-content/70">Total Stars</div>
                    </div>
                </div>
            </div>
             <div className="card bg-base-100 shadow-xl">
                <div className="card-body flex-row items-center gap-4">
                    <GitFork className="w-10 h-10 text-accent" />
                    <div>
                        <div className="text-3xl font-bold">{staticStats.totalForks}</div>
                        <div className="text-base-content/70">Total Forks</div>
                    </div>
                </div>
            </div>
             <div className="card bg-base-100 shadow-xl">
                <div className="card-body flex-row items-center gap-4">
                    <Code className="w-10 h-10 text-accent" />
                    <div>
                        <div className="text-3xl font-bold">{staticStats.totalRepos}</div>
                        <div className="text-base-content/70">Total Repositories</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="card bg-base-100 shadow-xl p-6">
          <h3 className="text-xl font-semibold text-center mb-4">Top Languages</h3>
          <div className="space-y-3">
            {sortedLanguages.map(([lang, count], index) => {
              const percentage = ((count / staticStats.totalRepos) * 100).toFixed(1);
              const color = LANGUAGE_COLORS[lang] || LANGUAGE_COLORS['default'];
              return (
                <div key={lang}>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium">{lang}</span>
                    <span className="text-sm font-medium">{percentage}%</span>
                  </div>
                  <div className="w-full bg-base-300 rounded-full h-3">
                    <div
                      className="h-3 rounded-full transition-[width] duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${percentage}%` : '0%',
                        backgroundColor: color,
                        transitionDelay: `${index * 100}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default GitHubStats;
