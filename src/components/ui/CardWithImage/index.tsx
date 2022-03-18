import React from 'react';
import clsx from 'clsx';
import Button from '../Button';
import { ImageType } from '../../../types/common';
import Image from '../Image';

export interface CardWithImageProps {
  cardImage: ImageType;
  cardTitle: string;
  cardDescription: string;
  cardLink: string;
}

export default function CardWithImage({
  cardImage,
  cardTitle,
  cardDescription,
  cardLink,
}: CardWithImageProps) {
  const [isHover, setHover] = React.useState(false);
  return (
    <div
      className={clsx(
        'w-full items-center relative grid grid-cols-1 md:p-4 md:grid md:grid-cols-1 lg:grid lg:grid-cols-2',
        isHover ? 'bg-aliceBlue' : 'bg-gray-100',
      )}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div className="p-8">
        <Image src={cardImage.src} alt={cardImage.alt} className="w-full h-full" />
      </div>
      <div className="p-8">
        <div className="pb-7 font-bold text-2xl text-center lg:text-left text-royalBlue">
          {cardTitle}
        </div>
        <p className="text-xl pb-6 break-words text-black">{cardDescription}</p>
        <div className="flex items-center justify-center">
          <Button className="border border-royalBlue font-medium" size="medium">
            <a href={cardLink} className="relative z-10">
              View in details
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
