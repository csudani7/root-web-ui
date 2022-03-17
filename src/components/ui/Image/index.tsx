import React from 'react';
import Img from 'react-imgix';
import clsx from 'clsx';

interface Props {
  alt?: string;
  className?: string;
  lazyload?: boolean;
  objectCover?: boolean;
  src: string;
  sizes?: string;
}

export default function Image({
  alt = '',
  className,
  lazyload = true,
  objectCover = true,
  src,
  sizes = '100vw',
}: Props) {
  let attributeConfig: any = {};
  const htmlAttributes: any = {
    alt: alt || '',
    src: src || '',
  };
  if (lazyload) {
    attributeConfig = {
      src: 'data-src',
      srcSet: 'data-srcset',
      sizes: 'data-sizes',
    };
  }
  return (
    <Img
      src={src || ''}
      sizes={sizes}
      className={clsx(
        className,
        objectCover && 'object-cover',
        lazyload && 'lazyload'
      )}
      attributeConfig={attributeConfig}
      htmlAttributes={htmlAttributes}
    />
  );
}
