import React from 'react';
import ImageComponent from '../Image';
import AnimatedSlideInContainer from '../AnimatedSlideInContainer';

interface LandingBannerProps {
  title: string;
  content: string;
  sectionImagesrc: string;
  alt?: string;
}

export default function LandingBanner({
  sectionImagesrc,
  alt,
  title,
  content,
}: LandingBannerProps) {
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-2">
      <AnimatedSlideInContainer>
        <ImageComponent src={sectionImagesrc} alt={alt} className="mx-auto" />
      </AnimatedSlideInContainer>
      <div className="flex flex-col md:flex md:flex-col space-y-4 md:space-y-0 py-4 md:py-24">
        <div className="font-sora font-bold text-titleBlack text-5xl md:text-6xl">{title}</div>
        <div className="md:w-2/3 font-sora font-medium text-titleBlack text-xl md:text-2xl pt-4">
          {content}
        </div>
      </div>
    </div>
  );
}
