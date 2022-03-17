import clsx from 'clsx';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import * as React from 'react';
import Image from '../Image';

interface ScaledImageProps {
  src: string;
  className?: string;
  alt?: string;
}

function ScaledImage({ src, alt, className }: ScaledImageProps) {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1.3, 1.5]);
  return (
    <motion.div
      style={{ scale }}
      className={clsx('h-full w-full absolute top-0 left-0', className)}
      layout
    >
      <Image
        src={src}
        sizes="100vw"
        className="m-auto w-full h-full object-cover"
        alt={alt}
        lazyload={false}
      />
    </motion.div>
  );
}

export default ScaledImage;
