import React from 'react';
import clsx from 'clsx';
import { useInView } from 'react-intersection-observer';
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
  const [isSideMenuOpened, setIsSideMenuOpened] = React.useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: true,
  });

  const onHamburgerMenuClick = React.useCallback(() => {
    setIsSideMenuOpened(!isSideMenuOpened);
  }, [isSideMenuOpened]);

  return (
    <>
      <div ref={ref} />
      <div className="top-0 w-full fixed z-50 h-24">
        <div className={clsx(inView ? 'bg-transprant' : 'bg-white')}>
          <div className="md:px-10 md:py-6">
            <div className="flex justify-between items-center lg:justify-start lg:space-x-10">
              <div className="flex justify-start items-center lg:w-0 lg:flex-1 py-1">
                <a href={routes.home} className="flex flex-col pl-6">
                  <img
                    src="/logo-primary.svg"
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
                    return <LinkWithLabel key={`nav-link-${index}`} label={label} link={link} />;
                  })}
                </nav>
                <Button
                  className="bg-gradient-to-r from-lightGreen via-mediumSpringGreen to-aquamarine font-semibold"
                  size="tiny"
                >
                  View Live Courses
                </Button>
              </div>
              <div
                className={clsx(
                  'xl:hidden md:ml-3 md:pl-4 border-transparent border-l border-solid md:py-4 flex',
                  !inView && 'md:border-white md:border-opacity-20',
                  inView && 'md:border-gray-200',
                )}
              >
                <button
                  type="button"
                  className="bg-transparent rounded-md inline-flex items-center justify-center text-white hover:text-gray-900 hover:bg-transparent focus:outline-none"
                  onClick={onHamburgerMenuClick}
                  aria-label="Hamburger Menu Open"
                >
                  <HamburgerMenuIcon color="#000" />
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
    </>
  );
}
