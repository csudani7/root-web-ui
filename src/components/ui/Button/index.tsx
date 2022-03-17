import React from 'react';
import clsx from 'clsx';

export interface ButtonProps {
  children?: any;
  className?: string;
  disabled?: boolean;
  font?: any;
  onClick?: () => void;
  size?: string;
  type?: 'button' | 'submit';
  isInvertedAnimation?: boolean;
}

export default function Button({
  children,
  className,
  disabled,
  font = 'font-sans',
  onClick,
  size = 'medium',
  type = 'button',
  isInvertedAnimation = false,
}: ButtonProps) {
  const styles = [
    'items-center justify-center tracking-wider focus:outline-none',
    size === 'tiny' && 'text-sm p-2.5',
    size === 'small' && 'text-xs px-4 py-1',
    size === 'medium' && 'text-sm px-6 py-3',
    size === 'large' && 'text-base px-8 py-3.5',
    font,
    className,
  ];

  return (
    <button
      type={type}
      className={clsx(
        styles,
        isInvertedAnimation ? 'inverted-animated-button' : 'animated-button'
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
