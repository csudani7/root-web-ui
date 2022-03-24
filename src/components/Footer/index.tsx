import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';

import { routes } from '../../routes';
import { LinkProps } from '../../types/common';

export interface FooterProps {
  copyRightText?: string;
  firstColumnLinks?: Array<LinkProps>;
  promotionText?: string;
  rootClassName?: string;
  secondColumnLinks?: Array<LinkProps>;
}

const FooterLinks = ({ links, isCourseV2 }: { links: Array<LinkProps>; isCourseV2: boolean }) => (
  <div>
    {links?.map(({ label, link }: LinkProps, index) => {
      return (
        <div key={index} className="pt-4">
          <a
            href={link}
            className={clsx(
              isCourseV2 ? 'text-white' : 'text-gray-500',
              'text-xs md:text-lg not-italic tracking-wider cursor-pointer',
            )}
            target="_self"
          >
            {label}
          </a>
        </div>
      );
    })}
  </div>
);

export default function Footer({
  copyRightText,
  firstColumnLinks,
  promotionText,
  rootClassName,
  secondColumnLinks,
}: FooterProps) {
  const isCourseV2 = useRouter().pathname.includes('v2/courses');

  return (
    <div className={clsx(isCourseV2 ? 'bg-titleBlack' : 'bg-white', 'font-inter', rootClassName)}>
      <div className="relative block lg:grid lg:grid-cols-6 lg:gap-12 px-10 py-12">
        <div className="flex flex-col justify-center col-span-2 pb-8">
          <div className="flex flex-col items-start jusify-center">
            <a href={routes.home} className="flex flex-col pl-1.5">
              <img
                src={isCourseV2 ? '/logo-secondary.svg' : '/logo-primary.svg'}
                alt="logo"
                className="w-12 h-12 md:w-full md:h-full"
              />
            </a>
          </div>
          <div className="flex flex-col items-start pt-4">
            <div
              className={clsx(
                isCourseV2 ? 'text-white' : 'text-titleBlack',
                'text-xs font-medium text-left tracking-wider',
              )}
            >
              {promotionText}
            </div>
            <div className="pt-4 text-left">
              <div
                className={clsx(
                  isCourseV2 ? 'text-white' : 'text-titleBlack',
                  'text-xs break-words text-left',
                )}
              >
                {copyRightText}
              </div>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            isCourseV2 ? 'text-white' : 'text-titleBlack',
            'grid grid-cols-2 gap-4 col-span-4',
          )}
        >
          <div className="p-2 md:p-4 text-left md:text-left lg:text-left lg:col-span-1 justify-self-center">
            <FooterLinks links={firstColumnLinks || []} isCourseV2={isCourseV2} />
          </div>
          <div className="p-2 md:p-4 text-center md:text-left lg:text-left lg:col-span-1">
            <FooterLinks links={secondColumnLinks || []} isCourseV2={isCourseV2} />
          </div>
        </div>
      </div>
    </div>
  );
}
