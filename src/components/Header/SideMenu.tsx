import React from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import Link from 'next/link';
import { LinkProps } from './Header';
import { ExternalLinkIcon } from '../ui/Icon';
import Button from '../ui/button/Button';
import SidePanel from '../ui/SidePanel/SidePanel';
import useLayoutEffect from '../../../utils/useIsomorphicLayoutEffect';

interface SideMenuProps {
  links: Array<LinkProps>;
  isSideMenuOpened: boolean;
  setIsSideMenuOpened: (b: boolean) => void;
  onHamburgerMenuClick: () => void;
}

export function SideMenuLinkLabel({
  label,
  link,
  children,
  invertedStyle = false,
  onHamburgerMenuClick,
  target = '_self',
}: any) {
  const router = useRouter();
  const activeTab = link.split('/')[1] === router?.query.uid;
  return (
    <Link href={link}>
      <a
        onClick={onHamburgerMenuClick}
        className={clsx(
          'w-10/12 sm:w-11/12 relative font-sans font-medium text-base leading-normal py-4 tracking-wider uppercase flex items-center',
          !invertedStyle && 'text-white',
          invertedStyle && 'text-gray-900',
          activeTab && !invertedStyle && 'border-gray-300 border-b-4 border-solid',
          !invertedStyle && 'hover:border-gray-300 hover:border-b-4 hover:border-solid',
          invertedStyle && 'xl:hover:border-primary xl:hover:border-b-4 xl:hover:border-solid',
        )}
        target={target}
      >
        <div className="whitespace-pre-wrap">
          <span>{label}</span>
          <span className="whitespace-pre-line">{children}</span>
        </div>
      </a>
    </Link>
  );
}

function SideMenu({
  links,
  onHamburgerMenuClick,
  isSideMenuOpened = false,
  setIsSideMenuOpened,
}: SideMenuProps) {
  useLayoutEffect(() => {
    const body: HTMLBodyElement = document.getElementsByTagName('body')[0] as HTMLBodyElement;
    if (body) {
      body.style.overflow = isSideMenuOpened ? 'hidden' : 'unset';
    }
  }, [isSideMenuOpened]);

  return (
    <SidePanel
      scroll
      isOpened={isSideMenuOpened}
      setIsOpened={setIsSideMenuOpened}
      popupSide={'top'}
    >
      <div className="relative">
        <div className="flex justify-between md:hidden items-center px-4 py-6 gap-5">
          <Link href="/login">
            <Button
              color="primary"
              variant="outlined"
              className="font-medium uppercase px-4 py-2 text-xs md:text-base md:rounded-sm border-primary-500"
              fullWidth={true}
              font="font-sans"
              size="custom"
            >
              LOG IN
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              id="homepageSignupHeader"
              color="primary"
              className="font-medium uppercase px-4 py-2 text-xs md:text-base md:rounded-sm border border-primary-500"
              fullWidth={true}
              font="font-sans"
              size="custom"
            >
              SIGN UP
            </Button>
          </Link>
        </div>
        <hr className="mb-8" />
        <div
          className={clsx(
            'flex flex-col px-4 transition-all duration-500 ease-in-out w-full right-0',
          )}
        >
          {links.map((item, index) => {
            const { label, link, isExternalLink } = item;
            return (
              <SideMenuLinkLabel
                key={`nav-link-${index}`}
                label={label}
                link={link}
                invertedStyle={true}
                onHamburgerMenuClick={onHamburgerMenuClick}
              >
                {isExternalLink && (
                  <ExternalLinkIcon color="currentColor" className="text-gray-500" />
                )}
              </SideMenuLinkLabel>
            );
          })}
        </div>
      </div>
      <div />
    </SidePanel>
  );
}

export default SideMenu;
