import clsx from 'clsx';
import React from 'react';
import { developersReviewData } from '../../../utils';
import Button from '../../ui/Button';
import CardWithTextGlow from '../../ui/CardWithTextGlow';
import LandingBanner from '../../ui/LandingBanner';
import PromotionSection from '../../ui/PromotionSection';
import SideBarTabs from '../../ui/SideBarTabs';

export default function SidebarTabsSlice() {
  const [activeTab, setActiveTab] = React.useState<string>('overview');
  const arrayOfTab = [
    { label: 'Overview', value: 'overview' },
    { label: 'Curriculum', value: 'curriculum' },
    { label: 'Schedule', value: 'schedule' },
    { label: 'Teacher', value: 'teacher' },
    { label: 'Alumni', value: 'alumni' },
    { label: 'Pricing', value: 'pricing' },
    { label: 'Next Cohort', value: 'next-cohort' },
    { label: 'FAQ', value: 'faq' },
  ];

  return (
    <div className="grid grid-rows-2 md:grid-cols-3 mb-24">
      <SideBarTabs
        tabTitle="typescript course"
        arrayOfTab={arrayOfTab}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        buttonText="Enroll now"
      />
      <div className="row-span-1 md:col-span-2 px-6 md:px-0">
        {activeTab === 'overview' && (
          <div>
            <PromotionSection
              buttonText="Learn More"
              imagePosition="down"
              promotionImage={{ src: '/png/hero-banner.png', alt: 'course-photo' }}
              subTitle="Overview"
              title="Build on your existing Javascript knowledge"
              content="This is an intermediate-level cohort-based course aimed at providing an exclusive and crisp learning experience to already proficient JavaScript developers. You will be:"
              bgColor="bg-transparant"
              buttonBgColor="bg-gradient-to-r from-lightGreen via-mediumSpringGreen to-aquamarine font-semibold"
              borderRadius="rounded-lg"
              listOfFeature={[
                { text: '📈 Getting to an intermediate level of TypeScript' },
                { text: '💻 Practicing with examples and activities' },
                { text: '📅 Attending live sessions on Zoom' },
                { text: '👥 Connecting with like-minded learners' },
              ]}
              isButtonShow={false}
            />
          </div>
        )}
        {activeTab === 'curriculum' && <div>curriculum</div>}
        {activeTab === 'schedule' && <div>schedule</div>}
        {activeTab === 'teacher' && (
          <div>
            <div className="px-6 md:px-10 lg:px-10">
              <LandingBanner
                isButtonShow={true}
                title="Learn online with experienced"
                content="Manish Poduval is a core software engineer with experience in working for companies like Toppr.com, Mediaocean and Persistent."
                sectionImagesrc="/png/cartoon-emoji.png"
                alt="cartoon-emoji"
                buttonBgColor="bg-gradient-to-r from-lightGreen via-mediumSpringGreen to-aquamarine font-semibold"
                buttonText="About Us"
                imagePosition={'right'}
                subTitle="teacher"
                noteText={undefined}
              />
            </div>
          </div>
        )}
        {activeTab === 'alumni' && (
          <div className="px-10">
            <div className="text-easternBlue uppercase text-base font-semibold tracking-wide font-inter px-6 pt-6 pb-3">
              alumni
            </div>
            <div className="font-sora font-semibold text-4xl text-left text-titleBlack px-6 pb-3">
              See what 2,000+ talented developers from across the globe said...
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2">
              {[...Array(4)].map((item, index) => (
                <CardWithTextGlow
                  key={index}
                  feedBackText={developersReviewData.feedBackText}
                  authorImage={developersReviewData.authorImage}
                  authorName={developersReviewData.authorName}
                  authorDesignation={developersReviewData.authorDesignation}
                />
              ))}
            </div>
          </div>
        )}
        {activeTab === 'pricing' && <div>pricing</div>}
        {activeTab === 'next-cohort' && <div>next-cohort</div>}
        {activeTab === 'faq' && <div>faq</div>}
      </div>
    </div>
  );
}
