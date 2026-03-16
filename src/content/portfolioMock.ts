import type { AboutData, ContactData, HeroData, SkillsData } from '../types/portfolio';

export const heroData: HeroData = {
  badge: 'Always creating and improving',
  title: 'Juan Pablo Medina, Fullstack Dev',
  description:
    'Web systems developer focused on production with scalable technology. Always visible, proactive and independent. I love to face new challenges and produce quality features.',
  primaryCta: 'Get in touch',
  secondaryCta: 'View experience',
  tags: ['Product-focused', 'Self organized', 'DB manager', 'TS addict', 'AI solver'],
  image: '/placeholders/hero-media-default.svg',
  imageAlt: 'Lorem ipsum hero media placeholder',
  stats: [
    { id: 'experience', label: 'Years of experience', value: '5+' },
    { id: 'projects', label: 'Projects Worked', value: '50+' },
    { id: 'languages', label: 'Proficient Technologies', value: '20+' },
    { id: 'languages', label: 'Languages Spoken', value: 'En & Es' },
  ],
};

export const aboutExperienceData: AboutData = {
  sectionTitle: 'Experience & About me',
  sectionLead:
    "I collaborated in both agile startups and structured big tech. I'm aware of pipelines and processes, and I can easily switch priorities and tasks frequently while staying productive.",
  aboutTitle: 'Know my work',
  aboutBody: [
    'My first professional role was at Sana, a healthcare startup, where I grew autonomously in a high-pressure ecosystem of constant context-switching.',
    'After that, I moved into my current role at Litebox, where we work with several high profile clients with clear structures and organized workflows within large teams and complex systems.',
    'I’ve learned to prioritize productivity without compromising quality, always seeking the most efficient path and avoiding unnecessary detours.',
  ],
  aboutImage: '/placeholders/about-profile-default.svg',
  aboutImageAlt: 'Lorem ipsum profile placeholder',
  experienceTitle: 'My Experience',
  experiences: [
    {
      id: 'exp-1',
      role: 'Fullstack Developer',
      period: '2023 - Present',
      company: 'Litebox',
      summary:
        'Participated or lead several projects of multiple types and challenges within large multi-role teams with structured workflows.',
      achievements: [
        'Fully developed an AI-powered Slack bot to collect and summarize daily standups for the whole company. Saves data, includes a RAG and exposes commands to view metrics and AI-processed insights.',
        'Contributed to build several marketing sites with complex UI and motion side-to-side with designers.',
        'Single-handledly lead a difficult-customer project to keep progress and satisfaction.',
        'Lead the implementation of a client Portal for invoices and metrics.',
      ],
      stack: [
        'Next & Vercel',
        'AI Integration',
        'Motion libraries',
        'Optimization',
        'n8n & trigger.dev',
        'Supabase',
      ],
      image: '/placeholders/experience-card-default.svg',
      imageAlt: 'Lorem ipsum experience placeholder one',
    },
    {
      id: 'exp-2',
      role: 'Web & Mobile Developer',
      period: '2020 - 2023',
      company: 'Sana Digital',
      summary:
        'Built a fully operational online-consultations platform from scratch in a dynamic working environment.',
      achievements: [
        'Built an appealing UI in collaboration with a designer.',
        'Developed a full management dashboard for professionals and administration.',
        'Implemented a  consultation reservation system with fully integrated payment processing.',
        'Integrated native videocalls for digital consultations.',
      ],
      stack: ['React', 'React Native', 'Express', 'MySQL', 'AWS'],
      image: '/placeholders/experience-card-default.svg',
      imageAlt: 'Lorem ipsum experience placeholder three',
    },
    {
      id: 'exp-3',
      role: 'Web Developer',
      period: '2018 - 2019',
      company: 'Freelancer',
      summary: 'I started my journey building projects for local clients.',
      achievements: [
        'Built 3 custom portfolios for local professionals.',
        'Developed a desktop inventory management system.',
      ],
      stack: ['React', 'HTML', 'CSS', 'JS'],
      image: '/placeholders/experience-card-default.svg',
      imageAlt: 'Lorem ipsum experience placeholder two',
    },
  ],
};

export const skillsData: SkillsData = {
  sectionLabel: 'Skills & Proficiencies',
  sectionTitle: 'Know my strengths',
  hardSkills: [
    {
      id: 'hs-1',
      title: 'React & Next.js',
      description:
        '5 years into the React ecosystem, the flow feels intuitive. I know how to maximize its potential and avoid its usual technical debts.',
      level: 3,
      icon: 'react',
    },
    {
      id: 'hs-2',
      title: 'CSS & Tailwind',
      description:
        'I can build top-tier interfaces at high speed. Tailwind is my go-to framework for creating clean, modern, and highly efficient UIs.',
      level: 3,
      icon: 'layout',
    },
    {
      id: 'hs-3',
      title: 'UI Libraries',
      description:
        'Components (Chakra, shadcn), motion (Framer Motion, GSAP), state and forms (React Query, Lenis), etc. I’ve integrated dozens of libraries.',
      level: 3,
      icon: 'box',
    },
    {
      id: 'hs-4',
      title: 'Performance & SEO',
      description:
        'I strive for top-tier Performance & SEO scores while balancing high-quality output with efficient development cycles',
      level: 3,
      icon: 'zap',
    },
    {
      id: 'hs-5',
      title: 'Automation Tools',
      description:
        'I leverage n8n, Supabase, trigger.dev and others to build quick automated flows with data persistence.',
      level: 3,
      icon: 'settings',
    },
    {
      id: 'hs-6',
      title: 'Databases',
      description:
        'PostgreSQL is my core strength. I’ve built and managed multiple databases, ensuring data integrity and scalability at every step.',
      level: 2,
      icon: 'database',
    },
    {
      id: 'hs-7',
      title: 'Other frameworks',
      description:
        'React.js is my core expertise, but I’m also proficient in Vue, Solid, Svelte, Astro and even pure JS with HTML.',
      level: 2,
      icon: 'terminal',
    },
  ],
  softSkills: [
    {
      id: 'ss-1',
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.',
      level: 2,
      icon: 'team',
    },
    {
      id: 'ss-2',
      title: 'Sit Amet',
      description:
        'Sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore.',
      level: 3,
      icon: 'lead',
    },
    {
      id: 'ss-3',
      title: 'Elit Sed',
      description: 'Elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.',
      level: 1,
      icon: 'communicate',
    },
  ],
};

export const contactData: ContactData = {
  sectionTitle: 'Get in touch',
  sectionLead:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  items: [
    {
      id: 'contact-email',
      type: 'email',
      label: 'Email',
      value: 'lorem@ipsum.dev',
      href: 'mailto:lorem@ipsum.dev',
    },
    {
      id: 'contact-github',
      type: 'github',
      label: 'GitHub',
      value: 'github.com/lorem-ipsum',
      href: 'https://github.com/lorem-ipsum',
    },
    {
      id: 'contact-linkedin',
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/lorem-ipsum',
      href: 'https://linkedin.com/in/lorem-ipsum',
    },
    { id: 'contact-location', type: 'location', label: 'Location', value: 'Lorem City, Ipsum' },
  ],
};
