import React from 'react';
import dynamic from 'next/dynamic';

const WebHeader = dynamic(() => import('../components/ui/WebHeader'));
const PageLayout = dynamic(() => import('../components/layouts'));
const FeedbackSlice = dynamic(() => import('../components/layouts/Home/FeedbackSlice'));

function IndexPage() {
  return (
    <>
      <WebHeader />
      <PageLayout>
        <FeedbackSlice />
      </PageLayout>
    </>
  );
}

export default IndexPage;
