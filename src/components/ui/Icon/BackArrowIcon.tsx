import React from 'react';
import { IconProps } from '../../../types/common';

export default function BackArrowIcon({ width, height, className, color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '12'}
      height={height || '12'}
      viewBox="0 0 12 12"
      className={className}
    >
      <g fill="none" fillRule="evenodd">
        <g fill={color || '#7C808B'}>
          <g>
            <g>
              <path
                d="M6 12c3.314 0 6-2.686 6-6S9.314 0 6 0 0 2.686 0 6s2.686 6 6 6zm0-.75C3.1 11.25.75 8.9.75 6S3.1.75 6 .75 11.25 3.1 11.25 6 8.9 11.25 6 11.25z"
                transform="translate(-408 -410) translate(408 408) translate(0 2)"
              />
              <path
                d="M7.299 3.059L3.67 5.367c-.217.138-.347.377-.347.633s.13.495.346.633L7.3 8.94c.174.112.406.06.517-.115.112-.174.06-.406-.115-.517l-3.627-2.31L7.7 3.692c.175-.11.227-.343.115-.517-.11-.175-.343-.227-.517-.115z"
                transform="translate(-408 -410) translate(408 408) translate(0 2)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
