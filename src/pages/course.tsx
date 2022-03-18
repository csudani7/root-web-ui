import React from 'react';
import dynamic from 'next/dynamic';

const WebHeader = dynamic(() => import('../components/ui/WebHeader'));
const PageLayout = dynamic(() => import('../components/layouts'));
const PromotionFooterSlice = dynamic(
  () => import('../components/layouts/Home/PromotionFooterSlice'),
);

export default function CoursePage() {
  return (
    <>
      <WebHeader />
      <PageLayout>
        <PromotionFooterSlice />
      </PageLayout>
    </>
  );
}
