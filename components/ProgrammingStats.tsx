import React from 'react';
import Section from './Section';
// Fix: Corrected import paths to be relative.
import { PROGRAMMING_PROFILES } from '../constants';
import type { ProgrammingProfile } from '../types';
import { Trophy, Star } from 'lucide-react';

const ProgrammingStats: React.FC = () => {
  return (
    <Section id="programming" title="Competitive Programming" className="bg-base-200">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {PROGRAMMING_PROFILES.map((profile: ProgrammingProfile) => (
          <div key={profile.platform} className="card bg-base-100 shadow-xl hover:shadow-accent/20 hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-accent/50">
            <div className="card-body">
              <h3 className="card-title text-2xl text-accent">{profile.platform}</h3>
              <p className="text-lg"><strong>Handle:</strong> {profile.handle}</p>
              <p><strong>Rating:</strong> {profile.rating}</p>
              {profile.maxRating && <p><strong>Max Rating:</strong> {profile.maxRating}</p>}
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2 text-lg">
                  <Trophy className="w-5 h-5 text-secondary" />
                  <span>{profile.solved} Solved</span>
                </div>
                {profile.contests && (
                  <div className="flex items-center gap-2 text-lg">
                    <Star className="w-5 h-5 text-secondary" />
                    <span>{profile.contests} Contests</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProgrammingStats;