import clsx from 'clsx';
import React from 'react';
import Button from '../Button';

interface SideBarTabsProps {
  arrayOfTab: Array<{ label: string; value: string }>;
  tabTitle: string;
  activeTab: string;
  buttonText: string;
  setActiveTab: (tab: string) => void;
}

export default function SideBarTabs({
  arrayOfTab,
  tabTitle,
  activeTab,
  setActiveTab,
  buttonText,
}: SideBarTabsProps) {
  return (
    <div className="row-span-1 md:col-span-1 px-6 md:px-32">
      <div className="border bottom-2 border-lightGreen px-8">
        <div className="text-easternBlue uppercase text-base font-semibold tracking-wide font-inter px-6 pt-6 pb-3">
          {tabTitle}
        </div>
        {arrayOfTab.map((item, index) => {
          return (
            <div
              key={index}
              className={clsx(
                'font-sora font-medium text-xl px-6 py-3 cursor-pointer',
                activeTab === item.value ? 'text-mediumSpringGreen' : 'text-titleBlack',
              )}
              onClick={() => setActiveTab(item.value)}
            >
              {item.label}
            </div>
          );
        })}
        <div className="px-6 pb-6">
          <Button
            className={
              'bg-gradient-to-r from-lightGreen via-mediumSpringGreen to-aquamarine font-semibold'
            }
            size="medium"
          >
            <div className="flex justify-center items-center">{buttonText}</div>
          </Button>
        </div>
      </div>
    </div>
  );
}
