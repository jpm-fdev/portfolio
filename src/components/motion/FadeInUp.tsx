import { motion, type HTMLMotionProps } from 'framer-motion';
import { fadeInUp } from '../../lib/motion';

type FadeInUpProps = HTMLMotionProps<'div'> & {
  delay?: number;
  duration?: number;
};

const FadeInUp = ({
  delay = 0,
  duration,
  transition,
  variants,
  ...rest
}: FadeInUpProps) => (
  <motion.div
    initial={fadeInUp.initial}
    animate={fadeInUp.animate}
    transition={{
      ...fadeInUp.transition,
      ...(duration != null && { duration }),
      ...(delay > 0 && { delay }),
      ...transition,
    }}
    variants={variants}
    {...rest}
  />
);

export default FadeInUp;
