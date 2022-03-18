import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CloseIcon from '../ui/Icon/CloseIcon';
import Button from '../ui/Button';
import { LinkProps } from '../../types/common';
import { routes } from '../../routes';
import SideBar from './SideBar';
import { SlackIcon } from '../ui/Icon';

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
    <SideBar scroll isOpened={isSideMenuOpened} className="bg-white">
      <div className="flex flex-col w-full right-0 items-start transition-all duration-500 ease-in-out">
        <div className="bg-white flex flex-row items-center justify-between w-full h-14 px-6">
          <div className="bg-transparent flex">
            <h1 className="font-inter font-medium uppercase text-2xl">
              <a href={routes.home} onClick={onHamburgerMenuClick}>
                <img src="/logo-primary.svg" alt="logo" />
              </a>
            </h1>
          </div>
          <div onClick={onHamburgerMenuClick}>
            <CloseIcon width={16} height={16} color="#000" />
          </div>
        </div>
        <div className="w-full flex flex-col justify-start p-6">
          {headerMainLinks?.map((link, index) => (
            <div
              key={index}
              className={clsx(
                'flex items-center pt-3 py-3 text-xl tracking-wider text-titleBlack',
                link.link === '#' && 'pb-6',
              )}
              onClick={onHamburgerMenuClick}
            >
              {link.link === '#' && (
                <span className="mr-2">
                  <SlackIcon />
                </span>
              )}
              <Link href={link.link} prefetch={false}>
                {link.label}
              </Link>
            </div>
          ))}
          <Button
            className="bg-gradient-to-r from-lightGreen via-mediumSpringGreen to-aquamarine font-semibold"
            size="large"
          >
            View Live Courses
          </Button>
        </div>
      </div>
    </SideBar>
  );
}
