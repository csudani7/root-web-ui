import React from 'react';
import { developersReviewData } from '../../../utils';
import CardWithTextGlow from '../../ui/CardWithTextGlow';

export default function FeedbackSlice() {
  return (
    <>
      <div className="font-sans font-semibold text-4xl text-left md:text-center text-titleBlack px-0 md:px-72 pb-10">
        See what 2,000+ talented developers from across the globe said...
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2">
        {[...Array(8)].map(() => (
          <CardWithTextGlow
            feedBackText={developersReviewData.feedBackText}
            authorImage={developersReviewData.authorImage}
            authorName={developersReviewData.authorName}
            authorDesignation={developersReviewData.authorDesignation}
          />
        ))}
      </div>
    </>
  );
}
