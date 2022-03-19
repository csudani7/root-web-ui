import React from 'react';
import clsx from 'clsx';
import { IconProps } from '../../../types/common';

export default function HamburgerMenuIcon({ color = 'white', className }: IconProps) {
  return (
    <svg
      className={clsx('h-6 w-6 inline-block', className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}
