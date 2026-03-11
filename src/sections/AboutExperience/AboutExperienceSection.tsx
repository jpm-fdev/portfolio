import { motion } from 'framer-motion';
import { FiBriefcase, FiClock, FiLayers } from 'react-icons/fi';
import { aboutExperienceData } from '../../content/portfolioMock';
import SectionContainer from '../../components/common/SectionContainer';

const AboutExperienceSection = () => (
  <SectionContainer id="experience-about" className="pb-20 md:pb-28">
    <div className="space-y-10">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{aboutExperienceData.sectionTitle}</p>
        <h2 className="max-w-3xl font-display text-3xl leading-tight text-text md:text-5xl">{aboutExperienceData.aboutTitle}</h2>
        <p className="max-w-3xl text-base leading-relaxed text-muted md:text-lg">{aboutExperienceData.sectionLead}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }} className="overflow-hidden rounded-2xl border border-border/70 bg-panel/70">
          <img src={aboutExperienceData.aboutImage} alt={aboutExperienceData.aboutImageAlt} className="h-60 w-full object-cover md:h-72" />
          <div className="space-y-4 p-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-border/70 px-3 py-1 text-xs uppercase tracking-[0.14em] text-muted">
              <FiLayers />
              Lorem Ipsum
            </p>
            <p className="text-base leading-relaxed text-muted">{aboutExperienceData.aboutBody}</p>
          </div>
        </motion.article>

        <div className="space-y-4">
          <h3 className="font-display text-2xl text-text md:text-3xl">{aboutExperienceData.experienceTitle}</h3>
          <div className="grid gap-4">
            {aboutExperienceData.experiences.map((experience) => (
              <motion.article key={experience.id} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="grid gap-4 rounded-2xl border border-border/70 bg-panel/70 p-4 sm:grid-cols-[10rem_1fr]">
                <img src={experience.image} alt={experience.imageAlt} className="h-36 w-full rounded-xl border border-border/70 object-cover sm:h-full" />
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="inline-flex items-center gap-2 rounded-full border border-border/70 px-3 py-1 text-xs uppercase tracking-[0.14em] text-muted">
                      <FiBriefcase />
                      {experience.company}
                    </p>
                    <p className="inline-flex items-center gap-2 rounded-full border border-border/70 px-3 py-1 text-xs uppercase tracking-[0.14em] text-muted">
                      <FiClock />
                      {experience.period}
                    </p>
                  </div>
                  <h4 className="font-display text-xl leading-tight text-text">{experience.role}</h4>
                  <p className="text-sm leading-relaxed text-muted">{experience.summary}</p>
                  <ul className="flex flex-wrap gap-2">
                    {experience.stack.map((skill) => (
                      <li key={`${experience.id}-${skill}`} className="rounded-lg border border-border/70 bg-surface/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-muted">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
);

export default AboutExperienceSection;
