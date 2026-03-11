import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import StaggerChildren from '../../components/motion/StaggerChildren';
import { sectionStagger, springSoft, staggerItem } from '../../lib/motion';
import { skillsData } from '../../content/portfolioMock';
import SectionContainer from '../../components/common/SectionContainer';
import SectionHeader from '../../components/common/SectionHeader';
import type { SkillItem } from '../../types/portfolio';

type TabId = 'hard' | 'soft';

const GRID_CLASS = 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3';

const LevelBar = ({ level }: { level: SkillItem['level'] }) => (
  <div className="flex gap-1" role="presentation" aria-hidden>
    {([1, 2, 3] as const).map((i) => (
      <div key={i} className="h-1.5 flex-1 overflow-hidden rounded-full bg-border/50">
        <motion.div
          className="h-full rounded-full bg-accent/90"
          initial={{ width: 0 }}
          animate={{ width: i <= level ? '100%' : '0%' }}
          transition={springSoft}
        />
      </div>
    ))}
  </div>
);

const SkillCard = ({ skill }: { skill: SkillItem }) => (
  <motion.div
    variants={staggerItem}
    whileHover={{ y: -1 }}
    transition={springSoft}
    className="rounded-xl border border-border/50 bg-panel/60 px-4 py-4"
  >
    <p className="mb-3 text-sm leading-relaxed text-muted">{skill.description}</p>
    <LevelBar level={skill.level} />
  </motion.div>
);

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>('hard');
  const skills = activeTab === 'hard' ? skillsData.hardSkills : skillsData.softSkills;
  const maxSkills = skillsData.hardSkills.length >= skillsData.softSkills.length ? skillsData.hardSkills : skillsData.softSkills;

  const handleKeyDown = (e: React.KeyboardEvent, tab: TabId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveTab(tab);
    }
    if (e.key === 'ArrowLeft') setActiveTab('hard');
    if (e.key === 'ArrowRight') setActiveTab('soft');
  };

  return (
    <SectionContainer id="skills" className="pb-20 md:pb-28">
      <div className="space-y-6">
        <SectionHeader label={skillsData.sectionTitle} title={skillsData.sectionTitle} />

        <div className="flex gap-1 border-b border-border/50" role="tablist" aria-label="Skills category">
          <div className="relative">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'hard'}
              tabIndex={activeTab === 'hard' ? 0 : -1}
              onClick={() => setActiveTab('hard')}
              onKeyDown={(e) => handleKeyDown(e, 'hard')}
              className={`rounded-t px-3 py-2 text-xs font-medium tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${activeTab === 'hard' ? 'text-accent' : 'text-muted hover:text-text'}`}
            >
              Hard Skills
            </button>
            {activeTab === 'hard' && (
              <motion.div
                layoutId="skills-tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-px bg-accent"
                transition={springSoft}
              />
            )}
          </div>
          <div className="relative">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'soft'}
              tabIndex={activeTab === 'soft' ? 0 : -1}
              onClick={() => setActiveTab('soft')}
              onKeyDown={(e) => handleKeyDown(e, 'soft')}
              className={`rounded-t px-3 py-2 text-xs font-medium tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${activeTab === 'soft' ? 'text-accent' : 'text-muted hover:text-text'}`}
            >
              Soft Skills
            </button>
            {activeTab === 'soft' && (
              <motion.div
                layoutId="skills-tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-px bg-accent"
                transition={springSoft}
              />
            )}
          </div>
        </div>

        <div className="relative">
          <div className={`invisible ${GRID_CLASS}`} aria-hidden>
            {maxSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
          <div className="absolute inset-0">
            <AnimatePresence mode="wait">
              <StaggerChildren
                key={activeTab}
                variants={sectionStagger}
                className={GRID_CLASS}
              >
                {skills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
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
