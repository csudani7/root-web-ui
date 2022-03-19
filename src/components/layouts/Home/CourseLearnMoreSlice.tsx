import React from 'react';
import ImageComponent from '../../ui/Image';
import PromotionSection from '../../ui/PromotionSection';

export default function CourseLearnMoreSlice() {
  return (
    <div className="relative grid grid-cols-1 py-12 md:py-40 px-6 md:px-10 lg:px-10">
      <div className="hidden md:block md:absolute md:top-1/3 md:right-1/3">
        <ImageComponent src="/png/full-dark-green-shadow.png" alt="light-green-shadow" />
      </div>
      <PromotionSection
        buttonText="Learn More"
        imagePosition="right"
        promotionImage={{ src: '/png/hero-banner.png', alt: 'course-photo' }}
        subTitle="learn typescript in typescript"
        title="Build on your existing Javascript knowledge"
        content="This is an intermediate-level cohort-based course aimed at providing an exclusive and crisp learning experience to already proficient JavaScript developers. You will be:"
        bgColor="bg-transparant"
        buttonBgColor="bg-gradient-to-r from-lightGreen via-mediumSpringGreen to-aquamarine font-semibold"
        borderRadius="rounded-lg"
        listOfFeature={[
          { text: '📈 Getting to an intermediate level of TypeScript' },
          { text: '💻 Practicing with examples and activities' },
          { text: '📅 Attending live sessions on Zoom' },
          { text: '👥 Connecting with like-minded learners' },
        ]}
      />
    </div>
  );
}
