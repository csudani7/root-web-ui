import React from 'react';
import dynamic from 'next/dynamic';

import { SlackIcon } from '../components/ui/Icon';
import PromotionFooter from '../components/ui/PromotionFooter';

const WebHeader = dynamic(() => import('../components/ui/WebHeader'));
const PageLayout = dynamic(() => import('../components/layouts'));
const FeedbackSlice = dynamic(() => import('../components/layouts/Home/FeedbackSlice'));

function IndexPage() {
  return (
    <>
      <WebHeader />
      <PageLayout>
        <FeedbackSlice />

        <div className="grid grid-cols-1 gap-5 md:grid md:grid-cols-1 md:gap-5 lg:grid lg:grid-cols-2 lg:gap-5">
          <div>
            <PromotionFooter
              buttonText="View Courses"
              imagePosition="left"
              promotionImage={{ src: '/svg/promotion-image-one.svg', alt: 'promotion-photo' }}
              title="Interested in joining the next cohort?"
              bgColor="bg-gradient-to-r from-green-300 to-green-600"
              buttonBgColor="bg-gradient-to-r from-green-400 to-green-600"
              height="h-72"
              titleTextClass="text-black"
              buttonHeight="h-16"
              buttonWidth="w-60"
            />
          </div>
          <div>
            <PromotionFooter
              buttonText="Join"
              imagePosition="left"
              promotionImage={{ src: '/svg/promotion-image-two.svg', alt: 'promotion-photo' }}
              title="Join our Slack community"
              bgColor="bg-black"
              buttonBgColor="bg-white"
              height="h-72"
              buttonIcon={<SlackIcon />}
              buttonWidth="w-40"
              buttonHeight="h-16"
              titleTextClass="text-white"
            />
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export default IndexPage;
