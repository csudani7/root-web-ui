import React from 'react';
import { storiesOf } from '@storybook/react';
import { Slider } from '.';
import TestimonialCard from '../TestimonialCard';

const settings = {
  className: 'bitontree-slider',
  centerPadding: '60px',
  dots: true,
  autoplay: true,
  infinite: true,
  centerMode: true,
  fade: true,
  slidesToShow: 3,
  speed: 500,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const data = [
  {
    userImage: { src: 'https://via.placeholder.com/150', alt: 'user-image' },
    testimonialName: 'Alex Kirshner',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
    currentPosition: 'co-founder of Bitontree',
  },
  {
    userImage: { src: 'https://via.placeholder.com/150', alt: 'user-image' },
    testimonialName: 'Alex Kirshner',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
    currentPosition: 'co-founder of Bitontree',
  },
  {
    userImage: { src: 'https://via.placeholder.com/150', alt: 'user-image' },
    testimonialName: 'Alex Kirshner',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
    currentPosition: 'co-founder of Bitontree',
  },
  {
    userImage: { src: 'https://via.placeholder.com/150', alt: 'user-image' },
    testimonialName: 'Alex Kirshner',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
    currentPosition: 'co-founder of Bitontree',
  },
  {
    userImage: { src: 'https://via.placeholder.com/150', alt: 'user-image' },
    testimonialName: 'Alex Kirshner',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
    currentPosition: 'co-founder of Bitontree',
  },
];

storiesOf('Slider/TestimonialCard', module).add('TestimonialCard', () => {
  return (
    <Slider sliderType={TestimonialCard} settings={settings} data={data} />
  );
});
