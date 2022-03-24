import React from 'react';
import { VariantProps } from '../../../types/common';
import ImageComponent from '../../ui/Image';
import PromotionSection from '../../ui/PromotionSection';

export default function MeetTheTeamSlice({ isSecondVariant }: VariantProps): JSX.Element {
  return (
    <div className="relative grid grid-cols-1 lg:py-24 py-8 md:py-28 md:px-10 lg:px-10">
      <div className="hidden md:block md:absolute md:right-0">
        <ImageComponent src="/png/dark-green-shadow.png" alt="light-green-shadow" />
      </div>
      {!isSecondVariant && (
        <div className="hidden md:block md:absolute md:top-2/4 md:right-1/3">
          <ImageComponent src="/png/yellow-shadow.png" alt="light-green-shadow" />
        </div>
      )}
      <PromotionSection
        buttonText="About Us"
        imagePosition="right"
        promotionImage={{ src: '/png/promotion-image-three.png', alt: 'promotion-photo' }}
        subTitle="meet the team"
        title={
          isSecondVariant
            ? 'Learn online with experienced professionals'
            : 'Learn online with experienced instructors'
        }
        content={
          isSecondVariant
            ? 'Our instructors come with core experience in software engineering and teaching.'
            : 'Manish Poduval is a core software engineer with experience in working for companies like Toppr.com, Mediaocean and Persistent.'
        }
        bgColor="bg-transparant"
        buttonBgColor="bg-gradient-to-r from-lightGreen to-caribbeanGreen font-semibold"
        borderRadius="rounded-lg"
        isUserCollection={true}
        isButtonShow={true}
        isSecondVariant={isSecondVariant}
        titleTextClass="text-titleBlack"
        subTitleTextClass="text-easternBlue"
      />
    </div>
  );
}
