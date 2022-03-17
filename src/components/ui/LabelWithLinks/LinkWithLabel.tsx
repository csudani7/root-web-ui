import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function LinkWithLabel({ children, label, link }: any) {
  const router = useRouter();
  return (
    <Link href={link}>
      <a
        className={clsx(
          'flex items-center py-4 font-sans font-medium text-base leading-normal tracking-wider uppercase',
          router.asPath === link
            ? 'border-royalBlue border-b-2 text-royalBlue'
            : 'hover:border-royalBlue hover:border-b-2 text-gray-900'
        )}
        target="_self"
      >
        {label}
        {children}
      </a>
    </Link>
  );
}
