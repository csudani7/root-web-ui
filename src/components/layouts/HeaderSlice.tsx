import React from 'react';
import Header from '../Header/Header';

function HeaderSlice({ invertedStyle }: { invertedStyle: boolean }) {
  return (
    <Header
      links={[
        { label: 'About', link: '/about', isExternalLink: false },
        { label: 'Join Free slack', link: '/course', isExternalLink: false },
      ]}
      invertedStyle={invertedStyle}
    />
  );
}

export default HeaderSlice;
