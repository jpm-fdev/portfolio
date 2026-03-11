import type { AboutData, ContactData, HeroData, SkillsData } from '../types/portfolio';

export const heroData: HeroData = {
  badge: 'Lorem ipsum dolor sit amet',
  title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.',
  primaryCta: 'Lorem Ipsum',
  secondaryCta: 'Dolor Sit',
  tags: ['Lorem Ipsum', 'Dolor Sit Amet', 'Consectetur Adipisicing', 'Eiusmod Tempor'],
  image: '/placeholders/hero-media-default.svg',
  imageAlt: 'Lorem ipsum hero media placeholder',
  stats: [
    { id: 'projects', label: 'Lorem ipsum', value: '48+' },
    { id: 'delivery', label: 'Dolor sit', value: '96%' },
    { id: 'scale', label: 'Consectetur', value: '3.2x' },
  ],
};

export const aboutExperienceData: AboutData = {
  sectionTitle: 'Experience & About me',
  sectionLead: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  aboutTitle: 'Lorem ipsum dolor sit amet',
  aboutBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  aboutImage: '/placeholders/about-profile-default.svg',
  aboutImageAlt: 'Lorem ipsum profile placeholder',
  experienceTitle: 'Lorem ipsum experience sets',
  experiences: [
    { id: 'exp-1', role: 'Lorem ipsum dolor', period: '2023 - Present', company: 'Lorem Studio', summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', stack: ['React', 'Node', 'PostgreSQL'], image: '/placeholders/experience-card-default.svg', imageAlt: 'Lorem ipsum experience placeholder one' },
    { id: 'exp-2', role: 'Sit amet consectetur', period: '2021 - 2023', company: 'Dolor Labs', summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', stack: ['TypeScript', 'GraphQL', 'AWS'], image: '/placeholders/experience-card-default.svg', imageAlt: 'Lorem ipsum experience placeholder two' },
    { id: 'exp-3', role: 'Adipisicing elit sed', period: '2019 - 2021', company: 'Ipsum Collective', summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', stack: ['Next.js', 'Redis', 'Docker'], image: '/placeholders/experience-card-default.svg', imageAlt: 'Lorem ipsum experience placeholder three' },
  ],
};

export const skillsData: SkillsData = {
  sectionTitle: 'Skills & Proficiencies',
  hardSkills: [
    { id: 'hs-1', title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.', level: 3, icon: 'code' },
    { id: 'hs-2', title: 'Dolor Sit', description: 'Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna.', level: 2, icon: 'database' },
    { id: 'hs-3', title: 'Consectetur', description: 'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', level: 1, icon: 'server' },
    { id: 'hs-4', title: 'Adipisicing', description: 'Adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.', level: 2, icon: 'api' },
  ],
  softSkills: [
    { id: 'ss-1', title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.', level: 2, icon: 'team' },
    { id: 'ss-2', title: 'Sit Amet', description: 'Sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore.', level: 3, icon: 'lead' },
    { id: 'ss-3', title: 'Elit Sed', description: 'Elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.', level: 1, icon: 'communicate' },
  ],
};

export const contactData: ContactData = {
  sectionTitle: 'Contact',
  sectionLead: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  items: [
    { id: 'contact-email', type: 'email', label: 'Email', value: 'lorem@ipsum.dev', href: 'mailto:lorem@ipsum.dev' },
    { id: 'contact-github', type: 'github', label: 'GitHub', value: 'github.com/lorem-ipsum', href: 'https://github.com/lorem-ipsum' },
    { id: 'contact-linkedin', type: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/lorem-ipsum', href: 'https://linkedin.com/in/lorem-ipsum' },
    { id: 'contact-location', type: 'location', label: 'Location', value: 'Lorem City, Ipsum' },
  ],
};
