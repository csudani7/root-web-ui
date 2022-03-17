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
    <div className="m-5 items-center text-justify">
      <p>{feedBackText}</p>
      <div className="flex my-4">
        <img className="mr-2" src={authorImage} alt="author-photo" />
        <div>
          <h4>{authorName}</h4>
          <h6>{authorDesignation}</h6>
        </div>
      </div>
    </div>
  );
};

export default CardWithTextGlow;
