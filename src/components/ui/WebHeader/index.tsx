import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';

export default function WebHeader() {
  const router = useRouter();
  const path = router.asPath;

  const webTitle = useMemo(() => {
    if (path === '/' || path === '/v2') {
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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
        as="font"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
        as="font"
      />
    </Head>
  );
}
