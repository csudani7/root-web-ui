import React from 'react';
import clsx from 'clsx';

export interface ButtonProps {
  children: any;
  className: string;
  type?: 'button' | 'submit';
  size?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  className,
  type,
  size = 'medium',
  onClick,
}: ButtonProps) {
  const styles = [
    'items-center justify-center tracking-wider rounded font-semibold font-sora',
    size === 'tiny' && 'text-sm p-2.5',
    size === 'small' && 'text-xs px-4 py-1',
    size === 'medium' && 'text-sm md:text-xl px-3 py-3 md:px-6 md:py-3',
    size === 'large' && 'text-base px-8 py-3.5',
    className,
  ];

  return (
    <button type={type} onClick={onClick} className={clsx(styles)}>
      {children}
    </button>
  );
}
