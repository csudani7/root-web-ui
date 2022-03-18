import React from 'react';
import { SlackIcon } from '../../ui/Icon';
import PromotionFooter from '../../ui/PromotionFooter';

export default function PromotionFooterSlice() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid md:grid-cols-1 md:gap-5 lg:grid lg:grid-cols-2 lg:gap-5">
      <div>
        <PromotionFooter
          buttonText="View Courses"
          imagePosition="left"
          promotionImage={{ src: '/svg/promotion-image-one.svg', alt: 'promotion-photo' }}
          title="Interested in joining the next cohort?"
          bgColor="bg-gradient-to-r from-lightGreen via-mediumSpringGreen to-aquamarine"
          buttonBgColor="bg-gradient-to-r from-lightGreen to-caribbeanGreen"
          titleTextClass="text-black"
          buttonHeight="h-16"
          buttonWidth="w-60"
          borderRadius="rounded-lg"
        />
      </div>
      <div>
        <PromotionFooter
          buttonText="Join"
          imagePosition="left"
          promotionImage={{ src: '/svg/promotion-image-two.svg', alt: 'promotion-photo' }}
          title="Join our Slack community"
          bgColor="bg-black"
          buttonBgColor="bg-white"
          buttonIcon={<SlackIcon />}
          buttonWidth="w-40"
          buttonHeight="h-16"
          titleTextClass="text-white"
          borderRadius="rounded-lg"
        />
      </div>
    </div>
  );
}
