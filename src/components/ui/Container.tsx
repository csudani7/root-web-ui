import clsx from 'clsx';
import React, { ReactElement } from 'react';
import SlideInMotionContainer from './SlideInMotionContainer';

interface Props {
  id?: string;
  className?: string;
  children?: any;
  maxWidth?: boolean; // disable default max-width
  paddingTop?: boolean;
  paddingBottom?: boolean;
  paddingLeft?: boolean;
  paddingRight?: boolean;
  largeContainer?: boolean; // wider max-width but no padding left and right
  largestContainer?: boolean; // widest max-width but no padding left and right
  noPaddingX?: boolean;
  topContainer?: boolean; // add more padding top for the menu
  useSlideInEffect?: boolean;
  marginTop?: boolean;
  style?: Record<string, unknown>;
}

export default function Container({
  id,
  children,
  className,
  maxWidth = true,
  paddingTop = false,
  paddingBottom = false,
  paddingLeft = false,
  paddingRight = false,
  largeContainer = false,
  largestContainer = false,
  noPaddingX = false,
  topContainer = false,
  useSlideInEffect = false,
  marginTop = false,
  style = {},
}: Props): ReactElement {
  return (
    <div
      id={id}
      className={clsx(
        maxWidth && 'container m-auto',
        paddingTop && 'pt-12 md:pt-16 lg:pt-20 xl:pt-24',
        paddingBottom && 'pb-12 md:pb-16 lg:pb-20 xl:pb-24',
        !noPaddingX && paddingLeft && 'pl-4 md:pl-6 lg:pl-8 xl:pl-10',
        !noPaddingX && paddingRight && 'pr-4 md:pr-6 lg:pr-8 xl:pr-10',
        largeContainer && 'large-container m-auto',
        largestContainer && 'largest-container m-auto',
        !noPaddingX && 'px-6 sm:px-0',
        topContainer && 'pb-48 md:pb-40 pt-28 md:pt-36',
        marginTop && 'mt-0',
        className,
      )}
      style={style}
    >
      {useSlideInEffect ? <SlideInMotionContainer>{children}</SlideInMotionContainer> : children}
    </div>
  );
}
