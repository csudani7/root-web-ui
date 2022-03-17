import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLinkIcon, HamburgerMenuIcon } from '../ui/Icon';
import LinkButton from '../ui/LinkButton/LinkButton';
import SideMenu from './SideMenu';

export interface LinkProps {
  label: string;
  link: any;
  isExternalLink?: boolean;
}

interface StyledHeaderProps {
  links: Array<LinkProps>;
  invertedStyle?: boolean;
  onHamburgerMenuClick: () => void;
  isSideMenuOpened: boolean;
}

interface HeaderProps {
  invertedStyle?: boolean;
  links: Array<LinkProps>;
}

export function StyledLinkLabel({
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
          'font-sans font-medium text-base leading-normal py-4 tracking-wider uppercase flex items-center',
          !invertedStyle && 'text-white',
          invertedStyle && 'text-gray-900',
          activeTab && !invertedStyle && 'border-gray-300 border-b-4 border-solid',
          !invertedStyle && 'hover:border-gray-300 hover:border-b-4 hover:border-solid',
          invertedStyle && 'xl:hover:border-primary xl:hover:border-b-4 xl:hover:border-solid',
        )}
        target={target}
      >
        {label}
        {children}
      </a>
    </Link>
  );
}

export function StyledDropdownLinkLabel({ label, link, children, target = '_self' }: any) {
  return (
    <Link href={link}>
      <a
        className="font-sans font-medium text-base leading-normal text-gray-900 tracking-wider uppercase flex items-center py-2 pl-4 pr-8 hover:bg-gray-100 whitespace-nowrap"
        target={target}
      >
        {label}
        {children}
      </a>
    </Link>
  );
}

export function StyledHeader({
  links = [],
  invertedStyle = false,
  onHamburgerMenuClick,
  isSideMenuOpened,
}: StyledHeaderProps) {
  const router = useRouter();
  const activeMoreLink = ['/about-us/', '/promotions/'].some((tab) => tab === router.asPath);

  return (
    <div className={clsx('top-0 w-full fixed z-50 site-container')}>
      <div
        className={clsx(
          'bg-transparent border-b border-white border-opacity-20 transition-colors duration-300 site-container',
          invertedStyle && 'bg-white',
        )}
      >
        <div className="mx-auto px-6 md:px-4 md:pl-8 xl:px-12">
          <div className="flex justify-between items-center lg:justify-start lg:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1 py-4">
              <Link href="/">
                <a>
                  {invertedStyle ? (
                    <img src="/logo-primary.svg" alt="logo" width={172} height={30} />
                  ) : (
                    <img src="/logo-primary-invert.svg" alt="logo" width={172} height={30} />
                  )}
                </a>
              </Link>
            </div>
            <nav className="hidden xl:flex space-x-10">
              {links.map((item, index) => {
                const { label, link, isExternalLink } = item;
                return (
                  <StyledLinkLabel
                    key={`nav-link-${index}`}
                    label={label}
                    link={link}
                    invertedStyle={invertedStyle}
                    target={isExternalLink ? '_blank' : '_self'}
                  >
                    {isExternalLink && (
                      <ExternalLinkIcon
                        color="currentColor"
                        className={invertedStyle ? 'text-primary-500' : 'text-white'}
                      />
                    )}
                  </StyledLinkLabel>
                );
              })}
            </nav>

            {/* This part should be hidden when isSideMenuOpened true */}
            <div
              className={
                isSideMenuOpened
                  ? 'hidden'
                  : 'hidden md:flex items-center justify-end md:flex-1 lg:w-0'
              }
            >
              <LinkButton
                size="small"
                variant="outlined"
                parentClassName=""
                href="/login"
                color={invertedStyle ? 'primary' : 'white'}
              >
                Log in
              </LinkButton>
              <LinkButton
                id="homepageSignupHeader"
                size="small"
                parentClassName="ml-3"
                href="/signup"
                color={invertedStyle ? 'primary' : 'white'}
              >
                Sign up
              </LinkButton>
            </div>
            <div
              className={clsx(
                'xl:hidden md:ml-3 md:pl-4 border-transparent border-l border-solid md:py-4 flex',
                !invertedStyle && 'md:border-white md:border-opacity-20',
                invertedStyle && 'md:border-gray-200',
              )}
            >
              <button
                type="button"
                className="bg-transparent rounded-md inline-flex items-center justify-center text-white hover:text-gray-900 hover:bg-transparent focus:outline-none"
                onClick={onHamburgerMenuClick}
                aria-label="Hamburger Menu Open"
              >
                <HamburgerMenuIcon
                  className={invertedStyle ? 'text-gray-500' : 'text-white'}
                  color="currentColor"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header({ invertedStyle, links }: HeaderProps) {
  const [isSideMenuOpened, setIsSideMenuOpened] = useState(false);
  const onHamburgerMenuClick = useCallback(() => {
    setIsSideMenuOpened(!isSideMenuOpened);
  }, [isSideMenuOpened]);

  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: true,
  });

  return (
    <>
      {/* Tracker for scroll position */}
      <div ref={ref} />
      <StyledHeader
        links={links}
        invertedStyle={invertedStyle || !inView}
        onHamburgerMenuClick={onHamburgerMenuClick}
        isSideMenuOpened={isSideMenuOpened}
      />
      <SideMenu
        links={links}
        onHamburgerMenuClick={onHamburgerMenuClick}
        isSideMenuOpened={isSideMenuOpened}
        setIsSideMenuOpened={setIsSideMenuOpened}
      />
    </>
  );
}
