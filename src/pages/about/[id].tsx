import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const WebHeader = dynamic(() => import('../../components/ui/WebHeader'));
const PageLayout = dynamic(() => import('../../components/layouts'));
const AboutLandingSlice = dynamic(() => import('../../components/layouts/About/AboutLandingSlice'));
const TutorPlaceSlice = dynamic(() => import('../../components/layouts/About/TutorPlaceSlice'));
const StatsCounterSlice = dynamic(() => import('../../components/layouts/About/StatsCounterSlice'));
const PromotionSlice = dynamic(() => import('../../components/layouts/Home/PromotionSlice'));
const FeedbackSlice = dynamic(() => import('../../components/layouts/Home/FeedbackSlice'));
const PromotionFooterSlice = dynamic(
  () => import('../../components/layouts/Home/PromotionFooterSlice'),
);

export default function AboutPage() {
  const router = useRouter();
  const { id }: any = router.query;
  const isSecondVariant = router.pathname.includes('/v2');
  return (
    <>
      <WebHeader />
      <PageLayout>
        <AboutLandingSlice currentUser={id} isSecondVariant={isSecondVariant} />
        <FeedbackSlice isTitleShow={false} isShadowShow={false} isSecondVariant={isSecondVariant} />
        <TutorPlaceSlice isSecondVariant={isSecondVariant} />
        <StatsCounterSlice isSecondVariant={isSecondVariant} />
        <PromotionSlice isSecondVariant={isSecondVariant} />
        <FeedbackSlice isTitleShow={false} isShadowShow={false} isSecondVariant={isSecondVariant} />
        <PromotionFooterSlice isSecondVariant={isSecondVariant} />
      </PageLayout>
    </>
  );
}
