import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const WebHeader = dynamic(() => import('../../components/ui/WebHeader'));
const PageLayout = dynamic(() => import('../../components/layouts'));
const HeroBannerSlice = dynamic(() => import('../../components/layouts/Home/HeroBannerSlice'));
const TutorPlaceSlice = dynamic(() => import('../../components/layouts/About/TutorPlaceSlice'));
const CoursesCardSlice = dynamic(() => import('../../components/layouts/Home/CoursesCardSlice'));
const PromotionSectionSlice = dynamic(
  () => import('../../components/layouts/v2/Home/PromotionSectionSlice'),
);
const LiveCohortsSlice = dynamic(() => import('../../components/layouts/Home/LiveCohortsSlice'));
const MeetOtherSliceV2 = dynamic(() => import('../../components/layouts/v2/Home/MeetOtherSliceV2'));
const MeetTheTeamSlice = dynamic(() => import('../../components/layouts/Home/MeetTheTeamSlice'));
const PromotionSlice = dynamic(() => import('../../components/layouts/Home/PromotionSlice'));
const FeedbackSlice = dynamic(() => import('../../components/layouts/Home/FeedbackSlice'));
const PromotionFooterSlice = dynamic(
  () => import('../../components/layouts/Home/PromotionFooterSlice'),
);

function HomeVariant() {
  const isSecondVariant = useRouter().pathname.includes('/v2');

  return (
    <>
      <WebHeader />
      <PageLayout>
        <HeroBannerSlice isSecondVariant={isSecondVariant} />
        <TutorPlaceSlice isSecondVariant={isSecondVariant} />
        <CoursesCardSlice isSecondVariant={isSecondVariant} />
        <PromotionSectionSlice isSecondVariant={isSecondVariant} />
        <LiveCohortsSlice isSecondVariant={isSecondVariant} />
        <MeetTheTeamSlice isSecondVariant={isSecondVariant} />
        <MeetOtherSliceV2 isSecondVariant={isSecondVariant} />
        <PromotionSlice isSecondVariant={isSecondVariant} />
        <FeedbackSlice isSecondVariant={isSecondVariant} isReadMore={true} />
        <PromotionFooterSlice isSecondVariant={isSecondVariant} />
      </PageLayout>
    </>
  );
}

export default HomeVariant;
