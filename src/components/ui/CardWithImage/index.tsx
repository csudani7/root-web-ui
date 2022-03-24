import React from 'react';
import clsx from 'clsx';
import Button from '../Button';
import { ImageType } from '../../../types/common';
import Image from '../Image';

export interface CardWithImageProps {
  cardImage: ImageType;
  cardTitle: string;
  cardDescription: string;
  cardSubTitle: string;
  isSecondVariant: boolean;
  isCourseV2?: boolean;
}

export default function CardWithImage({
  cardImage,
  cardTitle,
  cardDescription,
  cardSubTitle,
  isSecondVariant,
  isCourseV2,
}: CardWithImageProps) {
  return (
    <div
      className={clsx(
        'bg-white w-full items-center md:py-0',
        isSecondVariant && 'rounded-2xl shadow-black shadow-xl',
      )}
    >
      <div>
        <Image
          src={isSecondVariant ? '/png/course-image-1.png' : cardImage.src}
          alt={cardImage.alt}
          className="w-full h-full"
        />
      </div>
      <div
        className={clsx(
          'font-inter text-base text-easternBlue font-semibold uppercase pt-9 pb-4 text-centerleft',
          isSecondVariant && 'px-8',
        )}
      >
        {cardSubTitle}
      </div>
      <div className={clsx(isSecondVariant ? 'p-8 lg:p-8 md:p-0' : 'py-8 lg:p-0 md:p-0')}>
        <div
          className={clsx(
            'pb-4 font-sora font-normal text-2xl md:text-3xl text-titleBlack',
            isSecondVariant && '',
          )}
        >
          {cardTitle}
        </div>
        <p className={clsx('text-base pb-6 text-titleBlack', isSecondVariant && '')}>
          {cardDescription}
        </p>
        <div className={clsx(isSecondVariant && 'grid grid-cols-1 lg:mx-11 pb-4 lg:pb-16')}>
          <Button
            className={clsx(
              isSecondVariant && 'bg-gradient-to-r from-lightGreen to-caribbeanGreen',
              isCourseV2 && 'bg-gradient-to-r from-aqua to-dodgerBlue',
              'bg-transparant border border-lightGreen',
            )}
            size="medium"
          >
            <div className="flex justify-center items-center">
              {isSecondVariant ? 'Learn More' : 'View Course'}
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
