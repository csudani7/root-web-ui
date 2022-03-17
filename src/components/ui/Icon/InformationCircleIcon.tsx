import React from 'react';
import clsx from 'clsx';
import { IconProps } from '.';

function Icon({ color = '#bcc0c8', className }: IconProps) {
  return (
    <svg
      className={clsx(className)}
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
    >
      <g fill="none" fillRule="evenodd">
        <g fill={color}>
          <g>
            <g>
              <g>
                <g>
                  <path
                    d="M10 8.333c.46 0 .833.374.833.834v4.166c0 .46-.373.834-.833.834-.46 0-.833-.374-.833-.834V9.167c0-.46.373-.834.833-.834zm0-2.5c.46 0 .833.374.833.834 0 .46-.373.833-.833.833-.46 0-.833-.373-.833-.833 0-.46.373-.834.833-.834zm0 10.834c-3.676 0-6.667-2.991-6.667-6.667 0-3.676 2.991-6.667 6.667-6.667 3.676 0 6.667 2.991 6.667 6.667 0 3.676-2.991 6.667-6.667 6.667m0-15c-4.603 0-8.333 3.73-8.333 8.333 0 4.602 3.73 8.333 8.333 8.333 4.602 0 8.333-3.73 8.333-8.333S14.602 1.667 10 1.667"
                    transform="translate(-261 -2301) translate(79 2223) translate(40 74) translate(1.063) translate(141 4)"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
export default Icon;
