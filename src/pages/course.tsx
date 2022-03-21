import React from 'react';
import dynamic from 'next/dynamic';

const WebHeader = dynamic(() => import('../components/ui/WebHeader'));
const PageLayout = dynamic(() => import('../components/layouts'));
const CourseLandingSlice = dynamic(
  () => import('../components/layouts/Courses/CourseLandingSlice'),
);
const PromotionFooterSlice = dynamic(
  () => import('../components/layouts/Home/PromotionFooterSlice'),
);

export default function CoursePage() {
  return (
    <>
      <WebHeader />
      <PageLayout>
        <CourseLandingSlice />
        <PromotionFooterSlice />
      </PageLayout>
    </>
  );
}
