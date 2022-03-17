import React from 'react';
import dynamic from 'next/dynamic';
import WebHeader from '../components/ui/WebHeader';
import CardWithTextGlow from '../components/ui/CardWithTextGlow';
import { developersReviewData } from '../utils';

const PageLayout = dynamic(() => import('../components/layouts'));

function IndexPage() {
  return (
    <>
      <WebHeader />
      <PageLayout>
        <div className="grid lg:grid-cols-4 md:grid-cols-2">
          {[...Array(8)].map(() => (
            <CardWithTextGlow
              feedBackText={developersReviewData.feedBackText}
              authorImage={developersReviewData.authorImage}
              authorName={developersReviewData.authorName}
              authorDesignation={developersReviewData.authorDesignation}
            />
          ))}
        </div>
      </PageLayout>
    </>
  );
}

export default IndexPage;
