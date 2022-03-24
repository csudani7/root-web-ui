import clsx from 'clsx';
import Link from 'next/link';
import { SlackIcon } from '../Icon';

export function LinkWithLabel({ children, label, link, isCourseV2 }: any) {
  return (
    <Link href={link}>
      <a
        className={clsx(
          isCourseV2 ? 'text-white' : 'text-tuna',
          'flex items-center py-4 font-inter font-semibold text-base leading-normal tracking-wider',
        )}
        target="_self"
      >
        {link === '#' && (
          <span className="mr-2">
            <SlackIcon />
          </span>
        )}
        {label}
        {children}
      </a>
    </Link>
  );
}
