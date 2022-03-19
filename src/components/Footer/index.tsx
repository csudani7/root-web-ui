import React from 'react';
import clsx from 'clsx';
import { routes } from '../../routes';
import { LinkProps } from '../../types/common';

export interface FooterProps {
  copyRightText?: string;
  firstColumnLinks?: Array<LinkProps>;
  promotionText?: string;
  rootClassName?: string;
  secondColumnLinks?: Array<LinkProps>;
}

const FooterLinks = ({ links }: { links: Array<LinkProps> }) => (
  <div>
    {links?.map(({ label, link }: LinkProps, index) => {
      return (
        <div key={index} className="pt-4">
          <a
            href={link}
            className="text-xs md:text-lg not-italic tracking-wider text-gray-500 cursor-pointer"
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
  return (
    <div className={clsx('font-inter bg-white', rootClassName)}>
      <div className="relative block lg:grid lg:grid-cols-6 lg:gap-12 px-10 py-12">
        <div className="flex flex-col justify-center col-span-2 pb-8">
          <div className="flex flex-col items-start jusify-center">
            <a href={routes.home} className="flex flex-col pl-1.5">
              <img src="/logo-primary.svg" alt="logo" className="w-12 h-12 md:w-full md:h-full" />
            </a>
          </div>
          <div className="flex flex-col items-start pt-4">
            <div className="text-xs text-titleBlack font-medium text-left tracking-wider">
              {promotionText}
            </div>
            <div className="pt-4 text-left">
              <div className="text-xs text-titleBlack break-words text-left">{copyRightText}</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 col-span-4 text-titleBlack">
          <div className="p-2 md:p-4 text-left md:text-left lg:text-left lg:col-span-1 justify-self-center">
            <FooterLinks links={firstColumnLinks || []} />
          </div>
          <div className="p-2 md:p-4 text-center md:text-left lg:text-left lg:col-span-1">
            <FooterLinks links={secondColumnLinks || []} />
          </div>
        </div>
      </div>
    </div>
  );
}
