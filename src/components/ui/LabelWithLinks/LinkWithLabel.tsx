import clsx from 'clsx';
import Link from 'next/link';
import { SlackIcon } from '../Icon';

export function LinkWithLabel({ children, label, link }: any) {
  return (
    <Link href={link}>
      <a
        className={clsx(
          'flex items-center py-4 font-inter font-semibold text-base leading-normal tracking-wider text-tuna',
        )}
        target="_self"
      >
        {link === '#' && (
          <span className='mr-2'>
            <SlackIcon />
          </span>
        )}
        {label}
        {children}
      </a>
    </Link>
  );
}
