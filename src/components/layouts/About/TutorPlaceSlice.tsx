import React from 'react';
import ImageComponent from '../../ui/Image';

export default function TutorPlaceSlice() {
  return (
    <div className="relative px-6 md:px-56 pb-14 md:pb-44">
      <div className="font-sora font-semibold text-3xl md:text-4xl text-center text-titleBlack px-4 pb-16 md:px-72">
        I’ve taught at these places
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid md:grid-cols-4 md:gap-4 justify-center justify-items-center items-center">
        <div>
          <ImageComponent src="/png/linkedin.png" />
        </div>
        <div>
          <ImageComponent src="/png/spring-board.png" />
        </div>
        <div>
          <ImageComponent src="/png/iron-hack.png" />
        </div>
        <div>
          <ImageComponent src="/png/thinkful.png" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid md:grid-cols-4 md:gap-4 justify-center justify-items-center items-center pt-8 md:pt-16">
        <div>
          <ImageComponent src="/png/open-classroom.png" />
        </div>
        <div>
          <ImageComponent src="/png/toppr.png" />
        </div>
        <div>
          <ImageComponent src="/png/udacity.png" />
        </div>
        <div>
          <ImageComponent src="/png/bloc.png" />
        </div>
      </div>
    </div>
  );
}
