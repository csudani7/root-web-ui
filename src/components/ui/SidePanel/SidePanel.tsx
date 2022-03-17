import React, { ReactElement } from 'react';
import clsx from 'clsx';
import useLayoutEffect from '../../../../utils/useIsomorphicLayoutEffect';

export enum SidePanelWidth {
  '1/3',
  '2/3',
}

export interface SidePanelProps {
  isOpened: boolean;
  setIsOpened: (b: boolean) => void;
  children?: ReactElement | ReactElement[];
  className?: string;
  width?: SidePanelWidth;
  scroll?: boolean;
}

function SidePanel({ isOpened, setIsOpened, className, width, children, scroll }: SidePanelProps) {
  useLayoutEffect(() => {
    const body: HTMLBodyElement = document.getElementsByTagName('body')[0] as HTMLBodyElement;
    if (body) {
      body.style.overflow = isOpened ? 'hidden' : 'unset';
    }
    return () => {
      if (body) {
        body.style.overflow = 'unset';
      }
    };
  }, [isOpened]);

  return (
    <div>
      {/* <div
        className={clsx(
          'bg-black bg-opacity-40 h-screen fixed top-0 z-50 left-0 md:w-full',
          isOpened && 'fade-in',
          !isOpened && 'fade-out',
        )}
        onClick={() => setIsOpened(!isOpened)}
      ></div> */}
      <div
        className={clsx(
          'flex flex-col bg-white h-screen fixed top-0 w-full z-50 ease-in-out transition-all duration-300',
          isOpened && 'right-0',
          !isOpened && '-right-full',
          width === SidePanelWidth['2/3'] ? 'md:w-2/3' : 'md:w-1/3',
          className,
        )}
      >
        <div className="py-4 px-6 border-b border-solid border-gray-200 text-right">
          <button
            className="hover:bg-transparent bg-transparent focus:outline-none h-full"
            onClick={() => setIsOpened(false)}
            aria-label="Close Side Panel"
          >
            <img
              src="/svg/interface-essential-form-validation-close.svg"
              alt="Close Side Panel"
              width={16}
              height={16}
              className="my-auto"
            />
          </button>
        </div>
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

export default SidePanel;
