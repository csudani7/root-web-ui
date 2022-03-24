import React from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import Button from '../../ui/Button';
import { routes } from '../../../routes';
import ImageComponent from '../../ui/Image';
import AnimatedSlideInContainer from '../../ui/AnimatedSlideInContainer';
import { VariantProps } from '../../../types/common';
import HeroBannerImagesSection from '../v2/Home/HeroBanneImagesSection';

export default function HeroBannerSlice({ isSecondVariant }: VariantProps): JSX.Element {
  const router = useRouter();

  return (
    <div
      className={clsx(
        isSecondVariant ? 'flex flex-col md:flex-row' : 'flex flex-col md:flex-row md:pt-24',
      )}
    >
      <ImageComponent
        src="/png/hero-gradient.png"
        alt="hero-gradient"
        className="absolute md:top-0 md:left-0"
      />
      <div
        className={clsx(
          isSecondVariant ? 'hidden' : 'hidden md:block md:absolute md:top-1/3 md:right-1/3',
        )}
      >
        <ImageComponent src="/png/full-eastern-blue-shadow.png" alt="full-eastern-blue-shadow" />
      </div>
      <div
        className={clsx(
          isSecondVariant
            ? 'hidden md:block md:absolute right-0 top-96'
            : 'hidden md:block md:absolute md:top-2/4 md:right-32',
        )}
      >
        <ImageComponent src="/png/yellow-shadow.png" alt="light-green-shadow" />
      </div>
      <div
        className={clsx(
          !isSecondVariant ? 'hidden' : 'hidden md:block md:absolute md:top-1/5 md:right-52',
        )}
      >
        <ImageComponent src="/png/light-green-larger-eclipse.png" alt="light-green-shadow" />
      </div>
      <div className="relative flex-1 px-6 md:py-36 md:px-10 lg:px-10 py-8">
        <AnimatedSlideInContainer>
          <div>
            {isSecondVariant ? (
              <div className="font-sora font-bold text-4xl lg:text-6xl text-left mb-8 lg:w-4/6 w-5/6 break-normal">
                Level up your
                <mark className="text-transparent bg-gradient-to-r from-lightGreen to-caribbeanGreen bg-clip-text m-2">
                  tech
                </mark>
                skills with live classes
              </div>
            ) : (
              <div className="font-sora font-bold text-titleBlack text-5xl md:text-6xl">
                Master TypeScript in free, online classes
              </div>
            )}
            <div className="md:w-2/3 font-sora font-medium text-titleBlack text-base lg:text-2xl md:text-2xl pt-4">
              {isSecondVariant
                ? 'Join people around the world and learn real skills of a software developer with live classes in a cohort.'
                : 'Real examples, live communication — learn in a cohort-based course.'}
            </div>
            <div className="pt-10 md:pt-14 grid grid-cols-1 lg:w-1/3">
              <Button
                size="medium"
                className="bg-gradient-to-r from-lightGreen via-mediumSpringGreen to-aquamarine font-semibold"
                onClick={() => router.push(routes.course)}
              >
                {isSecondVariant ? 'Live Short Courses' : 'View Live Courses'}
              </Button>
            </div>
            <div
              className={clsx(
                isSecondVariant
                  ? 'w-72 font-inter font-medium text-titleBlack text-base pt-4'
                  : 'w-64 font-inter font-medium text-titleBlack text-base pt-4',
              )}
            >
              {isSecondVariant
                ? 'Only 2 spots left in the next cohort'
                : 'Only 2 spots left in the next cohort starting March 5th'}
            </div>
          </div>
        </AnimatedSlideInContainer>
      </div>
      {isSecondVariant ? (
        <div className="relative flex flex-col flex-1 md:justify-center md:items-center px-8">
          <HeroBannerImagesSection isSecondVariant={isSecondVariant} />
        </div>
      ) : (
        <div className="relative flex flex-col flex-1 md:justify-center md:items-center">
          <div className="relative z-10 right-32 flex md:justify-center justify-end">
            <div className="relative top-8 md:-right-32">
              <ImageComponent
                src="/png/hero-banner-1.png"
                alt="hero-banner-1"
                className="w-40 h-24 md:w-full md:h-full"
              />
            </div>
          </div>
          <div className="relative md:right-40">
            <ImageComponent src="/png/hero-banner.png" alt="hero-banner" />
          </div>
          <div className="flex">
            <div className="w-fit relative bottom-24 right-64">
              <ImageComponent src="/png/hero-banner-2.png" alt="hero-banner-1" />
            </div>
            <div className="w-fit relative right-8 md:right-80 bottom-4">
              <ImageComponent src="/png/hero-banner-3.png" alt="hero-banner-1" />
            </div>
            {/* TODO: Image is missing */}
            {/* <div className="w-fit relative">
            <ImageComponent src="/png/hero-banner-2.png" alt="hero-banner-1" />
          </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
