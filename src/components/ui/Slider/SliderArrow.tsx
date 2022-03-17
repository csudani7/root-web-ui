import clsx from 'clsx';
import React from 'react';
import { SliderArrowIcon } from '../Icon';

export interface SliderArrow {
  type: 'next' | 'previous';
  onClick: () => void;
  rootClassName?: string;
  position: string;
}

export function SliderArrow(props) {
  const { onClick, rootClassName, type, position } = props;
  return (
    <div
      onClick={onClick}
      className={clsx('absolute cursor-pointer', type, position)}
    >
      <SliderArrowIcon className={rootClassName} />
    </div>
  );
}
