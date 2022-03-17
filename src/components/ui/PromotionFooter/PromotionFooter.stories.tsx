import React from 'react';
import PromotionFooter, { PromotionFooterProps } from '.';

export default {
  title: 'Components/PromotionFooter',
  component: 'PromotionFooter',
  argTypes: {
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum porttitor faucibus ut iaculis. Orci massa varius sit dt',
    promotionImage: { src: '/images/hire-us.png', alt: 'hire-us-image' },
    buttonText: 'HIRE US',
    imagePosition: 'left',
    imageRatio: '1/3',
  },
};

const Template = ({ ...args }: PromotionFooterProps) => (
  <>
    <PromotionFooter {...args} />
  </>
);

export const Left = Template.bind({});
Left.args = {
  title:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum porttitor faucibus ut iaculis. Orci massa varius sit dt',
  promotionImage: { src: '/images/hire-us.png', alt: 'hire-us-image' },
  buttonText: 'HIRE US',
  imagePosition: 'left',
  imageRatio: '1/3',
};

export const Right = Template.bind({});
Right.args = {
  title:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum porttitor faucibus ut iaculis. Orci massa varius sit dt',
  promotionImage: { src: '/images/hire-us.png', alt: 'hire-us-image' },
  buttonText: 'HIRE US',
  imagePosition: 'right',
  imageRatio: '1/3',
};
