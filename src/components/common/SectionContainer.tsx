import type { PropsWithChildren } from 'react';

type SectionContainerProps = PropsWithChildren<{ id: string; className?: string }>;

const SectionContainer = ({ id, className, children }: SectionContainerProps) => (
  <section id={id} className={className}>
    <div className="mx-auto w-full max-w-6xl px-6 md:px-10">{children}</div>
  </section>
);

export default SectionContainer;
