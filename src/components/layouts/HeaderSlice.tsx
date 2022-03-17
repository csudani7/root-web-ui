import React from 'react';
import Header from '../Header/Header';

function HeaderSlice() {
  return (
    <Header
      headerMainLinks={[
        { label: 'About', link: '/about' },
        { label: 'Join Free slack', link: '/course' },
      ]}
    />
  );
}

export default HeaderSlice;
