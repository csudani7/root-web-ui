import React from 'react';
import dynamic from 'next/dynamic';
import WebHeader from '../components/WebHeader';

const PageLayout = dynamic(() => import('../components/layouts'));

function IndexPage() {
  return (
    <>
      <WebHeader />
      <PageLayout>
        <div>Hello world</div>
      </PageLayout>
    </>
  );
}

export default IndexPage;
