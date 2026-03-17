import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="mt-20 border-t border-border/30 bg-surface/50 py-10 md:mt-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-12">
        <p className="text-sm text-muted/80">
          Thanks for visiting. This portfolio was made by me in 2026.
        </p>
        <a
          href="#top"
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
        >
          Go up
          <FiArrowUp className="transition-transform group-hover:-translate-y-1" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
