import React from 'react';

import { VariantProps } from '../../../../types/common';
import PromotionSection from '../../../ui/PromotionSection';

export default function CourseImportanceSlice({ isSecondVariant }: VariantProps) {
  return (
    <>
      <PromotionSection
        buttonText=""
        imagePosition="down"
        subTitle=""
        title={
          <>
            Why
            <mark className="text-transparent bg-gradient-to-r from-aqua to-dodgerBlue bg-clip-text m-2">
              TypeScript
            </mark>
            is usefull
          </>
        }
        content="Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum"
        bgColor="bg-transparant"
        buttonBgColor="bg-gradient-to-r from-lightGreen via-mediumSpringGreen to-aquamarine font-semibold"
        borderRadius="rounded-lg"
        isButtonShow={false}
        isSecondVariant={isSecondVariant}
        titleTextClass="text-titleBlack"
        subTitleTextClass="text-easternBlue"
        iframeSrc={'https://codesandbox.io/s/61qwzlwlrk'}
      />
    </>
  );
}
