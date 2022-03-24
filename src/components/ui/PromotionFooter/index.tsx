import React from 'react';

import AnimatedSlideInContainer from '../AnimatedSlideInContainer';
import { ImageType } from '../../../types/common';
import Image from '../Image';
import Button from '../Button';
import clsx from 'clsx';
import ImageComponent from '../Image';

export type ImageRatio = '1/2' | '1/3' | '2/3';
export type ImagePosition = 'left' | 'right';

export interface PromotionFooterProps {
  buttonText: string;
  imagePosition: ImagePosition;
  imageRatio?: ImageRatio;
  promotionImage: ImageType;
  rootClassName?: string;
  title: string;
  bgColor: string;
  buttonBgColor: string;
  type?: 'button' | 'submit';
  buttonIcon?: React.ReactElement;
  titleTextClass: string;
  borderRadius: string;
  isCourseV2?: boolean;
  isSecondVariant?: boolean;
}

export default function PromotionFooter({
  imagePosition,
  imageRatio = '1/2',
  promotionImage,
  rootClassName = '',
  title,
  buttonText,
  bgColor,
  buttonBgColor,
  buttonIcon,
  titleTextClass,
  borderRadius,
  isCourseV2,
  isSecondVariant,
}: PromotionFooterProps) {
  const position = imagePosition === 'left' ? 'flex-row' : 'flex-row-reverse';

  return (
    <div
      className={clsx(
        'w-full h-auto md:flex justify-center items-center px-10 py-4 z-10',
        position,
        rootClassName,
        bgColor,
        borderRadius,
      )}
    >
      {!isCourseV2 && (
        <div
          className={clsx(
            !isSecondVariant ? 'hidden' : 'hidden md:block md:absolute md:right-0 md:-top-32',
          )}
        >
          <ImageComponent src="/png/eastern-blue-shadow.png" alt="eastern-blue-shadow" />
        </div>
      )}
      <div className={`flex-none md:w-${imageRatio}`}>
        <AnimatedSlideInContainer>
          <Image src={promotionImage.src} alt={promotionImage.alt} className="m-auto" />
        </AnimatedSlideInContainer>
      </div>
      <div className="relative flex-auto flex flex-col justify-center  items-center md:px-12">
        <div className="box-content w-full flex flex-col justify-center items-center ">
          <div className="sm:mt-0 mb-8 break-words">
            <div
              className={clsx(
                'w-60 text-lg md:text-xl xl:text-2xl text-center font-medium not-italic leading-8 tracking-wider break-words',
                titleTextClass,
              )}
            >
              {title}
            </div>
          </div>
          <Button className={buttonBgColor} size="medium">
            <div className="flex justify-center items-center mx-14 lg:mx-0 md:mx-0">
              {buttonIcon && <span className="mr-2">{buttonIcon}</span>}
              <div>{buttonText}</div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
