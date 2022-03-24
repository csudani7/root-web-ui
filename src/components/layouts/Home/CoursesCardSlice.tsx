import React from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import { VariantProps } from '../../../types/common';
import { courseCardData } from '../../../utils';
import CardWithImage from '../../ui/CardWithImage';
import ImageComponent from '../../ui/Image';
import Button from '../../ui/Button';

export default function CoursesCardSlice({ isSecondVariant }: VariantProps): JSX.Element {
  const isCourseV2 = useRouter().pathname.includes('v2/course');

  return (
    <div className="relative px-6 md:px-10 lg:px-10 py-16 md:py-36">
      {!isSecondVariant && (
        <div className="hidden md:block md:absolute -left-16">
          <ImageComponent src="/png/yellow-shadow.png" alt="light-green-shadow" />
        </div>
      )}
      {isSecondVariant ? (
        <>
          <div className="font-sora font-extrabold text-3xl break-normal mx-2 lg:text-6xl text-center mb-8">
            {isCourseV2 ? 'Other' : 'Upcoming'}
            <mark
              className={clsx(
                isCourseV2
                  ? 'text-transparent bg-gradient-to-r from-aqua to-dodgerBlue bg-clip-text m-2'
                  : 'text-transparent bg-gradient-to-r from-lightGreen to-caribbeanGreen bg-clip-text m-2',
              )}
            >
              Live
            </mark>
            Short Courses
          </div>
          <div className="font-inter font-medium text-base lg:text-2xl text-titleBlack text-center lg:px-100 mb-28">
            Our short intense courses with hand on experience have proven to give a better learning
            outcome
          </div>
        </>
      ) : (
        <div className="font-sora font-semibold text-3xl md:text-4xl text-left text-titleBlack pb-8 md:pb-12">
          Upcoming Live Courses
        </div>
      )}
      <div className="md:relative grid grid-cols-1 gap-4 md:grid md:grid-cols-4 md:gap-8">
        {courseCardData.map((item, index) => (
          <CardWithImage
            key={index}
            cardImage={item.cardImage}
            cardSubTitle={item.cardSubTitle}
            cardTitle={item.cardTitle}
            cardDescription={item.cardDescription}
            isSecondVariant={isSecondVariant}
            isCourseV2={isCourseV2}
          />
        ))}
      </div>
      {isSecondVariant || isCourseV2 ? (
        <div className="flex justify-center pt-24">
          <Button
            className={clsx(
              isSecondVariant && 'bg-transparant border border-lightGreen',
              isCourseV2 && 'bg-transparant border border-aqua',
            )}
            size="medium"
          >
            <div className="flex justify-center items-center px-16">Load More</div>
          </Button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
