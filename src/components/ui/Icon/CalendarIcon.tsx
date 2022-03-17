import React from 'react';
import { IconProps } from './';

const CalendarIcon = ({ width, height, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 24}
      height={height || 25}
      viewBox="0 0 24 25"
      className={className}
    >
      <g fill="none" fillRule="evenodd">
        <g fill="#7C808B">
          <g>
            <g>
              <g>
                <g>
                  <g>
                    <g>
                      <path
                        d="M22.5 2.001h-21c-.828 0-1.5.672-1.5 1.5v19c0 .828.672 1.5 1.5 1.5h21c.828 0 1.5-.672 1.5-1.5v-19c0-.828-.672-1.5-1.5-1.5zm-21 1h21c.276 0 .5.224.5.5v19c0 .276-.224.5-.5.5h-21c-.276 0-.5-.224-.5-.5v-19c0-.276.224-.5.5-.5z"
                        transform="translate(-351 -2177) translate(79 1831.5) translate(0 88) translate(40 214) translate(0 31.5) translate(16 10.5) translate(216 2)"
                      />
                      <path
                        d="M5.5.001c.245 0 .45.177.492.41L6 .501v5c0 .276-.224.5-.5.5-.245 0-.45-.177-.492-.41L5 5.5v-5c0-.276.224-.5.5-.5zM18.5.001c.245 0 .45.177.492.41l.008.09v5c0 .276-.224.5-.5.5-.245 0-.45-.177-.492-.41L18 5.5v-5c0-.276.224-.5.5-.5zM23.5 7.001c.276 0 .5.224.5.5 0 .245-.177.45-.41.492L23.5 8H.5c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492l.09-.008h23z"
                        transform="translate(-351 -2177) translate(79 1831.5) translate(0 88) translate(40 214) translate(0 31.5) translate(16 10.5) translate(216 2)"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default CalendarIcon;
