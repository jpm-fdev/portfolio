export const tweenEaseOut = { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const };

export const springSoft = { type: 'spring' as const, stiffness: 400, damping: 28 };

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: tweenEaseOut,
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: tweenEaseOut,
};

export const staggerContainer = (
  staggerChildren = 0.08,
  delayChildren = 0.12
) => ({
  initial: {},
  animate: { transition: { staggerChildren, delayChildren } },
});

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: tweenEaseOut,
};

export const heroStagger = staggerContainer(0.08, 0.1);

export const sectionStagger = staggerContainer(0.1, 0.15);
