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
            className="text-lg not-italic tracking-wider text-gray-500 hover:text-royalBlue cursor-pointer"
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
    <div className={clsx('font-inter relative bg-white', rootClassName)}>
      <div className="relative block lg:grid grid-cols-6 gap-12 px-9 py-12">
        <div className="flex flex-col justify-center col-span-2 pb-8">
          <div className="flex flex-col items-center jusify-center">
            <a href={routes.home} className="flex flex-col pl-1.5">
              <img src="/logo-primary.svg" alt="logo" />
            </a>
          </div>
          <div className="flex flex-col items-center pt-10">
            <div className="text-xl md:text-2xl lg:text-2xl text-gray-800 font-medium text-center tracking-wider">
              {promotionText}
            </div>
            <div className="pt-4 text-center">
              <div className="text-sm text-gray-500 break-words text-center">{copyRightText}</div>
            </div>
          </div>
        </div>
        <div className="md:flex justify-center lg:col-span-2 gap-4">
          <div className="p-4 text-center md:text-left lg:text-left lg:col-span-1">
            <FooterLinks links={firstColumnLinks || []} />
          </div>
          <div className="p-4 text-center md:text-left lg:text-left lg:col-span-1">
            <FooterLinks links={secondColumnLinks || []} />
          </div>
        </div>
      </div>
    </div>
  );
}
