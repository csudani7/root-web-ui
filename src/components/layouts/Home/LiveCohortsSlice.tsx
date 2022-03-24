import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';

import { VariantProps } from '../../../types/common';

export default function LiveCohortsSlice({ isSecondVariant }: VariantProps) {
  const isCourseV2 = useRouter().pathname.includes('v2/course');

  return (
    <div className="bg-primaryBlack py-14 px-6">
      <div
        className={clsx(
          isSecondVariant ? 'w-auto p-6' : 'w-auto md:w-1/2 mx-auto px-6 py-6 md:py-20',
        )}
      >
        <div
          className={clsx(
            isCourseV2
              ? 'font-inter uppercase text-transparent text-center text-4xl lg:text-6xl font-extrabold  bg-clip-text bg-gradient-to-r from-aqua to-dodgerBlue pb-6'
              : isSecondVariant
              ? 'font-inter uppercase text-transparent text-center text-4xl lg:text-6xl font-extrabold  bg-clip-text bg-gradient-to-r from-lightGreen to-caribbeanGreen pb-6'
              : 'font-inter text-base text-lightGreen font-semibold uppercase pb-6 text-center',
          )}
        >
          live cohorts
        </div>
        <div className="font-sora text-xl lg:text-3xl md:text-4xl text-white font-semibold pb-6 text-left md:text-center w-full">
          {isSecondVariant ? (
            <>
              Meet others in a live,
              <mark
                className={clsx(
                  isCourseV2
                    ? 'text-transparent bg-gradient-to-r from-aqua to-dodgerBlue bg-clip-text m-2'
                    : 'text-transparent bg-gradient-to-r from-lightGreen to-caribbeanGreen bg-clip-text m-2',
                )}
              >
                group-learning
              </mark>
              environment
            </>
          ) : (
            'Meet others in a live, group-learning environment'
          )}
        </div>
        <div className="font-inter text-sm text-white font-normal w-full md:w-3/4 mx-auto text-left md:text-center">
          {isSecondVariant ? (
            <>
              Our online courses are designed to help you{' '}
              <mark
                className={clsx(
                  isCourseV2
                    ? 'text-transparent bg-gradient-to-r from-aqua to-dodgerBlue bg-clip-text mr-1'
                    : 'text-transparent bg-gradient-to-r from-lightGreen to-caribbeanGreen bg-clip-text mr-1',
                )}
              >
                learn-by-doing
              </mark>
              with a class of people all around the world'
            </>
          ) : (
            'This is an intermediate-level cohort-based course aimed at providing an exclusive and crisp learning experience to already proficient JavaScript developers. You will be:'
          )}
        </div>
      </div>
      <div className="w-full mx-auto">
        <iframe
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          className="h-64 md:h-96 w-10/12 md:w-9/12 mx-auto lg:px-72"
        />
      </div>
    </div>
  );
}
