import React from 'react';
import { Slider } from '../../ui/Slider';

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

export default function MeetOtherSlice() {
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
      <div className="w-auto md:w-1/2 mx-auto px-6 py-6 md:py-20">
        <div className="font-inter text-base text-lightGreen font-semibold uppercase pb-6 text-center">
          live cohorts
        </div>
        <div className="font-sora text-3xl md:text-4xl text-white font-semibold pb-6 text-left md:text-center">
          Meet others in a live, group-learning environment{' '}
        </div>
        <div className="font-inter text-base text-white font-normal w-full md:w-3/4 mx-auto text-left md:text-center">
          This is an intermediate-level cohort-based course aimed at providing an exclusive and
          crisp learning experience to already proficient JavaScript developers. You will be:
        </div>
      </div>
      <div className="w-full mx-auto">
        <iframe
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          className="h-64 h-96 w-10/12 md:w-9/12 mx-auto"
        />
      </div>
    </div>
  );
}
