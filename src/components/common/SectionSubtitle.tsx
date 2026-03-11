type SectionSubtitleProps = { title: string; className?: string };

const SectionSubtitle = ({ title, className = '' }: SectionSubtitleProps) => (
  <h3 className={`font-display text-2xl text-text md:text-3xl ${className}`.trim()}>{title}</h3>
);

export default SectionSubtitle;
