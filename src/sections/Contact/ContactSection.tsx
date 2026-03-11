import { motion } from 'framer-motion';
import { FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';
import StaggerChildren from '../../components/motion/StaggerChildren';
import { sectionStagger, springSoft, staggerItem } from '../../lib/motion';
import { contactData } from '../../content/portfolioMock';
import SectionContainer from '../../components/common/SectionContainer';
import SectionHeader from '../../components/common/SectionHeader';
import type { ContactItem } from '../../types/portfolio';

const CONTACT_ICON_MAP: Record<ContactItem['type'], React.ComponentType<{ className?: string }>> = {
  email: FiMail,
  github: SiGithub,
  linkedin: FiLinkedin,
  location: FiMapPin,
};

const cardClass =
  'flex items-center gap-4 rounded-xl border border-border/50 bg-panel/60 p-5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface';

const ContactCard = ({ item }: { item: ContactItem }) => {
  const Icon = CONTACT_ICON_MAP[item.type];
  const content = (
    <>
      <Icon className="shrink-0 text-xl text-accent" />
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{item.label}</p>
        <p className="truncate text-base font-medium text-text">{item.value}</p>
      </div>
    </>
  );
  if (item.href) {
    return (
      <motion.a
        href={item.href}
        target={item.type === 'email' ? '_self' : '_blank'}
        rel={item.type === 'email' ? undefined : 'noopener noreferrer'}
        variants={staggerItem}
        whileHover={{ y: -2 }}
        transition={springSoft}
        className={`cursor-pointer ${cardClass}`}
        aria-label={`${item.label}: ${item.value}`}
      >
        {content}
      </motion.a>
    );
  }
  return (
    <motion.div variants={staggerItem} whileHover={{ y: -2 }} transition={springSoft} className={cardClass}>
      {content}
    </motion.div>
  );
};

const ContactSection = () => (
  <SectionContainer id="contact" className="pb-20 md:pb-28">
    <div className="space-y-10">
      <SectionHeader
        label={contactData.sectionTitle}
        title={contactData.sectionTitle}
        lead={contactData.sectionLead}
      />
      <StaggerChildren
        variants={sectionStagger}
        viewportTrigger
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {contactData.items.map((item) => (
          <ContactCard key={item.id} item={item} />
        ))}
      </StaggerChildren>
    </div>
  </SectionContainer>
);

export default ContactSection;
