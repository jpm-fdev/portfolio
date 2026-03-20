import type { ContactData } from '../types/portfolio';

export const contactData: ContactData = {
  sectionTitle: 'Get in touch',
  sectionLead:
    "I'm always happy to talk about ideas and emerging projects. I'd love to make human connection and get to know your goals and priorities.",
  items: [
    {
      id: 'contact-email',
      type: 'email',
      label: 'Email',
      value: 'medinajp95@gmail.com',
      href: 'mailto:medinajp95@gmail.com',
    },
    {
      id: 'contact-linkedin',
      type: 'linkedin',
      label: 'LinkedIn',
      value: '/jpmdev',
      href: 'https://www.linkedin.com/in/jpmdev',
    },
    {
      id: 'contact-github',
      type: 'github',
      label: 'GitHub',
      value: '@jpm-fdev',
      href: 'https://github.com/jpm-fdev/portfolio',
    },
    { id: 'contact-location', type: 'location', label: 'Location', value: 'Jujuy, Argentina' },
  ],
};
