import React from 'react';
import Img from 'react-imgix';
import clsx from 'clsx';

interface Props {
  src: string;
  sizes?: string;
  lazyload?: boolean;
  className?: string;
  alt?: string;
  objectCover?: boolean;
}

function Image({
  src,
  sizes = '100vw',
  lazyload = true,
  objectCover = true,
  alt,
  className,
}: Props) {
  let attributeConfig: any = {};
  const htmlAttributes: any = {
    alt: alt || '',
    src: src ? `${src.substring(0, src.indexOf('?'))}?auto=format,compress&q=1&blur=10&w=auto` : '',
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
      className={clsx(className, objectCover && 'object-cover', lazyload && 'lazyload')}
      attributeConfig={attributeConfig}
      htmlAttributes={htmlAttributes}
    />
  );
}

export default Image;
