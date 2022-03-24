import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';

import { VariantProps } from '../../../types/common';
import PromotionSection from '../../ui/PromotionSection';

export default function PromotionSlice({ isSecondVariant }: VariantProps) {
  const isCourseV2 = useRouter().pathname.includes('v2/course');
  return (
    <div
      className={clsx(
        isCourseV2 && 'bg-titleBlack pb-32',
        'grid grid-cols-1 px-6 md:px-10 lg:px-10',
      )}
    >
      <PromotionSection
        buttonText={isSecondVariant ? 'Visit virtual office' : 'FAQ'}
        imagePosition="left"
        promotionImage={{
          src: isSecondVariant ? '/svg/promotion-image-four.svg' : '/png/promotion-image-three.png',
          alt: 'promotion-photo',
        }}
        subTitle={isSecondVariant ? 'Contact us' : 'pricing'}
        title={isSecondVariant ? 'Have Queries ?' : 'Wait...this is all free?!'}
        content={
          isSecondVariant
            ? 'We’re always available on our virtual office in Gather. Drop in and meet us live'
            : 'Thats right - zero, nil, nothing, nada! We believe in quality education and making education accessible everywhere 🌎  at low costs.'
        }
        bgColor={
          isCourseV2
            ? 'bg-gradient-to-r from-aqua to-dodgerBlue'
            : isSecondVariant
            ? ' bg-gradient-to-r from-secondaryLightGreen via-mediumSpring02Green to-aquamarine'
            : 'bg-gradient-to-r from-primaryLightGreen to-caribbean03Green'
        }
        buttonBgColor={isSecondVariant ? 'bg-titleBlack' : 'bg-transparant border border-black'}
        borderRadius="rounded-lg"
        isButtonShow={true}
        buttonTextColor={isSecondVariant ? 'text-white' : 'text-black'}
        isSecondVariant={isSecondVariant}
        titleTextClass="text-titleBlack"
        subTitleTextClass={isSecondVariant ? 'text-titleBlack' : 'text-easternBlue'}
      />
    </div>
  );
}
