import React from 'react';
import { storiesOf } from '@storybook/react';
import PageLayout from '.';
import HeaderData from './HeaderData';
import FooterData from './FooterData';

storiesOf('Layout/Page Layout', module).add('Page Layout', () => {
  return (
    <div className="bg-snow w-full h-screen">
      <PageLayout header={HeaderData} footer={FooterData}>
        <div className="h-screen p-96">Welcome to VigCheck</div>
      </PageLayout>
    </div>
  );
});
