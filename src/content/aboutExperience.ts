import type { AboutData } from '../types/portfolio';

export const aboutExperienceData: AboutData = {
  sectionTitle: 'Experience & About me',
  sectionLead:
    "I collaborated in both agile startups and structured big tech. I'm aware of pipelines and processes, and I can easily switch priorities and tasks frequently while staying productive.",
  aboutTitle: 'Know my work',
  aboutBody: [
    'My first professional role was at Sana, a healthcare startup, where I grew autonomously in a high-pressure ecosystem of constant context-switching.',
    'Now I work with several high profile clients with clear structures and organized workflows within large teams and complex systems.',
    'I’ve learned to prioritize productivity without compromising quality, always seeking the most efficient path and avoiding unnecessary detours.',
  ],
  aboutImage: './placeholders/about-profile-default.svg',
  aboutImageAlt: 'Illustration of an user icon and text',
  experienceTitle: 'My Experience',
  experiences: [
    {
      id: 'exp-1',
      role: 'Fullstack Developer',
      period: '2023 - Present',
      company: 'Litebox',
      companyUrl: 'https://litebox.ai/',
      summary:
        'Participated or lead several projects of multiple types and challenges within large multi-role teams with structured workflows.',
      achievements: [
        'Fully developed an AI-powered Slack bot to collect and summarize daily standups for the whole company. Saves data, includes a RAG and exposes commands to view metrics and AI-processed insights.',
        "Contributed to build 10+ marketing sites with complex UI and motion side-to-side with designers, including the company's own site.",
        'Single-handledly lead a difficult-customer project to keep progress and satisfaction.',
        'Lead the implementation of a client Portal for invoices and metrics with dashboard and backend.',
      ],
      stack: [
        'NextJS & Vercel',
        'Pixel-perfect UI',
        'AI Integration',
        'Motion libraries',
        'Optimization',
        'Automation tools',
        'AI-Synergy Development',
      ],
      image: './litebox.png',
      imageAlt: 'Litebox logo',
    },
    {
      id: 'exp-2',
      role: 'Web & Mobile Dev',
      period: '2020 - 2023',
      company: 'Sana',
      companyUrl: 'https://www.linkedin.com/company/sana-digital-clinic/',
      summary:
        'Built a fully operational online-consultations platform from scratch in a dynamic working environment.',
      achievements: [
        'Built an appealing UI in collaboration with a designer.',
        'Engineered a full management dashboard for professionals and administration.',
        'Implemented a  consultation reservation system with fully integrated payment processing.',
        'Integrated native videocalls for digital consultations.',
      ],
      stack: ['React', 'UI/CSS Tailwind', 'React Native', 'Express', 'MySQL', 'AWS'],
      image: './sana.png',
      imageAlt: 'Sana Digital logo',
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
      image: './placeholders/experience-card-default.svg',
      imageAlt: 'Illustration of a card with text placeholder',
    },
  ],
};
