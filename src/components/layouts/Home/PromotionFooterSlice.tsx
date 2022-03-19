import React from 'react';
import { SlackIcon } from '../../ui/Icon';
import Image from '../../ui/Image';
import PromotionFooter from '../../ui/PromotionFooter';

export default function PromotionFooterSlice() {
  return (
    <div className="relative">
      <div className="hidden md:block md:absolute md:right-0 md:-top-40">
        <Image src="/png/eastern-blue-shadow.png" alt="eastern-blue-shadow" />
      </div>
      <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4 px-6 md:px-10 lg:px-10">
        <PromotionFooter
          buttonText="View Courses"
          imagePosition="left"
          promotionImage={{ src: '/svg/promotion-image-one.svg', alt: 'promotion-photo' }}
          title="Interested in joining the next cohort?"
          bgColor="bg-gradient-to-r from-lightGreen via-mediumSpringGreen to-aquamarine"
          buttonBgColor="bg-gradient-to-r from-lightGreen to-caribbeanGreen"
          titleTextClass="text-black"
          borderRadius="rounded-lg"
        />
        <PromotionFooter
          buttonText="Join"
          imagePosition="left"
          promotionImage={{ src: '/svg/promotion-image-two.svg', alt: 'promotion-photo' }}
          title="Join our Slack community"
          bgColor="bg-black"
          buttonBgColor="bg-white"
          buttonIcon={<SlackIcon />}
          titleTextClass="text-white"
          borderRadius="rounded-lg"
          rootClassName="z-10 md:shadow-easternBlueShadow"
        />
      </div>
    </div>
  );
}
