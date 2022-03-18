import React from 'react';
import { developersReviewData } from '../../../utils';
import CardWithTextGlow from '../../ui/CardWithTextGlow';

export default function FeedbackSlice() {
  return (
    <div className="px-6 md:px-10 lg:px-10 pt-24 pb-14 md:pt-40 md:pb-44 lg:pt-40 lg:pb-44">
      <div className="font-sora font-semibold text-4xl text-left md:text-center text-titleBlack px-0 pb-10 md:px-72 lg:px-116">
        See what 2,000+ talented developers from across the globe said...
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2">
        {[...Array(8)].map((item, index) => (
          <CardWithTextGlow
            key={index}
            feedBackText={developersReviewData.feedBackText}
            authorImage={developersReviewData.authorImage}
            authorName={developersReviewData.authorName}
            authorDesignation={developersReviewData.authorDesignation}
          />
        ))}
      </div>
    </div>
  );
}
