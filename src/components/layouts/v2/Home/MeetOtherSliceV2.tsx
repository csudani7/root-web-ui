import React from 'react';
import { VariantProps } from '../../../../types/common';
import { Slider } from '../../../ui/Slider';

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
    <div className="lg:pb-48 pt-24 lg:pt-0 md:pt-0">
      <div className="hidden md:flex justify-center font-extrabold text-3xl lg:text-4xl leading-10 mb-36">
        <mark className="text-transparent bg-gradient-to-r from-jungleGreen to-emerald bg-clip-text mr-2">
          Connect
        </mark>
        with people all over the globe
      </div>
      <div className="hidden md:block">
        <Slider
          sliderType={UserSlider}
          settings={settings}
          data={[
            { profileImage: '/png/user-profile-001.png' },
            { profileImage: '/png/user-profile-002.png' },
            { profileImage: '/png/user-profile-003.png' },
            { profileImage: '/png/user-profile-005.png' },
            { profileImage: '/png/user-profile-006.png' },
            { profileImage: '/png/user-profile-007.png' },
            { profileImage: '/png/user-profile-008.png' },
            { profileImage: '/png/user-profile-009.png' },
            { profileImage: '/png/user-profile-0010.png' },
            { profileImage: '/png/user-profile-0011.png' },
            { profileImage: '/png/user-profile-0012.png' },
            { profileImage: '/png/user-profile-0013.png' },
            { profileImage: '/png/user-profile-0014.png' },
            { profileImage: '/png/user-profile-0015.png' },
          ]}
        />
      </div>
      <div className="hidden md:block mt-11">
        <Slider
          sliderType={UserSlider}
          settings={settings}
          data={[
            { profileImage: '/png/user-profile-001.png' },
            { profileImage: '/png/user-profile-002.png' },
            { profileImage: '/png/user-profile-003.png' },
            { profileImage: '/png/user-profile-005.png' },
            { profileImage: '/png/user-profile-006.png' },
            { profileImage: '/png/user-profile-007.png' },
            { profileImage: '/png/user-profile-008.png' },
            { profileImage: '/png/user-profile-009.png' },
            { profileImage: '/png/user-profile-0010.png' },
            { profileImage: '/png/user-profile-0011.png' },
            { profileImage: '/png/user-profile-0012.png' },
            { profileImage: '/png/user-profile-0013.png' },
            { profileImage: '/png/user-profile-0014.png' },
            { profileImage: '/png/user-profile-0015.png' },
          ]}
        />
      </div>
    </div>
  );
}
