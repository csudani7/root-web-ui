import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const WebHeader = dynamic(() => import('../../components/ui/WebHeader'));
const PageLayout = dynamic(() => import('../../components/layouts'));
const CourseLandingSlice = dynamic(
  () => import('../../components/layouts/Courses/CourseLandingSlice'),
);
const SidebarTabsSlice = dynamic(() => import('../../components/layouts/Courses/SidebarTabsSlice'));
const PromotionFooterSlice = dynamic(
  () => import('../../components/layouts/Home/PromotionFooterSlice'),
);

export default function CoursePage() {
  const router = useRouter();
  const { id }: any = router.query;
  const isSecondVariant = router.pathname.includes('/v2');
  const arrayOfTab = [
    { label: 'Overview', value: 'overview' },
    { label: 'Curriculum', value: 'curriculum' },
    { label: 'Schedule', value: 'schedule' },
    { label: 'Teacher', value: 'teacher' },
    { label: 'Alumni', value: 'alumni' },
    { label: 'Pricing', value: 'pricing' },
    { label: 'Next Cohort', value: 'next-cohort' },
    { label: 'FAQ', value: 'faq' },
  ];

  return (
    <>
      <WebHeader />
      <PageLayout>
        <CourseLandingSlice selectedCourse={id} isCourseV2={isSecondVariant} />
        <SidebarTabsSlice
          selectedCourse={id}
          isSecondVariant={isSecondVariant}
          arrayOfTab={arrayOfTab}
        />
        <PromotionFooterSlice isSecondVariant={isSecondVariant} />
      </PageLayout>
    </>
  );
}
