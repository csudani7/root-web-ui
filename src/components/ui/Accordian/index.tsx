import React from 'react';
import clsx from 'clsx';

import DownArrowIocn from '../Icon/DownArrowIcon';
import RightArrowIocn from '../Icon/RightArrowIcon';

interface AccordianProps {
  question: string;
  answer: string;
  isCourseV2?: boolean;
}

export default function Accordian({ question, answer, isCourseV2 }: AccordianProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div className="border-solid border-3 border-easternBlue rounded-lg md:p-6 lg:p-6 p-6 mb-6 items-center">
      <div>
        <div className="flex">
          <div className="pr-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <DownArrowIocn color={isCourseV2 ? '#36C5F0' : 'black'} />
            ) : (
              <RightArrowIocn color={isCourseV2 ? '#36C5F0' : 'black'} />
            )}
          </div>
          <div
            className={clsx(
              isCourseV2 ? 'text-white' : 'text-titleBlack',
              'text-xl font-semibold leading-7',
            )}
          >
            {question}
          </div>
        </div>
        {isOpen && (
          <div
            className={clsx(
              isCourseV2 ? 'text-white' : 'text-titleBlack',
              'pl-10 text-base font-medium leading-5 pt-4',
            )}
          >
            {answer}
          </div>
        )}
      </div>
    </div>
  );
}
