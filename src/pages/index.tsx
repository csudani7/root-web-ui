import React from 'react';
import dynamic from 'next/dynamic';

const WebHeader = dynamic(() => import('../components/ui/WebHeader'));
const PageLayout = dynamic(() => import('../components/layouts'));
const PromotionSlice = dynamic(() => import('../components/layouts/Home/PromotionSlice'));
const FeedbackSlice = dynamic(() => import('../components/layouts/Home/FeedbackSlice'));
const PromotionFooterSlice = dynamic(
  () => import('../components/layouts/Home/PromotionFooterSlice'),
);

function HomePage() {
  return (
    <>
      <WebHeader />
      <PageLayout>
        <PromotionSlice />
        <FeedbackSlice />
        <PromotionFooterSlice />
      </PageLayout>
    </>
  );
}

export default HomePage;
