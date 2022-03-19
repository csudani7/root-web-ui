import React from 'react';
import Button from '../../ui/Button';
import Image from '../../ui/Image';

export default function HeroBannerSlice() {
  return (
    <div className="flex flex-col md:flex-row pt-24 md:pt-24 md:py-24 bg-heroPattern bg-no-repeat">
      <div className="flex-1 px-6 md:py-36 md:px-10 lg:px-10">
        <div>
          <div className="font-sora font-bold text-titleBlack text-5xl md:text-6xl">
            Master TypeScript in free, online classes
          </div>
          <div className="md:w-2/3 font-sora font-medium text-titleBlack text-xl md:text-2xl pt-4">
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
      </div>
      <div className="flex flex-col flex-1 justify-center items-center">
        <div className="relative flex justify-center">
          <div className="relative top-8 md:-right-32">
            <Image
              src="/png/hero-banner-1.png"
              alt="hero-banner-1"
              className="w-40 h-24 md:w-full md:h-full"
            />
          </div>
        </div>
        <div>
          <Image src="/png/hero-banner.png" alt="hero-banner" />
        </div>
        <div className="flex">
          <div className="w-fit relative bottom-24 right-32">
            <Image src="/png/hero-banner-2.png" alt="hero-banner-1" />
          </div>
          <div className="w-fit relative right-32 md:right-48 bottom-4">
            <Image src="/png/hero-banner-3.png" alt="hero-banner-1" />
          </div>
          {/* TODO: Image is missing */}
          {/* <div className="w-fit relative">
            <Image src="/png/hero-banner-2.png" alt="hero-banner-1" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
