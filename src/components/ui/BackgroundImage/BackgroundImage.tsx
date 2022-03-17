import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Image from '../Image';
interface BackgroundImageProps {
  src?: string;
  children?: ReactElement | ReactElement[];
  className?: string;
  alt?: string;
  parentClass?: string;
  maxHeight?: number;
  fadeOut?: boolean;
  lazyload?: boolean;
  shadow?: boolean;
  setDefaultMinHeight?: boolean;
  gradientTopToBottom?: boolean;
}

function BackgroundImage({
  className = 'object-cover',
  src,
  alt,
  children,
  parentClass = 'h-full',
  maxHeight,
  fadeOut = false,
  lazyload = true,
  shadow,
  setDefaultMinHeight,
  gradientTopToBottom = true,
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
          sizes="100%"
          alt={alt}
          className={`absolute top-0 left-0 w-full h-full ${className}`}
          lazyload={lazyload}
        />
      )}
      {children && (
        <div className={clsx('relative h-full z-10', shadow && ' bg-linear-purple-0')}>
          {children}
        </div>
      )}
      {fadeOut && (
        <div
          className={clsx(
            'absolute w-full h-1/4 z-0 min-h-1/2',
            gradientTopToBottom &&
              '-bottom-0.5 left-0 bg-gradient-to-b from-transparent to-gray-100',
            !gradientTopToBottom && 'top-0 left-0 bg-gradient-to-t from-transparent to-gray-100',
          )}
        />
      )}
    </div>
  );
}

export default BackgroundImage;
