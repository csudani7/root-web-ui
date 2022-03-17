import React from 'react';
import Footer, { FooterProps } from '.';

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    firstColumnLinks: [
      {
        label: 'About',
        link: '#',
      },
      {
        label: 'Service',
        link: '#',
      },
      {
        label: 'Case Study',
        link: '#',
      },
      {
        label: 'Blog',
        link: '#',
      },
      {
        label: 'Career',
        link: '#',
      },
      {
        label: 'Contact',
        link: '#',
      },
    ],
    secondColumnLinks: [
      {
        label: 'Privacy Policy',
        link: '#',
      },
      {
        label: 'Terms & Condition',
        link: '#',
      },
      {
        label: 'GDPR',
        link: '#',
      },
      {
        label: 'FAQ',
        link: '#',
      },
    ],
  },
};

const Template = ({ ...args }: FooterProps) => (
  <>
    <Footer {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  firstColumnLinks: [
    {
      label: 'About',
      link: '#',
    },
    {
      label: 'Service',
      link: '#',
    },
    {
      label: 'Case Study',
      link: '#',
    },
    {
      label: 'Blog',
      link: '#',
    },
    {
      label: 'Career',
      link: '#',
    },
    {
      label: 'Contact',
      link: '#',
    },
  ],
  secondColumnLinks: [
    {
      label: 'Privacy Policy',
      link: '#',
    },
    {
      label: 'Terms & Condition',
      link: '#',
    },
    {
      label: 'GDPR',
      link: '#',
    },
    {
      label: 'FAQ',
      link: '#',
    },
  ],
};
