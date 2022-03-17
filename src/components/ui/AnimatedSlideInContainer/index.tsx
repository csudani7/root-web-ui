import React from 'react';
import clsx from 'clsx';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

interface Props {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
  delay?: number;
  fadeIn?: boolean;
  parentClassName?: string;
  triggerOnce?: boolean;
  yDistance?: number;
}

export default function AnimatedSlideInContainer({
  children,
  className,
  delay = 0,
  fadeIn = true,
  parentClassName,
  triggerOnce = true,
  yDistance = 300,
}: Props): React.ReactElement {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!triggerOnce) {
      controls.start('hidden', {
        duration: 0,
      });
    }
  }, [controls, inView, triggerOnce]);

  return (
    <div className={clsx('w-full', parentClassName)} ref={ref}>
      <motion.div
        ref={ref}
        className={clsx(className)}
        animate={controls}
        initial="hidden"
        transition={{
          duration: 1,
          delay,
        }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: fadeIn ? 0 : 1, y: yDistance },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
