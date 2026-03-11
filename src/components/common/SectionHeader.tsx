type SectionHeaderProps = {
  label?: string;
  title: string;
  lead?: string;
  className?: string;
};

const SectionHeader = ({ label, title, lead, className = '' }: SectionHeaderProps) => (
  <div className={`space-y-4 ${className}`.trim()}>
    {label && (
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{label}</p>
    )}
    <h2 className="max-w-3xl font-display text-3xl leading-tight text-text md:text-5xl">{title}</h2>
    {lead && (
      <p className="max-w-3xl text-base leading-relaxed text-muted md:text-lg">{lead}</p>
    )}
  </div>
);

export default SectionHeader;
