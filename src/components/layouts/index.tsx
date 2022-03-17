import React, { ReactElement } from 'react';
import HeaderSlice from './HeaderSlice';
import FooterSlice from './FooterSlice';

interface Props {
  children: ReactElement[] | ReactElement;
  invertedStyle?: boolean;
}

function Layout({ children, invertedStyle }: Props): ReactElement {
  return (
    <>
      <div className="bg-gray-450">
        <div className="bg-white site-container mx-auto">
          <HeaderSlice invertedStyle={!!invertedStyle} />
          <main className="pb-12 md:pb-16 lg:pb-20 xl:pb-24 pt-20 lg:pt-64 px-3 md:px-5 lg:px-24">
            {children}
          </main>
          <FooterSlice />
        </div>
      </div>
    </>
  );
}
export default Layout;
