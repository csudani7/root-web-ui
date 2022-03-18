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
}

export default function CardWithImage({
  cardImage,
  cardTitle,
  cardDescription,
  cardSubTitle,
}: CardWithImageProps) {
  return (
    <div className={clsx('bg-white w-full items-center px-0 py-4 md:px-4 md:py-4')}>
      <div>
        <Image src={cardImage.src} alt={cardImage.alt} className="w-full h-full" />
      </div>
      <div className="font-inter text-base text-easternBlue font-semibold uppercase pt-9 pb-4 text-centerleft">
        {cardSubTitle}
      </div>
      <div>
        <div className="pb-4 font-sora font-normal text-2xl md:text-3xl text-titleBlack">{cardTitle}</div>
        <p className="text-base pb-6 text-titleBlack">{cardDescription}</p>
        <Button className="bg-transparant border border-lightGreen" size="medium">
          <div className="flex justify-center items-center">View Course</div>
        </Button>
      </div>
    </div>
  );
}
