import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import Button from '../Button';

interface SideBarTabsProps {
  arrayOfTab: Array<{ label: string; value: string }>;
  tabTitle: string;
  activeTab: string;
  buttonText: string;
  setActiveTab: (tab: string) => void;
  isCourseV2?: boolean;
}

export default function SideBarTabs({
  arrayOfTab,
  tabTitle,
  activeTab,
  setActiveTab,
  buttonText,
  isCourseV2,
}: SideBarTabsProps) {
  return (
    <div className="px-8 md:px-32 sticky top-10">
      <div
        className={clsx(
          isCourseV2
            ? ' border-2 bottom-2 border-solid border-aqua px-2 lg:px-4'
            : 'border-2 bottom-2 border-solid border-lightGreen px-2 lg:px-4',
        )}
      >
        <div className="text-easternBlue uppercase text-base font-semibold tracking-wide font-inter px-6 pt-6 pb-3">
          {tabTitle}
        </div>
        {arrayOfTab.map((item, index) => {
          return (
            <div
              key={index}
              className={clsx(
                'font-sora font-semibold text-xl px-6 py-3 cursor-pointer',
                activeTab === item.value
                  ? 'text-mediumSpringGreen'
                  : isCourseV2
                  ? 'text-white'
                  : 'text-titleBlack',
              )}
              onClick={() => setActiveTab(item.value)}
            >
              <Link href={`#` + item.value}>
                <a>{item.label}</a>
              </Link>
            </div>
          );
        })}
        <div className="px-6 pb-6">
          <Button
            className={clsx(
              isCourseV2
                ? 'bg-gradient-to-r from-aqua to-dodgerBlue font-semibold'
                : 'bg-gradient-to-r from-lightGreen via-mediumSpringGreen to-aquamarine font-semibold',
            )}
            size="medium"
          >
            <div className="flex justify-center items-center mx-16">{buttonText}</div>
          </Button>
        </div>
      </div>
    </div>
  );
}
