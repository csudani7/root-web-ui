import React from 'react';
import Head from 'next/head';
import { RichText } from 'prismic-reactjs';

export default function HtmlHead({ data }: any) {
  const { title } = data;
  const pageTitle = RichText.asText(title);

  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>Bitontree | {pageTitle}</title>
    </Head>
  );
}
