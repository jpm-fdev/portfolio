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

type TabId = 'hard' | 'soft' | 'ai';

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
  ai: FiCpu,
  brain: FiSearch,
  workflow: FiTerminal,
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
  let skills = skillsData.hardSkills;
  if (activeTab === 'soft') skills = skillsData.softSkills;
  if (activeTab === 'ai') skills = skillsData.aiSkills;

  const handleKeyDown = (e: React.KeyboardEvent, tab: TabId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveTab(tab);
    }
    if (e.key === 'ArrowLeft') {
      if (activeTab === 'soft') setActiveTab('hard');
      if (activeTab === 'ai') setActiveTab('soft');
    }
    if (e.key === 'ArrowRight') {
      if (activeTab === 'hard') setActiveTab('soft');
      if (activeTab === 'soft') setActiveTab('ai');
    }
  };

  return (
    <SectionContainer id='skills' className='pb-20 md:pb-28'>
      <div className='space-y-10'>
        <SectionHeader label={skillsData.sectionLabel} title={skillsData.sectionTitle} />

        <div
          className='grid w-full grid-cols-[0.8fr_1fr_1.2fr] gap-2 border-b border-border/50 pb-1 sm:flex sm:w-auto sm:gap-4'
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
              className={`w-full whitespace-nowrap rounded-t px-2 py-3 text-sm font-semibold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:px-6 sm:py-3.5 sm:text-base ${
                activeTab === 'hard' ? 'text-accent' : 'text-muted hover:text-text'
              }`}>
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
              className={`w-full whitespace-nowrap rounded-t px-2 py-3 text-sm font-semibold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:px-6 sm:py-3.5 sm:text-base ${
                activeTab === 'soft' ? 'text-accent' : 'text-muted hover:text-text'
              }`}>
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
          <div className='relative'>
            <button
              type='button'
              role='tab'
              aria-selected={activeTab === 'ai'}
              tabIndex={activeTab === 'ai' ? 0 : -1}
              onClick={() => setActiveTab('ai')}
              onKeyDown={e => handleKeyDown(e, 'ai')}
              className={`w-full whitespace-nowrap rounded-t px-2 py-3 text-sm font-semibold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:px-6 sm:py-3.5 sm:text-base ${
                activeTab === 'ai' ? 'text-accent' : 'text-muted hover:text-text'
              }`}>
              <span className='md:hidden'>Intelligent Dev</span>
              <span className='hidden md:inline'>Intelligent Development</span>
            </button>
            {activeTab === 'ai' && (
              <motion.div
                layoutId='skills-tab-indicator'
                className='absolute -bottom-[5px] left-0 right-0 h-[3px] rounded-t-sm bg-accent'
                transition={springSoft}
              />
            )}
          </div>
        </div>

        <div className='relative'>
          {/* Dynamic height placeholder */}
          <div className={`${GRID_CLASS} invisible`} aria-hidden>
            {skills.map(skill => (
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

        {activeTab === 'ai' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='mx-auto max-w-3xl pt-4 text-center text-xs leading-relaxed text-muted/60'>
            <span className='font-medium text-muted/80'>Showcase:</span> This portfolio itself was designed
            and implemented in 4 days by leveraging AI-driven workflows for boilerplate generation, manually
            adjusting details and maintaining manual oversight over the entire flow and final quality.
            <br /> <br />
            <span>All text is manually written and edited by me.</span>
          </motion.p>
        )}
      </div>
    </SectionContainer>
  );
};

export default SkillsSection;
