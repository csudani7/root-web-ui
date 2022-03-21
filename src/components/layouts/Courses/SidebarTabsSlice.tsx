import React from 'react';

import {
  courseTimelineData,
  curriculumData,
  developersReviewData,
  nextCohortsData,
} from '../../../utils';
import Accordian from '../../ui/Accordian';
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
    <div className="grid md:grid-cols-3 mb-24">
      <SideBarTabs
        tabTitle="typescript course"
        arrayOfTab={arrayOfTab}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        buttonText="Enroll now"
      />
      <div className="md:col-span-2 px-6 md:px-0">
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
        {activeTab === 'curriculum' && (
          <div className="md:px-10 lg:px-10">
            <div className="py-8">
              <div className="text-easternBlue uppercase text-base font-semibold tracking-wide font-inter pb-0 md:pb-4">
                curriculum
              </div>
              <div className="font-sora text-3xl md:text-4xl text-left font-semibold text-titleBlack leading-8 tracking-wider pb-0 md:pb-4">
                What You’ll Learn
              </div>
              <div className="font-inter text-titleBlack text-base font-medium">
                These are the topics in TypeScript we’ll cover in 2 days of live lectures.
              </div>
            </div>
            {curriculumData.map((data, index) => (
              <div className="my-6" key={index}>
                <div className="border-solid border-3 border-easternBlue rounded-lg md:p-6 lg:p-6 p-6 items-center">
                  <div className="text-xl font-semibold text-black leading-7.5">{data.topic}</div>
                  {data.subTopics.length > 0 && (
                    <ul className="list-disc pt-4 px-6 md:px-6 lg:px-6">
                      {data.subTopics.map((items, index) => (
                        <li className="text-base font-medium text-titleBlack leading-6" key={index}>
                          {items}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'schedule' && (
          <div>
            <div className="pb-8 px-10">
              <div className="text-easternBlue uppercase text-base font-semibold tracking-wide font-inter">
                schedule
              </div>
              <div className="font-sora text-2xl md:text-4xl lg:text-4xl text-left font-semibold text-titleBlack leading-8 tracking-wider w-full md:w-1/2 py-6">
                Course timeline
              </div>
              <div className="font-inter text-titleBlack text-base font-medium">
                The course is done with a mix of live lectures, activities and Q&As.
              </div>
            </div>
            <div className="grid grid-cols-2 divide-x-2 divide-easternBlue">
              {courseTimelineData.map((data, index) => (
                <div key={index} className="px-2 md:px-10">
                  <div className="font-inter font-medium text-2xl leading-9 pb-4">
                    {data.heading}
                  </div>
                  <div>
                    {data.details.map((item, index) => (
                      <div key={index} className="font-medium text-base leading-10">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
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
        {activeTab === 'pricing' && (
          <div className="lg:px-10 md:px-10 md:pt-0 lg:pt-0 pt-12">
            <div className="text-easternBlue uppercase text-base font-semibold tracking-wide font-inter">
              pricing
            </div>
            <div className="font-sora text-2xl md:text-4xl lg:text-4xl text-left font-semibold text-titleBlack leading-8 tracking-wider w-full md:w-1/2 py-6">
              Heading pricing
            </div>
            <div className="font-inter text-titleBlack text-base font-medium">
              The course is done with a mix of live lectures, activities and Q&As.
            </div>
            <div className="font-medium text-2xl leading-9 pt-6">$1000</div>
          </div>
        )}
        {activeTab === 'next-cohort' && (
          <div className="lg:px-10 md:px-10 md:pt-0 lg:pt-0 pt-12">
            <div className="text-easternBlue uppercase text-base font-semibold tracking-wide font-inter">
              next cohort
            </div>
            <div className="font-sora text-2xl md:text-4xl lg:text-4xl font-semibold text-titleBlack leading-8 tracking-wider w-full py-6">
              Here are the upcoming cohorts
            </div>
            <div className="font-inter text-titleBlack text-base font-medium leading-6">
              We cap our cohorts at 10 students.
            </div>
            <div className="grid grid-cols-1 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 mt-10">
              {nextCohortsData.map((data, index) => (
                <div className="mb-12" key="index">
                  <div className="text-easternBlue uppercase text-base font-semibold tracking-wide font-inter">
                    {data.title}
                  </div>
                  <div className="font-normal text-3xl leading-8 mb-8 mt-4">{data.date}</div>
                  <Button className="bg-transparant border border-lightGreen" size="medium">
                    <div className="flex justify-center items-center">Enroll Now </div>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'faq' && (
          <>
            <div className="lg:px-10 md:px-10 md:pt-0 lg:pt-0 pt-12 mb-12">
              <div className="text-easternBlue uppercase text-base font-semibold tracking-wide font-inter">
                question
              </div>
              <div className="font-sora text-2xl md:text-4xl lg:text-4xl font-semibold text-titleBlack leading-8 tracking-wider w-full py-6">
                Have questions about this course?
              </div>
              <div className="font-inter text-titleBlack text-base font-medium leading-6 mb-6">
                These are the topics in TypeScript we’ll cover in 2 days of live lectures.{' '}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-8">
                <Button
                  className={
                    'bg-gradient-to-r from-lightGreen via-mediumSpringGreen to-aquamarine font-semibold'
                  }
                  size="medium"
                >
                  <div className="flex justify-center items-center">Contact</div>
                </Button>
              </div>
            </div>
            <div className="lg:px-10 md:px-10 md:pt-0 lg:pt-0 ">
              {[...Array(3)].map((index) => (
                <Accordian
                  key={index}
                  question={'Question'}
                  answer={
                    'Answer answer answer Answer answer answer Answer answer answer Answer answer answer Answer answer answerAnswer answer answerAnswer answer answerAnswer answer answerAnswer answer answer'
                  }
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
