import React from 'react';
import clsx from 'clsx';

interface Props {
  alt?: string;
  className?: string;
  lazyload?: boolean;
  objectCover?: boolean;
  src: string;
}

export default function ImageComponent({
  alt = '',
  className,
  lazyload = true,
  objectCover = true,
  src,
}: Props) {
  return (
    <img
      src={src || ''}
      alt={alt}
      className={clsx(className, objectCover && 'object-cover', lazyload && 'lazyload')}
    />
  );
}
