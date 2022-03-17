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
  width?: string;
  height?: string;
  titleTextClass: string;
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
  type,
  buttonWidth,
  buttonHeight,
  buttonIcon,
  width = '',
  height = 'h-72',
  titleTextClass,
}: PromotionFooterProps) {
  const position = imagePosition === 'left' ? 'flex-row' : 'flex-row-reverse';

  return (
    <div
      className={`md:flex ${position} ${rootClassName} ${bgColor} ${width} ${height} justify-center items-center`}
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
              className={`w-60 text-lg md:text-xl xl:text-2xl text-center font-medium not-italic leading-8 tracking-wider ${titleTextClass} break-words`}
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
            <a href={''} className="relative z-10">
              <div className="flex justify-center items-center">
                {buttonIcon && buttonIcon}
                <div className={clsx(buttonIcon && `ml-2`, 'text-xl font-semibold')}>
                  {buttonText}
                </div>
              </div>
            </a>
          </Button>
          {children}
        </div>
      </div>
    </div>
  );
}
