import React from 'react';
import Header from '../Header/Header';

function HeaderSlice({ invertedStyle }: { invertedStyle: boolean }) {
  return (
    <Header
      links={[
        { label: 'Home', link: 'any', isExternalLink: false },
        { label: 'About', link: 'any', isExternalLink: false },
        { label: 'Courses', link: 'any', isExternalLink: false },
      ]}
      invertedStyle={invertedStyle}
    />
  );
}

export default HeaderSlice;
