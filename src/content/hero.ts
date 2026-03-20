import type { HeroData } from '../types/portfolio';

export const heroData: HeroData = {
  badge: 'Always creating and improving',
  title: 'Juan Pablo Medina, Fullstack Dev',
  description:
    'Web systems developer focused on production with scalable technology. Always visible, proactive and independent. New challenges welcome.',
  primaryCta: 'Get in touch',
  secondaryCta: 'View experience',
  tags: ['Product-focused', 'Self organized', 'AI solver', 'TS oriented'],
  image: './placeholders/hero-media-default.svg',
  imageAlt: 'A decoration of circles and lines flowing',
  stats: [
    { id: 'experience', label: 'Years of experience', value: '5+' },
    { id: 'projects', label: 'Projects Worked', value: '50+' },
    { id: 'technologies', label: 'Proficient Technologies', value: '20+' },
    { id: 'languages', label: 'Languages Spoken', value: 'En & Es' },
  ],
};
