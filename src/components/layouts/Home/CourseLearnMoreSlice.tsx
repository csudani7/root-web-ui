import React from 'react';
import PromotionSection from '../../ui/PromotionSection';

export default function CourseLearnMoreSlice() {
  return (
    <div className="grid grid-cols-1 py-12 md:py-40 px-6 md:px-10 lg:px-10">
      <PromotionSection
        buttonText="Learn More"
        imagePosition="right"
        promotionImage={{ src: '/png/course-photo.png', alt: 'course-photo' }}
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
