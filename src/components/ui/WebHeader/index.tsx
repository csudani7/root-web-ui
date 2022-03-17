import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';

export default function WebHeader() {
  const router = useRouter();
  const path = router.asPath;

  const webTitle = useMemo(() => {
    if (path === '/') {
      return 'root | Home';
    } else if (path.includes('about')) {
      return 'root | About';
    } else if (path.includes('course')) {
      return 'root | Course';
    }
  }, [path]);

  return (
    <Head>
      <title>{webTitle}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}
