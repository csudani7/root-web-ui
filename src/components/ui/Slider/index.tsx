import React from 'react';
import SlickSlider from 'react-slick';

export interface SliderProps {
  data: any;
  settings: any;
  sliderType: React.ElementType;
}

export function Slider({ data, settings, sliderType }: SliderProps) {
  return (
    <SlickSlider {...settings}>
      {data?.map((slide: any, index: number) =>
        React.createElement(sliderType, { ...slide, key: index }),
      )}
    </SlickSlider>
  );
}
