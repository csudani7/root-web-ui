import React from 'react';

import AnimatedSlideInContainer from '../AnimatedSlideInContainer';
import { ImageType } from '../../../types/common';
import Image from '../Image';
import Button from '../Button';
import clsx from 'clsx';

export type ImageRatio = '1/2' | '1/3' | '2/3';
export type ImagePosition = 'left' | 'right';

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
}: PromotionSectionProps) {
  const position = imagePosition === 'left' ? 'flex-row' : 'flex-row-reverse';

  return (
    <div
      className={clsx(
        'w-full h-full flex flex-col-reverse md:flex md:flex-row items-center px-6 md:px-10 py-4',
        position,
        rootClassName,
        bgColor,
        borderRadius,
      )}
    >
      <div className={`flex-none md:w-${imageRatio} pt-7 md:pt-0`}>
        <AnimatedSlideInContainer>
          <Image src={promotionImage.src} alt={promotionImage.alt} className="m-auto" />
        </AnimatedSlideInContainer>
      </div>
      <div className="flex-auto flex flex-col items-center md:items-start px-0 md:px-12">
        <div className="w-full flex flex-col justify-start items-start">
          <div className="text-easternBlue uppercase text-base font-semibold tracking-wide font-inter pb-6">
            {subTitle}
          </div>
          <div className="font-sora text-3xl md:text-4xl text-left md:text-center font-semibold text-titleBlack leading-8 tracking-wider">
            {title}
          </div>
          <div className="font-inter text-titleBlack text-base font-medium pt-6 pb-12 md:pb-16">
            {content}
          </div>
        </div>
          <Button className={buttonBgColor} size="medium">
            <div className="flex justify-center items-center">
              {buttonIcon && <span className="mr-2">{buttonIcon}</span>}
              {buttonText}
            </div>
          </Button>
      </div>
    </div>
  );
}
