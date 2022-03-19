import React, { ReactElement } from 'react';
import HeaderSlice from './HeaderSlice';
import FooterSlice from './FooterSlice';

interface Props {
  children: ReactElement[] | ReactElement;
}

function Layout({ children }: Props): ReactElement {
  return (
    <div className="bg-white site-container mx-auto">
      <HeaderSlice />
      <main>{children}</main>
      <FooterSlice />
    </div>
  );
}
export default Layout;
