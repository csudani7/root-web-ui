import React from 'react';
import Button from '../Button';
import ImageComponent from '../Image';
import AnimatedSlideInContainer from '../AnimatedSlideInContainer';
import clsx from 'clsx';

export type ImageRatio = '1/2' | '1/3' | '2/3';
export type ImagePosition = 'left' | 'right';
interface LandingBannerProps {
  title: string;
  content: string;
  sectionImagesrc: string;
  alt?: string;
  isButtonShow?: boolean;
  buttonBgColor?: string;
  buttonText?: string;
  imagePosition?: ImagePosition;
  imageRatio?: ImageRatio;
  rootClassName?: string;
  bgColor?: string;
  subTitle?: string;
  noteText?: string;
  subTitlePosition?: string;
  titleTextClass?: string;
  isCourseV2?: boolean;
}

export default function LandingBanner({
  imagePosition = 'left',
  imageRatio = '1/2',
  sectionImagesrc,
  alt,
  title,
  subTitle,
  content,
  isButtonShow = false,
  buttonBgColor = '',
  buttonText = '',
  rootClassName = '',
  bgColor = '',
  noteText = '',
  subTitlePosition,
  titleTextClass,
  isCourseV2,
}: LandingBannerProps) {
  const position =
    imagePosition === 'left'
      ? 'flex-col flex-col-reverse md:flex-row'
      : 'flex-col flex-col-reverse md:flex-row-reverse';

  return (
    <div
      className={clsx(
        'relative w-full h-full flex items-center py-4',
        imagePosition === 'left' ? 'px-0 md:px-10' : 'px-0 md:px-0',
        position,
        rootClassName,
        bgColor,
      )}
    >
      <div className={`flex-none md:w-${imageRatio} pt-7 md:pt-0`}>
        <AnimatedSlideInContainer>
          <ImageComponent src={sectionImagesrc} alt={alt} className="m-auto" />
        </AnimatedSlideInContainer>
      </div>
      <div
        className={clsx(
          'flex-auto flex flex-col items-center md:items-start',
          imagePosition === 'left' ? 'px-0 md:px-12' : 'px-0 ml:px-12',
        )}
      >
        <div className="w-full flex flex-col justify-start items-start pb-6 md:pb-12">
          <div
            className={clsx(
              'text-easternBlue uppercase text-base font-semibold tracking-wide font-inter pb-6',
              subTitlePosition === 'down' ? 'order-2 pt-6' : 'order-1',
            )}
          >
            {subTitle}
          </div>
          <div
            className={clsx(
              subTitlePosition === 'down' ? 'order-1' : 'order-2',
              titleTextClass,
              'font-sora font-bold capitalize text-5xl md:text-6xl',
            )}
          >
            {title}
          </div>
          <div
            className={clsx(
              isCourseV2
                ? 'text-white md:w-2/3 font-sora font-medium text-base pt-4 order-3'
                : 'md:w-2/3 font-sora font-medium text-titleBlack text-base pt-4 order-3',
            )}
          >
            {content}
          </div>
        </div>
        {isButtonShow && (
          <div className="flex flex-col md:flex md:flex-row md:items-center">
            <Button className={buttonBgColor} size="medium">
              <div className="flex justify-center items-center mx-20 lg:mx-0 md:mx-0">
                {buttonText}
              </div>
            </Button>
            {noteText && (
              <div className="text-easternBlue text-base font-semibold tracking-wide font-inter mt-4 md:mt-0 md:ml-4 md:w-1/2">
                {noteText}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
