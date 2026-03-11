import { motion, type HTMLMotionProps } from 'framer-motion';
import { staggerContainer } from '../../lib/motion';

type StaggerChildrenProps = HTMLMotionProps<'div'> & {
  staggerChildren?: number;
  delayChildren?: number;
};

const StaggerChildren = ({
  staggerChildren = 0.08,
  delayChildren = 0.12,
  variants,
  ...rest
}: StaggerChildrenProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    variants={variants ?? staggerContainer(staggerChildren, delayChildren)}
    {...rest}
  />
);

export default StaggerChildren;
