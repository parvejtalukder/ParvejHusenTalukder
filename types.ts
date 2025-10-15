import React from 'react';

export interface SocialLink {
  name: string;
  url: string;
  Icon: React.FC<{ className?: string }>;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Achievement {
  title: string;
  description: string;
  Icon: React.FC<{ className?: string }>;
}

export interface Activity {
  title: string;
  description: string;
  Icon: React.FC<{ className?: string }>;
}

export interface LiteraryHighlight {
    title: string;
    description: string;
}