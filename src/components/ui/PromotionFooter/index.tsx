import React from 'react';
import Button from '../Button';
import AnimatedSlideInContainer from '../AnimatedSlideInContainer';
import { routes } from '../../../routes';
import { ImageType } from '../../../types/common';
import Image from '../Image';

export type ImageRatio = '1/2' | '1/3' | '2/3';
export type ImagePosition = 'left' | 'right';

export interface PromotionFooterProps {
  buttonText: string;
  children?: React.ReactElement[] | React.ReactElement;
  ctaTarget?: string;
  imagePosition: ImagePosition;
  imageRatio?: ImageRatio;
  promotionImage: ImageType;
  rootClassName?: string;
  title: string;
}

export default function PromotionFooter({
  buttonText,
  children,
  imagePosition,
  imageRatio = '1/3',
  promotionImage,
  rootClassName = '',
  title,
}: PromotionFooterProps) {
  const position = imagePosition === 'left' ? 'flex-row' : 'flex-row-reverse';

  return (
    <div className={`md:flex ${position} ${rootClassName} bg-gray-100`}>
      <div className={`flex-none md:w-${imageRatio}`}>
        <AnimatedSlideInContainer>
          <Image
            src={promotionImage.src}
            alt={promotionImage.alt}
            className="m-auto"
          />
        </AnimatedSlideInContainer>
      </div>
      <div className="flex-auto flex flex-col justify-center px-12">
        <div className="box-content w-full">
          <div className="sm:mt-0 mb-8 break-words">
            <div className="text-lg md:text-xl xl:text-2xl text-center font-semibold not-italic leading-8 tracking-wider text-royalBlue md:break-all">
              {title}
            </div>
          </div>
          <Button
            className="table mx-auto border border-royalBlue font-bold"
            size="medium"
          >
            <a href={routes.contact} className="relative z-10">
              {buttonText}
            </a>
          </Button>
          {children}
        </div>
      </div>
    </div>
  );
}
