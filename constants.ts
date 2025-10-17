import { Github, Linkedin, Twitter, Youtube, Facebook } from 'lucide-react';
// Fix: Corrected import paths to be relative.
import type { NavLink, SocialLink, LanguageStat, ProgrammingProfile, Experience, Publication, Project, Honor, Education, ToolSkill } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com/parvejhusentalukder', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/parvejhusentalukder', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/parvej_poet', icon: Twitter },
  { name: 'Facebook', href: 'https://www.facebook.com/parvej.husen.talukder', icon: Facebook },
  { name: 'YouTube', href: 'https://www.youtube.com/@kavyakishor', icon: Youtube },
];

export const LANGUAGE_STATS: LanguageStat[] = [
  { name: 'HTML', usage: 26.46, color: '#e34c26' },
  { name: 'C', usage: 22.86, color: '#555555' },
  { name: 'C++', usage: 19.65, color: '#f34b7d' },
  { name: 'JavaScript', usage: 17.30, color: '#f1e05a' },
  { name: 'CSS', usage: 10.96, color: '#563d7c' },
  { name: 'Java', usage: 2.77, color: '#b07219' },
];

// Fix: Add and export LANGUAGE_COLORS to provide a color mapping for programming languages used in GitHubStats.tsx.
export const LANGUAGE_COLORS: { [key: string]: string } = {
  'HTML': '#e34c26',
  'C': '#555555',
  'C++': '#f34b7d',
  'JavaScript': '#f1e05a',
  'CSS': '#563d7c',
  'Java': '#b07219',
  'default': '#A9B3C0'
};

export const TOOLS_AND_SKILLS: ToolSkill[] = [
  { name: 'React.js', proficiency: 70 },
  { name: 'TailwindCSS', proficiency: 75 },
  { name: 'NodeJS', proficiency: 65 },
  { name: 'Firebase', proficiency: 80 },
  { name: 'Git & GitHub', proficiency: 75 },
  { name: 'VS Code', proficiency: 85 },
  { name: 'Linux', proficiency: 70 },
  { name: 'MediaWiki', proficiency: 60 },
  { name: 'WordPress', proficiency: 70 },
  { name: 'Algorithms', proficiency: 70 },
  { name: 'Data Structures', proficiency: 75 },
  { name: 'SEO', proficiency: 65 },
];

export const PROGRAMMING_PROFILES: ProgrammingProfile[] = [
  {
    platform: 'Codeforces',
    handle: 'parvejhusentalukder',
    rating: '794 (Newbie)',
    maxRating: '796',
    solved: 109,
  },
  {
    platform: 'CodeChef',
    handle: '1★parvejhusen',
    rating: '824 (Provisional)',
    maxRating: '851',
    solved: 165,
    contests: 2,
  },
];

export const EXPERIENCES: Experience[] = [
    {
        role: 'CEO',
        company: 'VextraWeb',
        period: 'Jun 2025 – Present',
        description: [
            'Leading digital branding and web development projects.',
            'Specializing in Google Knowledge Panel optimization.',
        ]
    },
    {
        role: 'Editor & Web Developer',
        company: 'Kavya Kishor',
        period: 'Aug 2020 – Present',
        description: [
            'Managed content curation and editorial standards.',
            'Developed and maintained the organization\'s website with a focus on SEO.'
        ]
    },
     {
        role: 'CEO',
        company: 'Bhikitia',
        period: 'Jan – May 2025',
        description: [
            'Oversaw strategic growth and content management for a multilingual online encyclopedia.',
        ]
    },
];

export const PUBLICATIONS: Publication[] = [
    {
        type: 'Book',
        title: 'Chorar Jhalak',
        description: 'A collection of children\'s rhymes.'
    },
    {
        type: 'Award',
        title: 'Jagrata Literary Award',
        description: 'Received in 2022 for contributions to literature.'
    },
    {
        type: 'Role',
        title: 'Founder',
        description: 'Founded Kavya Kishor International, a literary and cultural platform.'
    }
];

export const PROJECTS: Project[] = [
    {
        name: 'Customer Support Ticket System',
        description: 'A system for managing customer support requests, built with a modern frontend stack.',
        tech: ['React.js', 'TailwindCSS', 'DaisyUI'],
    },
    {
        name: 'Emergency Hotline Services',
        description: 'A web project providing easy access to emergency hotline numbers.',
        tech: ['HTML', 'TailwindCSS', 'JS'],
    },
    {
        name: 'Green Earth',
        description: 'A front-end practice project focusing on responsive design and modern CSS.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://greenearthb12a6.pages.dev/'
    }
];

export const REPOS: Project[] = [
    {
        name: 'C-Solutions',
        description: 'A repository containing solved problems and exercises in the C programming language.',
        tech: ['C'],
        link: 'https://github.com/parvejhusentalukder/C-Solutions'
    },
    {
        name: 'CppSolutions',
        description: 'A collection of solved competitive programming problems in C++.',
        tech: ['C++'],
        link: 'https://github.com/parvejhusentalukder/CppSolutions'
    }
];

export const HONORS: Honor[] = [
    {
        title: 'Champion, Intra-University Programming Contest',
        issuer: 'SIU ICT Fest 2025'
    },
    {
        title: 'Jagrata Literary Award',
        issuer: 'Jagrata Sahitya Sanskritik Parishad (2022)'
    },
    {
        title: 'No Code WordPress Development Certificate',
        issuer: 'UNDP Bangladesh'
    }
];

export const EDUCATION: Education[] = [
    {
        degree: 'BSc in Computer Science',
        institution: 'Sylhet International University',
        period: '2025 – 2028',
    },
    {
        degree: 'Higher Secondary Certificate (HSC)',
        institution: 'Sylhet Science and Technology College',
        period: '2024',
        grade: '4.42/5.00'
    }
];

export const CONTACT_INFO = {
    emails: ['mail@parvejhusentalukder.com'],
    phones: ['+8801716884927'],
    location: 'Sylhet, Bangladesh'
};