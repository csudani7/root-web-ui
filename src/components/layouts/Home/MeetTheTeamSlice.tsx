import React from 'react';
import PromotionSection from '../../ui/PromotionSection';

export default function MeetTheTeamSlice() {
  return (
    <div className="grid grid-cols-1 py-32 md:py-40 px-6 md:px-10 lg:px-10">
      <PromotionSection
        buttonText="About Us"
        imagePosition="right"
        promotionImage={{ src: '/png/promotion-image-three.png', alt: 'promotion-photo' }}
        subTitle="meet the team"
        title="Learn online with experienced instructors"
        content="Manish Poduval is a core software engineer with experience in working for companies like Toppr.com, Mediaocean and Persistent."
        bgColor="bg-transparant"
        buttonBgColor="bg-gradient-to-r from-lightGreen via-mediumSpringGreen to-aquamarine font-semibold"
        borderRadius="rounded-lg"
      />
    </div>
  );
}
