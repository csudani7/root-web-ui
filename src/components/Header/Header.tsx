import React from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import Button from '../ui/Button';
import { HamburgerMenuIcon } from '../ui/Icon';
import { LinkWithLabel } from '../ui/LabelWithLinks';
import { LinkProps } from '../../types/common';
import { routes } from '../../routes';
import SideMenu from './SideMenu';

export interface HeaderProps {
  headerMainLinks: Array<LinkProps>;
}

export default function Header({ headerMainLinks }: HeaderProps) {
  const router = useRouter();
  const [isSideMenuOpened, setIsSideMenuOpened] = React.useState(false);

  const onHamburgerMenuClick = React.useCallback(() => {
    setIsSideMenuOpened(!isSideMenuOpened);
  }, [isSideMenuOpened]);

  const isCourseV2 = router.pathname.includes('v2/courses');

  return (
    <>
      <div
        className={clsx(
          isCourseV2 ? 'top-0 w-full z-50 h-24 bg-titleBlack' : 'top-0 w-full z-50 h-24',
        )}
      >
        <div className="relative z-10 bg-transprant">
          <div className="md:px-10 md:py-6">
            <div className="flex justify-between items-center lg:justify-start lg:space-x-10">
              <div className="flex justify-start items-center lg:w-0 lg:flex-1 py-1">
                <a href={routes.home} className="flex flex-col pl-6 md:pl-0">
                  <img
                    src={isCourseV2 ? '/logo-secondary.svg' : '/logo-primary.svg'}
                    alt="logo"
                    className="w-16 h-16 md:w-full md:h-full"
                  />
                </a>
              </div>
              <div
                className={
                  isSideMenuOpened
                    ? 'hidden'
                    : 'hidden md:flex items-center justify-end md:flex-1 lg:w-0'
                }
              >
                <nav className="hidden xl:flex space-x-14 pr-16">
                  {headerMainLinks?.map((item, index) => {
                    const { label, link } = item;
                    return (
                      <LinkWithLabel
                        key={`nav-link-${index}`}
                        label={label}
                        link={link}
                        isCourseV2={isCourseV2}
                      />
                    );
                  })}
                </nav>
                <Button
                  className={clsx(
                    isCourseV2
                      ? 'bg-gradient-to-r from-aqua to-dodgerBlue'
                      : 'bg-gradient-to-r from-lightGreen via-mediumSpringGreen to-aquamarine font-semibold',
                  )}
                  size="tiny"
                  onClick={() => router.push(routes.course)}
                >
                  View Live Courses
                </Button>
              </div>
              <div className="xl:hidden md:ml-3 md:pl-4 border-transparent border-l border-solid md:py-4 flex">
                <button
                  type="button"
                  className="bg-transparent rounded-md inline-flex items-center justify-center text-white hover:text-gray-900 hover:bg-transparent focus:outline-none"
                  onClick={onHamburgerMenuClick}
                  aria-label="Hamburger Menu Open"
                >
                  <HamburgerMenuIcon color={isCourseV2 ? 'white' : '#000'} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideMenu
        onHamburgerMenuClick={onHamburgerMenuClick}
        isSideMenuOpened={isSideMenuOpened}
        headerMainLinks={headerMainLinks}
      />
      <div
        className={clsx(
          isCourseV2
            ? 'grid grid-cols-2 lg:grid-cols-4 bg-gradient-to-r from-aqua to-dodgerBlue text-sm lg:text-2xl font-semibold font-sora leading-10 uppercase text-center py-2 items-center'
            : 'hidden',
        )}
      >
        <div>free course</div>
        <div>free course</div>
        <div>free course</div>
        <div>free course</div>
      </div>
    </>
  );
}
