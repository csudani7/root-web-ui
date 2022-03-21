import React from 'react';
import { useRouter } from 'next/router';

import Button from '../../ui/Button';
import { routes } from '../../../routes';
import ImageComponent from '../../ui/Image';
import AnimatedSlideInContainer from '../../ui/AnimatedSlideInContainer';

export default function HeroBannerSlice() {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row pt-24 md:pt-24 md:py-24 bg-heroPattern bg-no-repeat">
      <div className="hidden md:block md:absolute md:top-1/3 md:right-1/3">
        <ImageComponent src="/png/full-eastern-blue-shadow.png" alt="full-eastern-blue-shadow" />
      </div>
      <div className="hidden md:block md:absolute md:top-2/4 md:right-32">
        <ImageComponent src="/png/yellow-shadow.png" alt="light-green-shadow" />
      </div>
      <div className="flex-1 px-6 md:py-36 md:px-10 lg:px-10">
        <AnimatedSlideInContainer>
          <div>
            <div className="font-sora font-bold text-titleBlack text-5xl md:text-6xl">
              Master TypeScript in free, online classes
            </div>
            <div className="md:w-2/3 font-sora font-medium text-titleBlack text-xl md:text-2xl pt-4">
              Real examples, live communication — learn in a cohort-based course.
            </div>
            <div className="pt-10 md:pt-14">
              <Button
                size="medium"
                className="bg-gradient-to-r from-lightGreen via-mediumSpringGreen to-aquamarine font-semibold"
                onClick={() => router.push(routes.course)}
              >
                View Live Courses
              </Button>
            </div>
            <div className="w-64 font-sora font-medium text-titleBlack text-base pt-4">
              Only 2 spots left in the next cohort starting March 5th
            </div>
          </div>
        </AnimatedSlideInContainer>
      </div>
      <div className="relative flex flex-col flex-1 justify-center items-center">
        <div className="relative z-10 right-32 flex justify-center">
          <div className="relative top-8 md:-right-32">
            <ImageComponent
              src="/png/hero-banner-1.png"
              alt="hero-banner-1"
              className="w-40 h-24 md:w-full md:h-full"
            />
          </div>
        </div>
        <div className="relative right-40">
          <ImageComponent src="/png/hero-banner.png" alt="hero-banner" />
        </div>
        <div className="flex">
          <div className="w-fit relative bottom-24 right-64">
            <ImageComponent src="/png/hero-banner-2.png" alt="hero-banner-1" />
          </div>
          <div className="w-fit relative right-32 md:right-80 bottom-4">
            <ImageComponent src="/png/hero-banner-3.png" alt="hero-banner-1" />
          </div>
          {/* TODO: Image is missing */}
          {/* <div className="w-fit relative">
            <ImageComponent src="/png/hero-banner-2.png" alt="hero-banner-1" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
