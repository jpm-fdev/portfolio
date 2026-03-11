import { motion } from 'framer-motion';
import { FiArrowRight, FiDatabase, FiServer, FiZap } from 'react-icons/fi';
import { SiTypescript } from 'react-icons/si';
import { heroData } from '../../content/portfolioMock';
import SectionContainer from '../../components/common/SectionContainer';

const iconMap = [FiZap, FiServer, FiDatabase, SiTypescript];

const HeroSection = () => (
  <SectionContainer id="hero" className="relative overflow-hidden py-20 md:py-28">
    <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="rounded-3xl border border-border/60 bg-hero p-7 shadow-glow md:p-12">
      <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{heroData.badge}</span>
          <div className="space-y-5">
            <h1 className="max-w-2xl font-display text-4xl leading-[1.05] text-text md:text-6xl">{heroData.title}</h1>
            <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">{heroData.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface" aria-label={heroData.primaryCta}>
              {heroData.primaryCta}
              <FiArrowRight className="text-base" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-panel/70 px-5 py-3 text-sm font-semibold text-text transition hover:bg-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface" aria-label={heroData.secondaryCta}>
              {heroData.secondaryCta}
            </button>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {heroData.stats.map((stat) => (
              <div key={stat.id} className="rounded-xl border border-border/70 bg-panel/75 p-4">
                <p className="text-2xl font-display font-semibold text-text">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <img src={heroData.image} alt={heroData.imageAlt} className="h-[23rem] w-full rounded-2xl border border-border/75 object-cover shadow-glow md:h-[27rem]" />
          <div className="grid grid-cols-2 gap-3">
            {heroData.tags.map((tag, index) => {
              const Icon = iconMap[index % iconMap.length];
              return (
                <span key={tag} className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-panel/70 px-3 py-2 text-sm text-muted">
                  <Icon className="text-accent" />
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  </SectionContainer>
);

export default HeroSection;
