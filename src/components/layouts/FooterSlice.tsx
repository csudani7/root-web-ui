import React from 'react';
import { LinkProps } from '../../types/common';
import Footer from '../Footer';

export default function FooterSlice() {
  const firstColumnLinks: Array<LinkProps> = [
    { label: 'Live Courses', link: '/courses/typescript' },
    { label: 'About Us', link: '/about/manish' },
    { label: 'Contact Us', link: '/contact' },
  ];

  const secondColumnLinks: Array<LinkProps> = [
    { label: 'Instagram', link: '/courses/typescript' },
    { label: 'LinkedIn', link: '/about/manish' },
    { label: 'Twitter', link: '/contact' },
  ];

  return (
    <Footer
      promotionText="We are fully bootstrapped and we are not driven by money. We happily teach developers, taking a 100% learn-by-doing approach with a zero powerpoint policy."
      firstColumnLinks={firstColumnLinks}
      secondColumnLinks={secondColumnLinks}
      copyRightText="© Root Ltd 2022"
    />
  );
}
