import React from 'react';
import { VariantProps } from '../../../../types/common';
import { heroBanneImagesData } from '../../../../utils';

export default function HeroBannerImagesSection({ isSecondVariant }: VariantProps) {
  return (
    <div className="grid grid-cols-4 grid-rows-4">
      {heroBanneImagesData.map((data, index) => (
        <img key={index} src={data.src} alt={data.alt} className="animate-heroBanneAnimation" />
      ))}
    </div>
  );
}
