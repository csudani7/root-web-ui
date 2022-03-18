import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CloseIcon from '../ui/Icon/CloseIcon';
import Button from '../ui/Button';
import { LinkProps } from '../../types/common';
import { routes } from '../../routes';
import SideBar from './SideBar';

interface SideMenuProps {
  headerMainLinks: Array<LinkProps>;
  isSideMenuOpened: boolean;
  onHamburgerMenuClick: () => void;
}

export default function SideMenu({
  headerMainLinks,
  isSideMenuOpened,
  onHamburgerMenuClick,
}: SideMenuProps) {
  const router = useRouter();
  return (
    <SideBar
      scroll
      isOpened={isSideMenuOpened}
      className="bg-gradient-to-b from-aliceBlue to-whiteSmoke"
    >
      <div className="flex flex-col w-full right-0 items-start transition-all duration-500 ease-in-out">
        <div className="bg-aliceBlue flex flex-row items-center justify-between w-full h-14 px-6 border-b border-gray-850 border-opacity-20">
          <div className="bg-transparent flex">
            <h1 className="font-inter font-medium uppercase text-2xl">
              <a href={routes.home} onClick={onHamburgerMenuClick}>
                <img src="/logo-primary.svg" alt="logo" />
              </a>
            </h1>
          </div>
          <div onClick={onHamburgerMenuClick}>
            <CloseIcon width={16} height={16} color="#2A61F9" />
          </div>
        </div>
        <div className="flex flex-col justify-start p-6">
          {headerMainLinks?.map((link, index) => (
            <div
              key={index}
              className={clsx(
                'pt-3 py-3 text-base tracking-wider uppercase',
                router.asPath === link.link ? 'text-royalBlue' : 'text-black',
              )}
              onClick={onHamburgerMenuClick}
            >
              <Link href={link.link} prefetch={false}>
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </SideBar>
  );
}
