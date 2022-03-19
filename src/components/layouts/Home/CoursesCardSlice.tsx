import React from 'react';
import { courseCardData } from '../../../utils';
import CardWithImage from '../../ui/CardWithImage';

export default function CoursesCardSlice() {
  return (
    <div className="px-6 md:px-10 lg:px-10 py-16 md:py-36">
      <div className="font-sora font-semibold text-3xl md:text-4xl text-left text-titleBlack pb-8 md:pb-12">
        Upcoming Live Courses
      </div>
      <div className="grid grid-cols-1 md:grid md:grid-cols-4 lg:grid lg:grid-cols-4">
        {courseCardData.map((item, index) => (
          <CardWithImage
            key={index}
            cardImage={item.cardImage}
            cardSubTitle={item.cardSubTitle}
            cardTitle={item.cardTitle}
            cardDescription={item.cardDescription}
          />
        ))}
      </div>
    </div>
  );
}
