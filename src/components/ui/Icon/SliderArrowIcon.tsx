import React from 'react';
import { IconProps } from '../../../types/common';

export default function SliderArrowIcon({
  width,
  height,
  color,
  className,
}: IconProps) {
  return (
    <svg
      width={width || '80'}
      height={height || '80'}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d)">
        <ellipse
          cx="69.5516"
          cy="62.5315"
          rx="45.5516"
          ry="46.5315"
          fill={color || '#2C3A47'}
        />
      </g>
      <g clipPath="url(#clip0)">
        <path
          d="M64.9002 47.6421L60.9752 50.9954L73.7246 61.9116L60.9752 72.8278L64.9002 76.1811L81.6025 61.9116L64.9002 47.6421Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="139.103"
          height="141.063"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="12" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <clipPath id="clip0">
          <rect
            width="66.809"
            height="57.0781"
            fill="white"
            transform="translate(37.0634 33.3726)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
