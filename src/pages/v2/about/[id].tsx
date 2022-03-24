import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const WebHeader = dynamic(() => import('../../../components/ui/WebHeader'));
const PageLayout = dynamic(() => import('../../../components/layouts'));
const AboutLandingSlice = dynamic(
  () => import('../../../components/layouts/About/AboutLandingSlice'),
);
const TutorPlaceSlice = dynamic(() => import('../../../components/layouts/About/TutorPlaceSlice'));
const StatsCounterSlice = dynamic(
  () => import('../../../components/layouts/About/StatsCounterSlice'),
);
const PromotionSlice = dynamic(() => import('../../../components/layouts/Home/PromotionSlice'));
const FeedbackSlice = dynamic(() => import('../../../components/layouts/Home/FeedbackSlice'));
const PromotionFooterSlice = dynamic(
  () => import('../../../components/layouts/Home/PromotionFooterSlice'),
);
const SidebarTabsSlice = dynamic(
  () => import('../../../components/layouts/Courses/SidebarTabsSlice'),
);

export default function AboutPage() {
  const router = useRouter();
  const { id }: any = router.query;
  const isSecondVariant = router.pathname.includes('/v2');
  const arrayOfTab = [
    { label: 'Why we started', value: 'overview' },
    { label: 'Bootcamp experiences', value: 'curriculum' },
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
        <AboutLandingSlice currentUser={id} isSecondVariant={isSecondVariant} />
        <SidebarTabsSlice
          selectedCourse={id}
          isSecondVariant={isSecondVariant}
          arrayOfTab={arrayOfTab}
        />
        <TutorPlaceSlice isSecondVariant={isSecondVariant} />
        <StatsCounterSlice isSecondVariant={isSecondVariant} />
        <PromotionSlice isSecondVariant={isSecondVariant} />
        <FeedbackSlice
          isTitleShow={true}
          isShadowShow={false}
          isSecondVariant={isSecondVariant}
          isReadMore={false}
        />
        <PromotionFooterSlice isSecondVariant={isSecondVariant} />
      </PageLayout>
    </>
  );
}
