import React from 'react';
import clsx from 'clsx';

export interface SideBarProps {
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  isOpened?: boolean;
  scroll?: boolean;
}

export default function SideBar({ className, children, isOpened, scroll }: SideBarProps) {
  return (
    <div>
      <div
        className={clsx(
          'flex flex-col bg-white h-screen md:w-94 fixed top-0 w-full z-50 ease-in-out transition-all duration-300',
          isOpened && 'right-0',
          !isOpened && '-right-full',
          className,
        )}
      >
        <div
          className={clsx(
            !isOpened && 'overflow-y-scroll',
            'w-full h-full',
            scroll && 'overflow-y-auto overflow-x-hidden',
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
