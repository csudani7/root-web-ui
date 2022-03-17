import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import React, { ReactElement, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  className?: string;
  children: ReactElement | ReactElement[];
  delay?: number;
  triggerOnce?: boolean;
  yDistance?: number;
  fadeIn?: boolean;
  parentClassName?: string;
}

export default function SlideInMotionContainer({
  children,
  className,
  delay = 0,
  triggerOnce = true,
  yDistance = 300,
  fadeIn = true,
  parentClassName,
}: Props): ReactElement {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce,
  });
  const controls = useAnimation();
  useEffect(() => {
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
