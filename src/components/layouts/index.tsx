import React, { ReactElement } from 'react';
import HeaderSlice from './HeaderSlice';
import FooterSlice from './FooterSlice';

interface Props {
  children: ReactElement[] | ReactElement;
}

function Layout({ children }: Props): ReactElement {
  return (
    <div className="bg-white site-container mx-auto py-64">
      <HeaderSlice />
      <main className="px-6 md:px-10 lg:px-10">{children}</main>
      <FooterSlice />
    </div>
  );
}
export default Layout;
