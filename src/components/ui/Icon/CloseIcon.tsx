import React from 'react';
import { IconProps } from '../../../types/common';

export default function CloseIcon({ width, height, className, color }: IconProps) {
  return (
    <svg
      width={width || '50'}
      height={height || '50'}
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M50 2.85712L47.143 0L25 22.1429L2.85712 0L0 2.85712L22.1429 25L0 47.143L2.85712 50L25 27.8571L47.143 50L50 47.143L27.8571 25L50 2.85712Z"
        fill={color || 'white'}
      />
    </svg>
  );
}
