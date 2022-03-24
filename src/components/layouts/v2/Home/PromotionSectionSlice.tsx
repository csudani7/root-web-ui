import React from 'react';
import { VariantProps } from '../../../../types/common';
import { promotionData } from '../../../../utils';

export default function PromotionSectionSlice({ isSecondVariant }: VariantProps) {
  return (
    <div className="grid grid-cols-1 px-6 md:px-10 lg:px-10 bg-gradient-to-b from-white to-primaryLightGreen pt-20 pb-44">
      <div className="font-sora font-extrabold text-4xl lg:text-6xl text-center mb-8">
        How
        <mark className="text-transparent bg-gradient-to-r from-lightGreen to-caribbeanGreen bg-clip-text m-2">
          root
        </mark>
        is built for your success
      </div>
      <div className="font-inter font-medium text-base lg:text-2xl text-titleBlack text-center lg:px-100 mb-28">
        We believe in cohort-based community led learning and educate people with real-world problem
        solving skills
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 justify-center font-inter">
        {promotionData.map((data) => {
          return (
            <div className="border-solid border border-emerald px-8 py-12 bg-white rounded-2xl">
              <div className="font-extrabold text-7xl text-transparent bg-gradient-to-b from-cornflowerBlue to-turquoiseBlue bg-clip-text -mt-36">
                {data.number}
              </div>
              <div className="font-bold text-2xl text-easternBlue">{data.title}</div>
              <div className="font-normal text-base lg:text-lg">{data.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
