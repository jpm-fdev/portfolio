import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
  FiCode,
  FiDatabase,
  FiServer,
  FiCpu,
  FiUsers,
  FiTarget,
  FiMessageCircle,
  FiLayout,
  FiZap,
  FiTerminal,
  FiLayers,
  FiSettings,
  FiBox,
  FiSearch,
  FiShield,
  FiRefreshCw,
  FiBriefcase,
  FiTrendingUp,
  FiTool,
} from 'react-icons/fi';
import { FaReact, FaVuejs } from 'react-icons/fa';
import StaggerChildren from '../../components/motion/StaggerChildren';
import { sectionStagger, springSoft, staggerItem } from '../../lib/motion';
import { skillsData } from '../../content/portfolioMock';
import SectionContainer from '../../components/common/SectionContainer';
import SectionHeader from '../../components/common/SectionHeader';
import type { SkillItem } from '../../types/portfolio';

type TabId = 'hard' | 'soft';

const GRID_CLASS = 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3';

const SKILL_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  code: FiCode,
  database: FiDatabase,
  server: FiServer,
  api: FiCpu,
  team: FiUsers,
  lead: FiTarget,
  communicate: FiMessageCircle,
  layout: FiLayout,
  zap: FiZap,
  terminal: FiTerminal,
  layers: FiLayers,
  settings: FiSettings,
  box: FiBox,
  search: FiSearch,
  react: FaReact,
  vue: FaVuejs,
  testing: FiShield,
  refresh: FiRefreshCw,
  ownership: FiBriefcase,
  growth: FiTrendingUp,
  'problem-solving': FiTool,
};

const LevelBar = ({ level }: { level: SkillItem['level'] }) => (
  <div className='flex gap-1' role='presentation' aria-hidden>
    {([1, 2, 3] as const).map(i => (
      <div key={i} className='h-1.5 flex-1 overflow-hidden rounded-full bg-border/50'>
        <motion.div
          className='h-full rounded-full bg-accent/90'
          initial={{ width: 0 }}
          animate={{ width: i <= level ? '100%' : '0%' }}
          transition={springSoft}
        />
      </div>
    ))}
  </div>
);

const SkillCard = ({ skill, showLevel = true }: { skill: SkillItem; showLevel?: boolean }) => {
  const Icon = SKILL_ICON_MAP[skill.icon] ?? FiCode;
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -1 }}
      transition={springSoft}
      className={`flex flex-col rounded-xl border bg-panel/60 p-5 ${
        skill.level === 3 ? 'border-border/90' : 'border-border/50'
      }`}>
      <div className='flex-grow'>
        <div className='mb-4 flex items-center gap-2'>
          <Icon className='text-accent' />
          <h3 className='font-display text-base font-semibold text-text'>{skill.title}</h3>
        </div>
        <p className='mb-6 text-base leading-relaxed text-muted'>{skill.description}</p>
      </div>
      {showLevel && <LevelBar level={skill.level} />}
    </motion.div>
  );
};

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>('hard');
  const skills = activeTab === 'hard' ? skillsData.hardSkills : skillsData.softSkills;
  const maxSkills =
    skillsData.hardSkills.length >= skillsData.softSkills.length
      ? skillsData.hardSkills
      : skillsData.softSkills;

  const handleKeyDown = (e: React.KeyboardEvent, tab: TabId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveTab(tab);
    }
    if (e.key === 'ArrowLeft') setActiveTab('hard');
    if (e.key === 'ArrowRight') setActiveTab('soft');
  };

  return (
    <SectionContainer id='skills' className='pb-20 md:pb-28'>
      <div className='space-y-10'>
        <SectionHeader label={skillsData.sectionLabel} title={skillsData.sectionTitle} />

        <div
          className='flex gap-4 border-b border-border/50 pb-1'
          role='tablist'
          aria-label='Skills category'>
          <div className='relative'>
            <button
              type='button'
              role='tab'
              aria-selected={activeTab === 'hard'}
              tabIndex={activeTab === 'hard' ? 0 : -1}
              onClick={() => setActiveTab('hard')}
              onKeyDown={e => handleKeyDown(e, 'hard')}
              className={`rounded-t px-6 py-3.5 text-base font-semibold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${activeTab === 'hard' ? 'text-accent' : 'text-muted hover:text-text'}`}>
              My Skills
            </button>
            {activeTab === 'hard' && (
              <motion.div
                layoutId='skills-tab-indicator'
                className='absolute -bottom-[5px] left-0 right-0 h-[3px] rounded-t-sm bg-accent'
                transition={springSoft}
              />
            )}
          </div>
          <div className='relative'>
            <button
              type='button'
              role='tab'
              aria-selected={activeTab === 'soft'}
              tabIndex={activeTab === 'soft' ? 0 : -1}
              onClick={() => setActiveTab('soft')}
              onKeyDown={e => handleKeyDown(e, 'soft')}
              className={`rounded-t px-6 py-3.5 text-base font-semibold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${activeTab === 'soft' ? 'text-accent' : 'text-muted hover:text-text'}`}>
              How I Work
            </button>
            {activeTab === 'soft' && (
              <motion.div
                layoutId='skills-tab-indicator'
                className='absolute -bottom-[5px] left-0 right-0 h-[3px] rounded-t-sm bg-accent'
                transition={springSoft}
              />
            )}
          </div>
        </div>

        <div className='relative'>
          <div className={`invisible ${GRID_CLASS}`} aria-hidden>
            {maxSkills.map(skill => (
              <SkillCard key={skill.id} skill={skill} showLevel={activeTab === 'hard'} />
            ))}
          </div>
          <div className='absolute inset-0'>
            <AnimatePresence mode='wait'>
              <StaggerChildren
                key={activeTab}
                variants={sectionStagger}
                viewportTrigger
                className={GRID_CLASS}>
                {skills.map(skill => (
                  <SkillCard key={skill.id} skill={skill} showLevel={activeTab === 'hard'} />
                ))}
              </StaggerChildren>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SkillsSection;
