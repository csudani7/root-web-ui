import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';

import { VariantProps } from '../../../types/common';
import { SlackIcon } from '../../ui/Icon';
import Image from '../../ui/Image';
import PromotionFooter from '../../ui/PromotionFooter';

export default function PromotionFooterSlice({ isSecondVariant }: VariantProps) {
  const isCourseV2 = useRouter().pathname.includes('v2/course');
  return (
    <div className={clsx(isCourseV2 && 'bg-titleBlack pt-24', 'relative')}>
      {!isCourseV2 && (
        <div
          className={clsx(
            isSecondVariant ? 'hidden' : 'hidden md:block md:absolute md:right-0 md:-top-40',
          )}
        >
          <Image src="/png/eastern-blue-shadow.png" alt="eastern-blue-shadow" />
        </div>
      )}
      <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4 px-6 md:px-10 lg:px-10">
        <PromotionFooter
          buttonText="View Courses"
          imagePosition="left"
          promotionImage={{ src: '/svg/promotion-image-one.svg', alt: 'promotion-photo' }}
          title="Interested in joining the next cohort?"
          bgColor={clsx(
            isCourseV2
              ? 'bg-gradient-to-r from-aqua to-dodgerBlue'
              : 'bg-gradient-to-r from-lightGreen via-mediumSpringGreen to-aquamarine',
          )}
          buttonBgColor={'bg-gradient-to-r from-lightGreen to-caribbeanGreen'}
          titleTextClass="text-black"
          borderRadius="rounded-lg"
          isCourseV2={isCourseV2}
        />
        <PromotionFooter
          buttonText="Join"
          imagePosition="left"
          promotionImage={{ src: '/svg/promotion-image-two.svg', alt: 'promotion-photo' }}
          title="Join our Slack community"
          bgColor={clsx(
            isCourseV2 ? 'bg-gradient-to-r from-lightGreen to-caribbeanGreen' : 'bg-titleBlack',
          )}
          buttonBgColor="bg-white"
          buttonIcon={<SlackIcon />}
          titleTextClass={isCourseV2 ? 'text-black' : 'text-white'}
          borderRadius="rounded-lg"
          isCourseV2={isCourseV2}
        />
      </div>
    </div>
  );
}
