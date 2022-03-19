import React from 'react';
import Button from '../../ui/Button';
import Image from '../../ui/Image';

export default function HeroBannerSlice() {
  return (
    <div className="relative h-screen">
      <div className="absolute">
        <Image src="/png/hero-gradient.png" alt="hero-gradient" />
      </div>
      <div className="absolute top-48 right-96 z-10">
        <Image src="/png/hero-banner-1.png" alt="hero-banner-1" />
      </div>
      <div className="absolute bottom-0 md:bottom-52 right-1/2 z-10">
        <Image src="/png/hero-banner-2.png" alt="hero-banner-1" />
      </div>
      <div className="absolute -bottom-10 md:bottom-32 right-1/3 z-10">
        <Image
          src="/png/hero-banner-3.png"
          alt="hero-banner-1"
          className="w-32 h-32 md:w-full md:h-full"
        />
      </div>
      <div className="absolute bottom-56 left-2/3 z-10">
        <Image src="/png/hero-banner-1.png" alt="hero-banner-1" />
      </div>
      <div className="relative top-28 md:top-72 w-full md:grid md:grid-cols-3 px-6 md:px-10 lg:px-10">
        <div>
          <div className="font-sora font-bold text-titleBlack text-5xl md:text-6xl">
            Master TypeScript in free, online classes
          </div>
          <div className="w-2/3 font-sora font-medium text-titleBlack text-xl md:text-2xl pt-4">
            Real examples, live communication — learn in a cohort-based course.
          </div>
          <div className="pt-10 md:pt-14">
            <Button
              className="bg-gradient-to-r from-lightGreen via-mediumSpringGreen to-aquamarine font-semibold"
              size="medium"
            >
              View Live Courses
            </Button>
          </div>
          <div className="w-64 font-sora font-medium text-titleBlack text-base pt-4">
            Only 2 spots left in the next cohort starting March 5th
          </div>
        </div>
        <div className="relative md:left-72 -bottom-8 md:-bottom-0">
          <Image src="/png/hero-banner.png" alt="hero-banner" className="mx-auto" />
        </div>
      </div>
    </div>
  );
}
