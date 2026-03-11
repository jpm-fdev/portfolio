import { motion, type HTMLMotionProps } from 'framer-motion';
import { staggerContainer } from '../../lib/motion';

type StaggerChildrenProps = HTMLMotionProps<'div'> & {
  staggerChildren?: number;
  delayChildren?: number;
  viewportTrigger?: boolean;
};

const StaggerChildren = ({
  staggerChildren = 0.08,
  delayChildren = 0.12,
  variants,
  viewportTrigger = false,
  ...rest
}: StaggerChildrenProps) => (
  <motion.div
    initial="initial"
    animate={viewportTrigger ? undefined : 'animate'}
    whileInView={viewportTrigger ? 'animate' : undefined}
    viewport={viewportTrigger ? { once: true, amount: 0.2 } : undefined}
    variants={variants ?? staggerContainer(staggerChildren, delayChildren)}
    {...rest}
  />
);

export default StaggerChildren;
