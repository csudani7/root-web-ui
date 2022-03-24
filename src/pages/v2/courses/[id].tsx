import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const WebHeader = dynamic(() => import('../../../components/ui/WebHeader'));
const PageLayout = dynamic(() => import('../../../components/layouts'));
const CourseLandingSlice = dynamic(
  () => import('../../../components/layouts/Courses/CourseLandingSlice'),
);
const CourseImportanceSlice = dynamic(
  () => import('../../../components/layouts/v2/Courses/CourseImportanceSlice'),
);
const SidebarTabsSlice = dynamic(
  () => import('../../../components/layouts/Courses/SidebarTabsSlice'),
);
const PromotionSlice = dynamic(() => import('../../../components/layouts/Home/PromotionSlice'));
const LiveCohortsSlice = dynamic(() => import('../../../components/layouts/Home/LiveCohortsSlice'));
const CoursesCardSlice = dynamic(() => import('../../../components/layouts/Home/CoursesCardSlice'));
const PromotionFooterSlice = dynamic(
  () => import('../../../components/layouts/Home/PromotionFooterSlice'),
);

export default function CoursePage() {
  const router = useRouter();
  const { id }: any = router.query;
  const isSecondVariant = router.pathname.includes('/v2/courses');
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
        <CourseImportanceSlice isSecondVariant={isSecondVariant} />
        <SidebarTabsSlice
          selectedCourse={id}
          isSecondVariant={isSecondVariant}
          isCourseV2={isSecondVariant}
          arrayOfTab={arrayOfTab}
        />
        <PromotionSlice isSecondVariant={isSecondVariant} />
        <LiveCohortsSlice isSecondVariant={isSecondVariant} />
        <CoursesCardSlice isSecondVariant={isSecondVariant} />
        <PromotionFooterSlice isSecondVariant={isSecondVariant} />
      </PageLayout>
    </>
  );
}
