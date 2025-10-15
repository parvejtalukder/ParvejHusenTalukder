import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  InstagramIcon,
  EmailIcon,
  CodeforcesIcon,
} from './components/icons';
import {
  TrophyIcon,
  CodeBracketIcon,
  BookOpenIcon,
  GlobeAltIcon,
  UsersIcon,
} from './components/icons/feature';
import { SocialLink, SkillCategory, Project, Achievement, LiteraryHighlight, Activity } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/parvej-husen', Icon: GitHubIcon },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/parvej-husen-talukder', Icon: LinkedInIcon },
  { name: 'X', url: 'https://x.com/parvej_sh', Icon: XIcon },
  { name: 'Instagram', url: 'https://instagram.com/parvej_sh', Icon: InstagramIcon },
  { name: 'Email', url: 'mailto:parvej.husen.talukder@gmail.com', Icon: EmailIcon },
  { name: 'Codeforces', url: 'https://codeforces.com/profile/parvej.husen', Icon: CodeforcesIcon },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['JavaScript/TypeScript', 'Python', 'C++', 'HTML/CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS'],
  },
  {
    title: 'Databases & Tools',
    skills: ['MongoDB', 'PostgreSQL', 'Git/GitHub', 'Docker', 'VS Code'],
  },
  {
    title: 'Creative Writing',
    skills: ['Poetry', 'Rhyme', 'Content Creation', 'Bengali Literature'],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Bhikitia',
    description: 'A multilingual online encyclopedia project aimed at making knowledge universally accessible.',
    longDescription: 'Bhikitia is a comprehensive multilingual online encyclopedia founded with the mission to democratize knowledge. It supports multiple languages to cater to a global audience, providing free access to a vast repository of information on diverse subjects. The platform is built with scalability and user experience in mind, featuring a robust search engine and an intuitive interface.',
    tags: ['Next.js', 'React', 'MongoDB', 'Node.js', 'Knowledge Base'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1740&auto=format&fit=crop',
    liveUrl: '#',
  },
  {
    title: 'Khujoweb',
    description: 'A Bengali search engine and web portal designed to serve the Bengali-speaking community.',
    longDescription: 'Khujoweb is a dedicated search engine and web portal for the Bengali-speaking population. It aims to provide relevant, localized search results and a suite of web services in the Bengali language. The project involves complex algorithm design for language processing and information retrieval, tailored to the nuances of Bengali.',
    tags: ['Search Engine', 'NLP', 'Python', 'React', 'Bengali'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=1740&auto=format&fit=crop',
    repoUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website to showcase my projects, skills, and literary works.',
    longDescription: 'A modern and responsive personal portfolio built with Next.js, TypeScript, and Tailwind CSS. It features a clean design, smooth animations, and detailed sections for my technical projects, skills, achievements, and literary highlights. The site is designed to be a comprehensive showcase of my dual passions for technology and literature.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1740&auto=format&fit=crop',
    liveUrl: '#',
    repoUrl: '#',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Literary Awards',
    description: 'Received multiple awards for poetry and rhymes in national literary competitions.',
    Icon: TrophyIcon,
  },
  {
    title: 'Programming Contest Finalist',
    description: 'Ranked as a finalist in several inter-university programming contests.',
    Icon: CodeBracketIcon,
  },
  {
    title: 'Published Author',
    description: 'Authored and published books of poetry, contributing to contemporary Bengali literature.',
    Icon: BookOpenIcon,
  },
  {
    title: 'Entrepreneurial Ventures',
    description: 'Founded Bhikitia and Khujoweb, platforms aimed at democratizing information.',
    Icon: GlobeAltIcon,
  },
];

export const LITERARY_ACTIVITIES: Activity[] = [
  {
    title: 'Founder, Kavya Kishor',
    description: 'Established and lead a global literary initiative to connect and promote young writers and poets worldwide.',
    Icon: GlobeAltIcon,
  },
  {
    title: 'Literary Editing & Journaling',
    description: 'Serve as an editor for literary publications, curating contemporary Bengali and English writing.',
    Icon: BookOpenIcon,
  },
  {
    title: 'Community Engagement',
    description: 'Organize and participate in poetry slams, workshops, and literary festivals to foster creative expression.',
    Icon: UsersIcon,
  },
];


export const LITERARY_HIGHLIGHTS: LiteraryHighlight[] = [
    {
        title: 'Published Works',
        description: 'Authored several poetry books including "Swapner Shohor" and "Ichchhamotir Bake," which have been well-received in the Bengali literary community.'
    },
    {
        title: 'Literary Style',
        description: 'My writing blends modern sensibilities with traditional poetic forms, often exploring themes of nature, human emotion, and social commentary.'
    },
    {
        title: 'Community Involvement',
        description: 'Actively participate in literary festivals, workshops, and online forums to promote Bengali literature and mentor aspiring writers.'
    }
];