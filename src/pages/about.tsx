import React from 'react';
import dynamic from 'next/dynamic';

const WebHeader = dynamic(() => import('../components/ui/WebHeader'));
const PageLayout = dynamic(() => import('../components/layouts'));
const PromotionSlice = dynamic(() => import('../components/layouts/Home/PromotionSlice'));
const StatsCounterSlice = dynamic(() => import('../components/layouts/About/StatsCounterSlice'));
const FeedbackSlice = dynamic(() => import('../components/layouts/Home/FeedbackSlice'));
const PromotionFooterSlice = dynamic(
  () => import('../components/layouts/Home/PromotionFooterSlice'),
);

export default function AboutPage() {
  return (
    <>
      <WebHeader />
      <PageLayout>
        <FeedbackSlice isTitleShow={false} />
        <StatsCounterSlice />
        <PromotionSlice />
        <FeedbackSlice isTitleShow={false} />
        <PromotionFooterSlice />
      </PageLayout>
    </>
  );
}
