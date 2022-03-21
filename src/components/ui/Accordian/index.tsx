import React from 'react';
import DownArrowIocn from '../Icon/DownArrowIcon';
import RightArrowIocn from '../Icon/RightArrowIcon';

interface AccordianProps {
  question: string;
  answer: string;
}

export default function Accordian({ question, answer }: AccordianProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div className="border-solid border-3 border-easternBlue rounded-lg md:p-6 lg:p-6 p-6 mb-6 items-center">
      <div>
        <div className="flex">
          <div className="pr-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <DownArrowIocn /> : <RightArrowIocn />}
          </div>
          <div className="text-xl font-semibold leading-7">{question}</div>
        </div>
        {isOpen && <div className="pl-10 text-base font-medium leading-5 pt-4">{answer}</div>}
      </div>
    </div>
  );
}
