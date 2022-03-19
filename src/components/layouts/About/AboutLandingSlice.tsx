import React from 'react';
import ImageComponent from '../../ui/Image';
import LandingBanner from '../../ui/LandingBanner';

export default function AboutLandingSlice() {
  return (
    <div className="relative px-6 md:px-10 lg:px-10 pt-24 md:pt-40">
      <div className="hidden md:block md:absolute md:left-0">
        <ImageComponent src="/png/light-green-shadow.png" alt="light-green-shadow" />
      </div>
      <LandingBanner
        title="Hey! I’m Manish, a software engineer and founder of root."
        content="I’d love to share how I started Root and my vision for it. It’s been an amazing journey
        and I couldn’t have done it without the amazing support of my students around the world."
        sectionImagesrc="/png/manish.png"
        alt="manish-tutor"
      />
    </div>
  );
}
