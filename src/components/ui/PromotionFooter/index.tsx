import React from 'react';

import AnimatedSlideInContainer from '../AnimatedSlideInContainer';
import { ImageType } from '../../../types/common';
import Image from '../Image';
import Button from '../Button';
import clsx from 'clsx';

export type ImageRatio = '1/2' | '1/3' | '2/3';
export type ImagePosition = 'left' | 'right';

export interface PromotionFooterProps {
  buttonText: string;
  children?: React.ReactElement[] | React.ReactElement;
  imagePosition: ImagePosition;
  imageRatio?: ImageRatio;
  promotionImage: ImageType;
  rootClassName?: string;
  title: string;
  bgColor: string;
  buttonBgColor: string;
  outlineColor?: string;
  variant?: 'fill' | 'outline';
  type?: 'button' | 'submit';
  buttonWidth?: string;
  buttonHeight?: string;
  buttonIcon?: React.ReactElement;
  titleTextClass: string;
  borderRadius: string;
}

export default function PromotionFooter({
  children,
  imagePosition,
  imageRatio = '1/2',
  promotionImage,
  rootClassName = '',
  title,
  buttonText,
  bgColor,
  buttonBgColor,
  outlineColor,
  variant,
  buttonWidth,
  buttonHeight,
  buttonIcon,
  titleTextClass,
  borderRadius,
}: PromotionFooterProps) {
  const position = imagePosition === 'left' ? 'flex-row' : 'flex-row-reverse';

  return (
    <div
      className={clsx(
        'w-full h-full md:flex justify-center items-center px-10 py-4',
        position,
        rootClassName,
        bgColor,
        borderRadius,
      )}
    >
      <div className={`flex-none md:w-${imageRatio}`}>
        <AnimatedSlideInContainer>
          <Image src={promotionImage.src} alt={promotionImage.alt} className="m-auto" />
        </AnimatedSlideInContainer>
      </div>
      <div className="flex-auto flex flex-col justify-center  items-center px-12">
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
          <Button
            bgColor={buttonBgColor}
            variant={variant}
            outlineColor={outlineColor}
            width={buttonWidth}
            height={buttonHeight}
          >
            <div className="flex justify-center items-center">
              {buttonIcon && buttonIcon}
              <div className={clsx(buttonIcon && `ml-2`, 'text-xl font-semibold')}>
                {buttonText}
              </div>
            </div>
          </Button>
          {children}
        </div>
      </div>
    </div>
  );
}
