import React from 'react';
import { heroBanneImagesData } from '../../../../utils';

export default function HeroBannerImagesSection() {
  return (
    <div className="grid grid-cols-4 grid-rows-4">
      {heroBanneImagesData.map((data, index) => (
        <img key={index} src={data.src} alt={data.alt} className="animate-heroBanneAnimation" />
      ))}
    </div>
  );
}
