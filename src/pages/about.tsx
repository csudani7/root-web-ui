import React from 'react';
import dynamic from 'next/dynamic';

const WebHeader = dynamic(() => import('../components/ui/WebHeader'));
const PageLayout = dynamic(() => import('../components/layouts'));
const AboutLandingSlice = dynamic(() => import('../components/layouts/About/AboutLandingSlice'));
const TutorPlaceSlice = dynamic(() => import('../components/layouts/About/TutorPlaceSlice'));
const StatsCounterSlice = dynamic(() => import('../components/layouts/About/StatsCounterSlice'));
const PromotionSlice = dynamic(() => import('../components/layouts/Home/PromotionSlice'));
const FeedbackSlice = dynamic(() => import('../components/layouts/Home/FeedbackSlice'));
const PromotionFooterSlice = dynamic(
  () => import('../components/layouts/Home/PromotionFooterSlice'),
);

export default function AboutPage() {
  return (
    <>
      <WebHeader />
      <PageLayout>
        <AboutLandingSlice />
        <FeedbackSlice isTitleShow={false} isShadowShow={false} />
        <TutorPlaceSlice />
        <StatsCounterSlice />
        <PromotionSlice />
        <FeedbackSlice isTitleShow={false} isShadowShow={false} />
        <PromotionFooterSlice />
      </PageLayout>
    </>
  );
}
