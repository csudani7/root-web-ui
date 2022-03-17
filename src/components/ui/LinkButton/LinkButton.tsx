import Link from 'next/link';
import React from 'react';
import Button, { Props as ButtonProps } from '../button/Button';
interface Props extends ButtonProps {
  href: any;
  target?: string;
  parentClassName?: string;
}

const LinkButton = ({ href, target = '_self', parentClassName, children, ...rest }: Props) => {
  if (!href) {
    return <div />;
  }
  return (
    <Link href={href || '#'}>
      <a target={target} className={parentClassName}>
        <Button {...rest}>{children}</Button>
      </a>
    </Link>
  );
};

export default LinkButton;
