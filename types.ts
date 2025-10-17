import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface LanguageStat {
  name: string;
  usage: number;
  color: string;
}

export interface ToolSkill {
  name: string;
  proficiency: number;
}

export interface ProgrammingProfile {
  platform: string;
  handle: string;
  rating: string;
  maxRating?: string;
  solved: number;
  contests?: number;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Publication {
    type: 'Book' | 'Award' | 'Role';
    title: string;
    description: string;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface Honor {
  title: string;
  issuer: string;
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    grade?: string;
}

// Fix: Add GitHubStats interface to define the shape of GitHub statistics data. This resolves type errors in GitHubStats.tsx.
export interface GitHubStats {
  totalStars: number;
  totalForks: number;
  totalRepos: number;
  languages: { [key: string]: number };
}