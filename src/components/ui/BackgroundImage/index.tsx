import React from 'react';
import clsx from 'clsx';
import Image from '../Image';

export interface BackgroundImageProps {
  alt?: string;
  children?: React.ReactElement | React.ReactElement[];
  imgClassName?: string;
  maxHeight?: number;
  parentClass?: string;
  src?: string;
  setDefaultMinHeight?: boolean;
}

export default function BackgroundImage({
  alt,
  children,
  imgClassName,
  maxHeight,
  parentClass = 'h-full',
  src,
  setDefaultMinHeight,
}: BackgroundImageProps) {
  return (
    <div
      className={clsx(
        parentClass,
        'relative overflow-hidden',
        setDefaultMinHeight && 'min-h-460 md:min-h-650',
      )}
      style={{ maxHeight: maxHeight || 'inital' }}
    >
      {src && (
        <Image
          src={src}
          alt={alt}
          sizes="100%"
          className={`absolute top-0 left-0 w-full h-full ${imgClassName}`}
        />
      )}
      {children && <div className={clsx('h-full z-10')}>{children}</div>}
    </div>
  );
}
