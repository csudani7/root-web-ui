import React from 'react';
import { IconProps } from '../../../types/common';

export default function QuotesIcon({ width = 40, height = 40, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#0C2954"
      width={width}
      height={height}
      className={className}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
    </svg>
  );
}
