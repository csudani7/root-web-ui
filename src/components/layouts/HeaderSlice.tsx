import React from 'react';
import Header from '../Header/Header';

function HeaderSlice() {
  return (
    <Header
      headerMainLinks={[
        { label: 'About', link: '/about/manish' },
        { label: 'Join Free slack', link: '#' },
      ]}
    />
  );
}

export default HeaderSlice;
