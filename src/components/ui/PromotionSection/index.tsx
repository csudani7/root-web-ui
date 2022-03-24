import React from 'react';

import AnimatedSlideInContainer from '../AnimatedSlideInContainer';
import { ImageType } from '../../../types/common';
import Image from '../Image';
import Button from '../Button';
import clsx from 'clsx';

export type ImageRatio = '1/2' | '1/3' | '2/3';
export type ImagePosition = 'left' | 'right' | 'down';

export interface PromotionSectionProps {
  buttonText: string;
  imagePosition: ImagePosition;
  imageRatio?: ImageRatio;
  promotionImage?: ImageType;
  rootClassName?: string;
  title: string | JSX.Element;
  subTitle: string;
  content: string;
  bgColor: string;
  buttonBgColor: string;
  type?: 'button' | 'submit';
  buttonIcon?: React.ReactElement;
  borderRadius: string;
  isUserCollection?: boolean;
  listOfFeature?: Array<{ text: string }>;
  isButtonShow?: boolean;
  buttonTextColor?: string;
  isSecondVariant: boolean;
  titleTextClass?: string;
  subTitleTextClass: string;
  iframeSrc?: string;
  isCourseV2?: boolean;
}

export default function PromotionSection({
  imagePosition,
  imageRatio = '1/2',
  promotionImage,
  rootClassName = '',
  title,
  subTitle,
  content,
  buttonText,
  bgColor,
  buttonBgColor,
  buttonIcon,
  borderRadius,
  isUserCollection = false,
  listOfFeature,
  isButtonShow = false,
  buttonTextColor,
  isSecondVariant,
  titleTextClass,
  subTitleTextClass,
  iframeSrc,
  isCourseV2,
}: PromotionSectionProps) {
  const position = React.useMemo(() => {
    switch (imagePosition) {
      case 'left':
        return 'flex-col flex-col-reverse md:flex-row';
      case 'down':
        return 'flex-col flex-col-reverse';
      case 'right':
        return 'flex-col flex-col-reverse md:flex-row-reverse';
      default:
        return 'flex-col flex-col-reverse';
    }
  }, [imagePosition]);

  return (
    <div
      className={clsx(
        'relative w-full h-full flex items-center py-4',
        imagePosition === 'left' ? 'px-0 md:px-10' : 'px-0 md:px-10',
        position,
        rootClassName,
        bgColor,
        borderRadius,
      )}
    >
      <div className={clsx(`flex-none md:w-${imageRatio} md:pt-0`)}>
        {isUserCollection ? (
          <AnimatedSlideInContainer>
            <div
              className={clsx(
                isSecondVariant
                  ? 'h-96 items-center flex flex-col bg-transparant p-4 lg:p-0'
                  : 'h-96 items-center flex flex-col justify-center relative bg-transparant pt-4 lg',
              )}
            >
              {isSecondVariant ? (
                <>
                  <div className={'w-fit rounded-full z-10'}>
                    <Image src={'/png/instructor-image-1.png'} alt="user-profile" />
                  </div>
                  <div className={'w-fit rounded-full z-10 lg:-mt-48 lg:mr-128 -mr-44 -mt-16 p-0'}>
                    <Image src={'/png/instructor-image-2.png'} alt="user-profile" />
                  </div>
                </>
              ) : (
                <div className={'flex items-center'}>
                  <div className={'w-fit rounded-full z-10 px-6'}>
                    <Image src={'/png/user-profile-0.png'} alt="user-profile" />
                  </div>
                  <div
                    className={
                      'relative w-fit rounded-full -top-2 lg:top-0 -left-4 lg:left-6 z-10 px-6'
                    }
                  >
                    <Image src={'/png/user-profile-1.png'} alt="user-profile" />
                  </div>
                </div>
              )}
              <div
                className={clsx(
                  isSecondVariant
                    ? 'flex justify-center items-center relative -top-12 -left-6 lg:-top-16 lg:left-3 lg:mt-0 lg:ml-0 -mt-48 -ml-36'
                    : 'flex justify-center items-center relative -top-12 -left-6 lg:-top-16 lg:left-3 lg:mt-0 lg:ml-0 -mt-48',
                )}
              >
                <div
                  className={clsx(
                    isSecondVariant ? 'w-fit rounded-full lg:-mt-8 lg:ml-32' : 'w-fit rounded-full',
                  )}
                >
                  <Image
                    src={
                      isSecondVariant ? '/png/instructor-image-3.png' : '/png/user-profile-2.png'
                    }
                    alt="user-profile"
                  />
                </div>
              </div>
            </div>
          </AnimatedSlideInContainer>
        ) : (
          !isCourseV2 &&
          promotionImage && (
            <AnimatedSlideInContainer>
              <Image
                src={promotionImage.src}
                alt={promotionImage.alt}
                className="m-auto p-4 lg:p-0 md:p-0"
              />
            </AnimatedSlideInContainer>
          )
        )}
        {iframeSrc && (
          <div className="flex justify-center w-full mx-auto">
            <iframe src={iframeSrc} width="100%" height="800px"></iframe>
          </div>
        )}
      </div>
      <div
        className={clsx(
          'flex-auto flex flex-col items-center md:items-start',
          imagePosition === 'left' ? 'px-0 md:px-12' : 'px-0 ml:px-12',
        )}
      >
        <div className="w-full flex flex-col justify-start items-start px-6 md:px-0">
          <div
            className={clsx(
              'uppercase text-base font-semibold tracking-wide font-inter pb-6',
              subTitleTextClass,
            )}
          >
            {subTitle}
          </div>
          <div
            className={clsx(
              isSecondVariant
                ? `font-sora text-3xl md:text-4xl text-left font-extrabold leading-10 tracking-wider w-full`
                : 'font-sora text-3xl md:text-4xl text-left font-semibold leading-8 tracking-wider w-full md:w-1/2 lg:w-2/3',
              titleTextClass,
            )}
          >
            {title}
          </div>
          <div
            className={clsx(
              isSecondVariant
                ? `text-left font-inter text-base font-medium pt-6`
                : 'font-inter text-titleBlack text-base font-medium pt-6',
              titleTextClass,
            )}
          >
            {content}
          </div>
          <div className={clsx(isCourseV2 ? 'text-white pt-6' : 'pt-6 lg:pb-12')}>
            {listOfFeature &&
              listOfFeature.map((item, index) => {
                return (
                  <div key={index} className="pb-2">
                    {item.text}
                  </div>
                );
              })}
          </div>
        </div>
        {isButtonShow && (
          <Button className={clsx(buttonBgColor, 'mt-8 lg:mt-0 md:mt-0')} size="medium">
            <div className="flex justify-center items-center ">
              {buttonIcon && <span className="mr-2">{buttonIcon}</span>}
              <div className={clsx(buttonTextColor, 'w-64 lg:w-auto font-semibold')}>
                {buttonText}
              </div>
            </div>
          </Button>
        )}
      </div>
    </div>
  );
}
