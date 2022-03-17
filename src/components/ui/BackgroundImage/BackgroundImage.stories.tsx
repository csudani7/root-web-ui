import React from 'react';
import BackgroundImage, { BackgroundImageProps } from '.';

export default {
  title: 'Components/BackgroundImage',
  component: BackgroundImage,
  argTypes: {
    src: '/images/bg-image.jpg',
    alt: 'background-image',
  },
};

const Template = ({ ...args }: BackgroundImageProps) => (
  <div className="h-64">
    <BackgroundImage {...args}>
      <h1 className="py-10 text-center">Hello World!</h1>
    </BackgroundImage>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  src: '/images/bg-image.jpg',
  alt: 'background-image',
};
