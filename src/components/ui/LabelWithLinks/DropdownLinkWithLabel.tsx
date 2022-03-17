import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function DropdownLinkWithLabel({ children, label, link }: any) {
  const router = useRouter();
  return (
    <Link href={link}>
      <a
        className={clsx(
          'flex items-center py-2 pl-4 pr-8 font-sans font-medium text-base leading-normal tracking-wider whitespace-nowrap hover:text-royalBlue',
          router.asPath === link ? 'text-royalBlue' : 'text-gray-900'
        )}
        target="_self"
      >
        {label}
        {children}
      </a>
    </Link>
  );
}
