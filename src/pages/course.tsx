import React from 'react';
import dynamic from 'next/dynamic';

const WebHeader = dynamic(() => import('../components/ui/WebHeader'));
const PageLayout = dynamic(() => import('../components/layouts'));
const CourseLandingSlice = dynamic(
  () => import('../components/layouts/Courses/CourseLandingSlice'),
);
const SidebarTabsSlice = dynamic(() => import('../components/layouts/Courses/SidebarTabsSlice'));
const PromotionFooterSlice = dynamic(
  () => import('../components/layouts/Home/PromotionFooterSlice'),
);

export default function CoursePage() {
  return (
    <>
      <WebHeader />
      <PageLayout>
        <CourseLandingSlice />
        <SidebarTabsSlice />
        <PromotionFooterSlice />
      </PageLayout>
    </>
  );
}
