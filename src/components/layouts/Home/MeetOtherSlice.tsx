import React from 'react';
import { VariantProps } from '../../../types/common';
import { Slider } from '../../ui/Slider';
import LiveCohortsSlice from './LiveCohortsSlice';

const settings = {
  className: '',
  arrows: false,
  dots: false,
  autoplay: true,
  infinite: true,
  centerMode: true,
  draggable: true,
  slidesToShow: 9,
  speed: 500,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 9,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 8,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

export default function MeetOtherSlice({ isSecondVariant }: VariantProps) {
  function UserSlider({ profileImage }: { profileImage: string }) {
    return (
      <>
        <img src={profileImage} alt="user-profile" />
      </>
    );
  }

  return (
    <div className="bg-titleBlack py-14">
      <div className="hidden md:block">
        <Slider
          sliderType={UserSlider}
          settings={settings}
          data={[
            { profileImage: '/png/user-profile-0.png' },
            { profileImage: '/png/user-profile-1.png' },
            { profileImage: '/png/user-profile-2.png' },
            { profileImage: '/png/user-profile-3.png' },
            { profileImage: '/png/user-profile-4.png' },
            { profileImage: '/png/user-profile-5.png' },
            { profileImage: '/png/user-profile-0.png' },
            { profileImage: '/png/user-profile-1.png' },
            { profileImage: '/png/user-profile-2.png' },
            { profileImage: '/png/user-profile-3.png' },
            { profileImage: '/png/user-profile-4.png' },
            { profileImage: '/png/user-profile-5.png' },
            { profileImage: '/png/user-profile-0.png' },
            { profileImage: '/png/user-profile-1.png' },
            { profileImage: '/png/user-profile-2.png' },
            { profileImage: '/png/user-profile-3.png' },
            { profileImage: '/png/user-profile-4.png' },
            { profileImage: '/png/user-profile-5.png' },
          ]}
        />
      </div>
      <LiveCohortsSlice isSecondVariant={isSecondVariant} />
    </div>
  );
}
