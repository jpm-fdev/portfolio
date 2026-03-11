import type { ReactNode } from 'react';

type PillProps = {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
};

const Pill = ({ children, icon, className = '' }: PillProps) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full border border-border/70 px-3 py-1 text-xs uppercase tracking-[0.14em] text-muted ${className}`.trim()}
  >
    {icon}
    {children}
  </span>
);

export default Pill;
