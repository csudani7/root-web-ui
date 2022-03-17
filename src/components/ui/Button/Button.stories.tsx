import React from 'react';
import Button, { ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: 'inline-radio',
        options: ['small', 'medium', undefined],
      },
    },
  },
};

const Template = ({ ...args }: ButtonProps) => (
  <>
    <Button {...args} className="border border-royalBlue">
      <span className="relative z-10">Request a quote</span>
    </Button>
  </>
);

export const Default = Template.bind({});
Default.args = {
  className: 'bg-royalBlue font-bold not-italic leading-6',
  size: 'small',
};

export const Hover = Template.bind({});
Hover.args = {
  className: 'bg-tarawera font-bold not-italic leading-6',
  size: 'small',
};

export const Outline = Template.bind({});
Outline.args = {
  className:
    'border border-royalBlue font-bold not-italic tracking-wider leading-6',
  size: 'small',
};

export const Shadow = Template.bind({});
Shadow.args = {
  className:
    'bg-royalBlue font-bold not-italic tracking-wider leading-6 shadow-xl',
  size: 'small',
};
