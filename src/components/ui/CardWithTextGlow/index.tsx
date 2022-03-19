import React from 'react';

export interface CardWithTextGlowProps {
  feedBackText: string;
  authorImage: string;
  authorName: string;
  authorDesignation: string;
}

const CardWithTextGlow = ({
  feedBackText,
  authorImage,
  authorName,
  authorDesignation,
}: CardWithTextGlowProps) => {
  return (
    <div className="mx-0 my-5 md:my-5 md:mx-5 items-center text-justify">
      <p className="italic text-titleBlack font-inter">
        {feedBackText}
        <mark className="bg-mintTulip font-semibold">
          <b>{feedBackText}</b>
        </mark>
        {feedBackText}
      </p>
      <div className="flex my-4 font-sora">
        <img className="mr-2" src={authorImage} alt="author-photo" />
        <div>
          <h4 className="font-semibold text-titleBlack">{authorName}</h4>
          <h6 className="font-medium text-titleBlack">{authorDesignation}</h6>
        </div>
      </div>
    </div>
  );
};

export default CardWithTextGlow;
