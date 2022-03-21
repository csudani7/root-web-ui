import React from 'react';

import AnimatedSlideInContainer from '../AnimatedSlideInContainer';
import { ImageType } from '../../../types/common';
import Image from '../Image';
import Button from '../Button';
import clsx from 'clsx';

export type ImageRatio = '1/2' | '1/3' | '2/3';
export type ImagePosition = 'left' | 'right' | 'down';

export interface PromotionSectionProps {
  buttonText: string;
  imagePosition: ImagePosition;
  imageRatio?: ImageRatio;
  promotionImage: ImageType;
  rootClassName?: string;
  title: string;
  subTitle: string;
  content: string;
  bgColor: string;
  buttonBgColor: string;
  type?: 'button' | 'submit';
  buttonIcon?: React.ReactElement;
  borderRadius: string;
  isUserCollection?: boolean;
  listOfFeature?: Array<{ text: string }>;
  isButtonShow?: boolean;
}

export default function PromotionSection({
  imagePosition,
  imageRatio = '1/2',
  promotionImage,
  rootClassName = '',
  title,
  subTitle,
  content,
  buttonText,
  bgColor,
  buttonBgColor,
  buttonIcon,
  borderRadius,
  isUserCollection = false,
  listOfFeature,
  isButtonShow = false,
}: PromotionSectionProps) {
  const position = React.useMemo(() => {
    switch (imagePosition) {
      case 'left':
        return 'flex-col flex-col-reverse md:flex-row';
      case 'down':
        return 'flex-col flex-col-reverse';
      case 'right':
        return 'flex-col flex-col-reverse md:flex-row-reverse';
      default:
        return 'flex-col flex-col-reverse';
    }
  }, [imagePosition]);

  return (
    <div
      className={clsx(
        'relative w-full h-full flex items-center py-4',
        imagePosition === 'left' ? 'px-0 md:px-10' : 'px-0 md:px-10',
        position,
        rootClassName,
        bgColor,
        borderRadius,
      )}
    >
      <div className={`flex-none md:w-${imageRatio} pt-7 md:pt-0`}>
        {isUserCollection ? (
          <AnimatedSlideInContainer>
            <div className="h-96 items-center flex flex-col justify-center relative bg-transparant pt-4 lg">
              <div className="flex items-center">
                <div className="w-fit rounded-full z-10 px-6">
                  <Image src="/png/user-profile-0.png" alt="user-profile" />
                </div>
                <div className="relative w-fit rounded-full -top-2 lg:top-0 -left-4 lg:left-6 z-10 px-6">
                  <Image src="/png/user-profile-1.png" alt="user-profile" />
                </div>
              </div>
              <div className="flex justify-center items-center relative -top-12 -left-6 lg:-top-16 lg:left-3">
                <div className="w-fit rounded-full">
                  <Image src="/png/user-profile-2.png" alt="user-profile" />
                </div>
              </div>
            </div>
          </AnimatedSlideInContainer>
        ) : (
          <AnimatedSlideInContainer>
            <Image src={promotionImage.src} alt={promotionImage.alt} className="m-auto" />
          </AnimatedSlideInContainer>
        )}
      </div>
      <div
        className={clsx(
          'flex-auto flex flex-col items-center md:items-start',
          imagePosition === 'left' ? 'px-0 md:px-12' : 'px-0 ml:px-12',
        )}
      >
        <div className="w-full flex flex-col justify-start items-start">
          <div className="text-easternBlue uppercase text-base font-semibold tracking-wide font-inter pb-6">
            {subTitle}
          </div>
          <div className="font-sora text-3xl md:text-4xl text-left font-semibold text-titleBlack leading-8 tracking-wider w-full md:w-1/2">
            {title}
          </div>
          <div className="font-inter text-titleBlack text-base font-medium pt-6">{content}</div>
          <div className="pt-6 pb-12">
            {listOfFeature &&
              listOfFeature.map((item, index) => {
                return (
                  <div key={index} className="pb-2">
                    {item.text}
                  </div>
                );
              })}
          </div>
        </div>
        {isButtonShow && (
          <Button className={buttonBgColor} size="medium">
            <div className="flex justify-center items-center">
              {buttonIcon && <span className="mr-2">{buttonIcon}</span>}
              {buttonText}
            </div>
          </Button>
        )}
      </div>
    </div>
  );
}
