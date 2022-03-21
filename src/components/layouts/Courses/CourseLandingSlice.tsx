import React from 'react';
import ImageComponent from '../../ui/Image';
import LandingBanner from '../../ui/LandingBanner';

export default function CourseLandingSlice() {
  return (
    <div className="relative px-6 md:px-10 lg:px-10 py-24 md:py-40">
      <div className="hidden md:block md:absolute md:right-0">
        <ImageComponent src="/png/light-green-shadow.png" alt="light-green-shadow" />
      </div>
      <div className="hidden md:block md:absolute md:top-12 md:right-80">
        <ImageComponent src="/png/full-eastern-blue-shadow.png" alt="full-eastern-blue-shadow" className='w-3/4 h-3/4' />
      </div>
      <LandingBanner
        isButtonShow={true}
        title="Typescript"
        content="This is an intermediate-level cohort-based course aimed at providing an exclusive and crisp learning experience to already"
        sectionImagesrc="/png/hero-banner.png"
        alt="hero-banner"
        buttonBgColor="bg-gradient-to-r from-lightGreen via-mediumSpringGreen to-aquamarine font-semibold"
        buttonText="Enroll now"
        imagePosition={'right'}
        subTitle='full weekend'
        noteText='Only 2 spots left in next cohort March 5th'
      />
    </div>
  );
}
