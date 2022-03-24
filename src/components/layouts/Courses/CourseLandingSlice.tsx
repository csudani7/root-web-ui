import React from 'react';
import clsx from 'clsx';

import ImageComponent from '../../ui/Image';
import LandingBanner from '../../ui/LandingBanner';

export interface Props {
  isCourseV2: boolean;
  selectedCourse: string;
}

export default function CourseLandingSlice({ selectedCourse, isCourseV2 }: Props) {
  return (
    <div
      className={clsx(
        isCourseV2
          ? 'bg-titleBlack relative px-6 md:px-10 lg:px-10 py-24 md:py-40'
          : 'relative px-6 md:px-10 lg:px-10 py-24 md:py-40',
      )}
    >
      {!isCourseV2 && (
        <>
          <div className="hidden md:block md:absolute md:right-0">
            <ImageComponent src="/png/light-green-shadow.png" alt="light-green-shadow" />
          </div>
          <div className="hidden md:block md:absolute md:top-12 md:right-80">
            <ImageComponent
              src="/png/full-eastern-blue-shadow.png"
              alt="full-eastern-blue-shadow"
              className="w-3/4 h-3/4"
            />
          </div>
        </>
      )}
      <LandingBanner
        isButtonShow={true}
        title={selectedCourse}
        content="This is an intermediate-level cohort-based course aimed at providing an exclusive and crisp learning experience to already"
        sectionImagesrc={isCourseV2 ? '/png/course-image-8.png' : '/png/hero-banner.png'}
        alt="hero-banner"
        buttonBgColor={clsx(
          isCourseV2
            ? 'bg-gradient-to-r from-aqua to-dodgerBlue font-semibold'
            : 'bg-gradient-to-r from-lightGreen via-mediumSpringGreen to-aquamarine font-semibold',
        )}
        buttonText="Enroll now"
        imagePosition={'right'}
        subTitle={isCourseV2 ? '2 day course' : 'full weekend'}
        noteText="Only 2 spots left in next cohort March 5th"
        isCourseV2={isCourseV2}
        subTitlePosition={'down'}
        titleTextClass={
          isCourseV2
            ? 'text-transparent bg-gradient-to-r from-aqua to-dodgerBlue bg-clip-text'
            : 'text-titleBlack'
        }
      />
    </div>
  );
}
