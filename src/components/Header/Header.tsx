import React from 'react';
import clsx from 'clsx';
import { useSetRecoilState } from 'recoil';
import { useInView } from 'react-intersection-observer';
import Button from '../ui/Button';
import { HamburgerMenuIcon } from '../ui/Icon';
import { LinkWithLabel } from '../ui/LabelWithLinks';
import { LinkProps } from '../../types/common';
import { isRequestQuoteBannerOnAtom } from '../../recoils/RequestQuoteBannerRecoil';
import { routes } from '../../routes';
import SideMenu from './SideMenu';

export interface HeaderProps {
  headerMainLinks: Array<LinkProps>;
}

export default function Header({ headerMainLinks }: HeaderProps) {
  const setIsModalVisible = useSetRecoilState(isRequestQuoteBannerOnAtom);
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
      <div className="top-0 w-full fixed z-50 site-container">
        <div
          className={clsx(
            'border-b border-gray-850 border-opacity-20 site-container',
            inView ? 'bg-transparent' : 'bg-white',
          )}
        >
          <div className="px-6 md:px-4 md:pl-8 xl:px-12">
            <div className="flex justify-between items-center lg:justify-start lg:space-x-10">
              <div className="flex justify-start items-center lg:w-0 lg:flex-1 py-1">
                <a href={routes.home} className="flex flex-col pl-1.5">
                  <img src="/logo-primary.svg" alt="logo" />
                </a>
              </div>
              <nav className="hidden xl:flex space-x-8">
                {headerMainLinks?.map((item, index) => {
                  const { label, link } = item;
                  return <LinkWithLabel key={`nav-link-${index}`} label={label} link={link} />;
                })}
              </nav>
              <div
                className={
                  isSideMenuOpened
                    ? 'hidden'
                    : 'hidden md:flex items-center justify-end md:flex-1 lg:w-0'
                }
              >
                <Button
                  className={clsx('font-semibold border border-royalBlue')}
                  size="tiny"
                  onClick={() => setIsModalVisible(true)}
                >
                  <span className="relative z-10">Request a Quote</span>
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
                  <HamburgerMenuIcon color="#2A61F9" />
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
