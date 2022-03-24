import React from 'react';
import { VariantProps } from '../../../types/common';
import { CounterAnimation } from '../../ui/CounterAnimation';

export default function StatsCounterSlice({ isSecondVariant }: VariantProps) {
  return (
    <div className="flex flex-col space-y-4 md:flex md:flex-row md:space-y-0 px-6 md:px-10 lg:px-10 pb-14 md:pb-32 md:justify-between">
      <div>
        <div className="text-easternBlue font-medium font-inter tracking-wide uppercase text-base">
          some quick facts
        </div>
        <div className="text-titleBlack font-semibold font-sora text-3xl md:text-4xl pt-4">
          Numbers and stats
        </div>
      </div>
      <div>
        <div className="text-titleBlack font-semibold font-sora text-3xl md:text-6xl">
          <CounterAnimation end={129} duration={5} />
        </div>
        <div className="text-titleBlack font-medium font-inter tracking-wide text-base">
          schools
        </div>
      </div>
      <div>
        <div className="text-titleBlack font-semibold font-sora text-3xl md:text-6xl">
          <CounterAnimation end={2000} duration={5} />
        </div>
        <div className="text-titleBlack font-medium font-inter tracking-wide text-base">
          students
        </div>
      </div>
      <div>
        <div className="text-titleBlack font-semibold font-sora text-3xl md:text-6xl">
          <CounterAnimation end={129} duration={5} />
        </div>
        <div className="text-titleBlack font-medium font-inter tracking-wide text-base">
          courses taught
        </div>
      </div>
      <div>
        <div className="text-titleBlack font-semibold font-sora text-3xl md:text-6xl">
          <CounterAnimation end={1034} duration={5} />
        </div>
        <div className="text-titleBlack font-medium font-inter tracking-wide text-base">
          hours of lessons
        </div>
      </div>
    </div>
  );
}
