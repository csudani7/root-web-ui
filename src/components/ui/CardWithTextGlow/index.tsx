import React from 'react';
import clsx from 'clsx';

export interface CardWithTextGlowProps {
  feedBackText: string;
  authorImage: string;
  authorName: string;
  authorDesignation: string;
  isCourseV2?: boolean;
}

const CardWithTextGlow = ({
  feedBackText,
  authorImage,
  authorName,
  authorDesignation,
  isCourseV2,
}: CardWithTextGlowProps) => {
  return (
    <div className={'mx-0 my-5 md:my-5 md:mx-5 lg:mx-0 items-center text-justify'}>
      <p
        className={clsx(
          isCourseV2 ? 'text-white' : 'text-titleBlack',
          'italic  font-inter font-semibold',
        )}
      >
        {feedBackText}
        <mark className="bg-mintTulip font-semibold">
          <b>{feedBackText}</b>
        </mark>
        {feedBackText}
      </p>
      <div className="flex my-4 font-sora">
        <img className="mr-2" src={authorImage} alt="author-photo" />
        <div>
          <h4 className={clsx(isCourseV2 ? 'text-white' : 'text-titleBlack', 'font-bold')}>
            {authorName}
          </h4>
          <h6 className={clsx(isCourseV2 ? 'text-white' : 'text-titleBlack', 'font-medium')}>
            {authorDesignation}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default CardWithTextGlow;
