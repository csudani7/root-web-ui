import React from 'react';
import dynamic from 'next/dynamic';

const WebHeader = dynamic(() => import('../components/ui/WebHeader'));
const PageLayout = dynamic(() => import('../components/layouts'));
const CoursesCardSlice = dynamic(() => import('../components/layouts/Home/CoursesCardSlice'));
const MeetOtherSlice = dynamic(() => import('../components/layouts/Home/MeetOtherSlice'));
const MeetTheTeamSlice = dynamic(() => import('../components/layouts/Home/MeetTheTeamSlice'));
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
        <CoursesCardSlice />
        <MeetOtherSlice />
        <MeetTheTeamSlice />
        <PromotionSlice />
        <FeedbackSlice />
        <PromotionFooterSlice />
      </PageLayout>
    </>
  );
}

export default HomePage;
