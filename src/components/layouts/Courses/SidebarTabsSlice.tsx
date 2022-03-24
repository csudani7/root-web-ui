import React from 'react';
import clsx from 'clsx';

import {
  courseTimelineData,
  curriculumData,
  developersReviewData,
  nextCohortsData,
  accordianData,
} from '../../../utils';
import Accordian from '../../ui/Accordian';
import Button from '../../ui/Button';
import CardWithTextGlow from '../../ui/CardWithTextGlow';
import LandingBanner from '../../ui/LandingBanner';
import PromotionSection from '../../ui/PromotionSection';
import SideBarTabs from '../../ui/SideBarTabs';

export interface Props {
  isSecondVariant: boolean;
  selectedCourse: string;
  arrayOfTab: Array<{ label: string; value: string }>;
  isCourseV2?: boolean;
}

export default function SidebarTabsSlice({
  selectedCourse,
  isSecondVariant,
  arrayOfTab,
  isCourseV2,
}: Props) {
  const [activeTab, setActiveTab] = React.useState<string>('overview');

  return (
    <div
      className={clsx(
        isCourseV2 ? 'bg-titleBlack grid md:grid-cols-3 py-24' : 'grid md:grid-cols-3 mb-24',
      )}
    >
      <div>
        <SideBarTabs
          tabTitle={`${selectedCourse} course`}
          arrayOfTab={arrayOfTab}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          buttonText="Enroll now"
          isCourseV2={isCourseV2}
        />
      </div>
      <div className="md:col-span-2 px-6 md:px-0">
        <div id="overview" className="py-10 -mx-5">
          <PromotionSection
            buttonText="Learn More"
            imagePosition="down"
            subTitle="Overview"
            promotionImage={{ src: '/png/hero-banner.png', alt: 'course-photo' }}
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
            isSecondVariant={isSecondVariant}
            titleTextClass={isCourseV2 ? 'text-white' : 'text-titleBlack'}
            subTitleTextClass="text-easternBlue"
            isCourseV2={isCourseV2}
          />
        </div>
        <div className="md:px-10 lg:px-10 py-10" id="curriculum">
          <div className="py-8">
            <div className="text-easternBlue uppercase text-base font-semibold tracking-wide font-inter pb-4 md:pb-4">
              curriculum
            </div>
            <div
              className={clsx(
                isCourseV2 ? 'text-white' : 'text-titleBlack',
                'font-sora text-3xl md:text-4xl text-left font-semibold  leading-8 tracking-wider pb-4 md:pb-4',
              )}
            >
              What You’ll Learn
            </div>
            <div
              className={clsx(
                isCourseV2 ? 'text-white' : 'text-titleBlack',
                'font-inter  text-base font-medium',
              )}
            >
              These are the topics in TypeScript we’ll cover in 2 days of live lectures.
            </div>
          </div>
          {curriculumData.map((data, index) => (
            <div className="my-6" key={index}>
              <div
                className={clsx(
                  isCourseV2 ? 'border-aqua' : 'border-easternBlue',
                  'border-solid border-2  rounded-lg md:p-6 lg:p-6 p-6 items-center',
                )}
              >
                <div
                  className={clsx(
                    isCourseV2 ? 'text-white' : 'text-titleBlack',
                    'text-xl font-semibold leading-7.5',
                  )}
                >
                  {data.topic}
                </div>
                {data.subTopics.length > 0 && (
                  <ul className="list-disc pt-4 px-6 md:px-6 lg:px-6">
                    {data.subTopics.map((items, index) => (
                      <li
                        className={clsx(
                          isCourseV2 ? 'text-white' : 'text-titleBlack',
                          'text-base font-medium leading-6',
                        )}
                        key={index}
                      >
                        {items}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
        <div id="schedule" className="py-10">
          <div className="pb-8 lg:px-10">
            <div className="text-easternBlue uppercase text-base font-semibold tracking-wide font-inter">
              schedule
            </div>
            <div
              className={clsx(
                isCourseV2 ? 'text-white' : 'text-titleBlack',
                'font-sora text-2xl md:text-4xl lg:text-4xl text-left font-semibold leading-8 tracking-wider w-full md:w-1/2 py-6',
              )}
            >
              Course timeline
            </div>
            <div
              className={clsx(
                isCourseV2 ? 'text-white' : 'text-titleBlack',
                'font-inter text-base font-medium',
              )}
            >
              The course is done with a mix of live lectures, activities and Q&As.
            </div>
          </div>
          <div className="grid grid-cols-2 divide-x-2 divide-easternBlue">
            {courseTimelineData.map((data, index) => (
              <div key={index} className="px-2 md:px-10">
                <div
                  className={clsx(
                    isCourseV2 ? 'text-white' : 'text-titleBlack',
                    'font-inter font-medium text-2xl leading-9 pb-4',
                  )}
                >
                  {data.heading}
                </div>
                <div>
                  {data.details.map((item, index) => (
                    <div
                      key={index}
                      className={clsx(
                        isCourseV2 ? 'text-white' : 'text-titleBlack',
                        'font-medium text-base leading-10',
                      )}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="teacher" className="py-10">
          <div className="px-2 md:px-10 lg:px-10">
            <LandingBanner
              isButtonShow={true}
              title={isCourseV2 ? 'Meet your instructor ' : 'Learn online with experienced'}
              content="Manish Poduval is a core software engineer with experience in working for companies like Toppr.com, Mediaocean and Persistent."
              sectionImagesrc="/png/cartoon-emoji.png"
              alt="cartoon-emoji"
              buttonBgColor={clsx(
                isCourseV2
                  ? 'bg-gradient-to-r from-aqua to-dodgerBlue font-semibold'
                  : 'bg-gradient-to-r from-lightGreen via-mediumSpringGreen to-aquamarine font-semibold',
              )}
              buttonText="Read More"
              imagePosition={'right'}
              subTitle="teacher"
              noteText={undefined}
              isCourseV2={isCourseV2}
              subTitlePosition="up"
              titleTextClass={isCourseV2 ? 'text-white' : 'text-titleBlack'}
            />
          </div>
        </div>
        <div className="lg:px-10 py-10" id="alumni">
          <div className="text-easternBlue uppercase text-base font-semibold tracking-wide font-inter lg:px-0 pt-6 pb-3">
            alumni
          </div>
          <div
            className={clsx(
              isCourseV2 ? 'text-white' : 'text-titleBlack',
              'font-sora font-semibold text-4xl text-left lg:px-0 pb-3',
            )}
          >
            See what 2,000+ talented developers from across the globe said...
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-10">
            {[...Array(4)].map((item, index) => (
              <CardWithTextGlow
                key={index}
                feedBackText={developersReviewData.feedBackText}
                authorImage={developersReviewData.authorImage}
                authorName={developersReviewData.authorName}
                authorDesignation={developersReviewData.authorDesignation}
                isCourseV2={isCourseV2}
              />
            ))}
          </div>
        </div>
        <div className="lg:px-10 md:px-10 py-14" id="pricing">
          <div className="text-easternBlue uppercase text-base font-semibold tracking-wide font-inter">
            pricing
          </div>
          <div
            className={clsx(
              isCourseV2 ? 'text-white' : 'text-titleBlack',
              'font-sora text-2xl md:text-4xl lg:text-4xl text-left font-semibold leading-8 tracking-wider w-full md:w-1/2 py-6',
            )}
          >
            {isCourseV2 ? '$0 for the 2 day course' : 'Heading pricing'}
          </div>
          <div
            className={clsx(
              isCourseV2 && 'hidden',
              'font-inter text-titleBlack text-base font-medium',
            )}
          >
            The course is done with a mix of live lectures, activities and Q&As.
          </div>
          <div className={clsx(isCourseV2 && 'hidden', 'font-medium text-2xl leading-9 pt-6')}>
            $1000
          </div>
          {isCourseV2 && (
            <Accordian
              question={'Pricing tktktk'}
              answer={
                'Answer answer answer Answer answer answerAnswer answer answerAnswer answer answerAnswer answer answerAnswer answer answerAnswer answer answerAnswer answer answer'
              }
              isCourseV2={isCourseV2}
            />
          )}
        </div>
        <div className="lg:px-10 md:px-10 py-12" id="next-cohort">
          <div className="text-easternBlue uppercase text-base font-semibold tracking-wide font-inter">
            next cohort
          </div>
          <div
            className={clsx(
              isCourseV2 ? 'text-white' : 'text-titleBlack',
              'font-sora text-2xl md:text-4xl lg:text-4xl font-semibold leading-8 tracking-wider w-full py-6',
            )}
          >
            Here are the upcoming cohorts
          </div>
          <div
            className={clsx(
              isCourseV2 ? 'text-white' : 'text-titleBlack',
              'font-inter text-base font-medium leading-6',
            )}
          >
            We cap our cohorts at 10 students.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 mt-10">
            {nextCohortsData.map((data, index) => (
              <div className="mb-12" key={index}>
                <div className="text-easternBlue uppercase text-base font-semibold tracking-wide font-inter">
                  {data.title}
                </div>
                <div
                  className={clsx(
                    isCourseV2 ? 'text-white' : 'text-titleBlack',
                    'font-normal text-3xl leading-8 mb-8 mt-4',
                  )}
                >
                  {data.date}
                </div>
                <Button
                  className={clsx(
                    isCourseV2
                      ? 'bg-transparant border border-aqua'
                      : 'bg-transparant border border-lightGreen',
                  )}
                  size="medium"
                >
                  <div
                    className={clsx(
                      isCourseV2 ? 'text-white' : 'text-titleBlack',
                      'flex justify-center items-center',
                    )}
                  >
                    Enroll Now{' '}
                  </div>
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div id="faq" className="py-10">
          <div className="lg:px-10 md:px-10 md:pt-0 lg:pt-0 pt-12 mb-12">
            <div className="text-easternBlue uppercase text-base font-semibold tracking-wide font-inter">
              question
            </div>
            <div
              className={clsx(
                isCourseV2 ? 'text-white' : 'text-titleBlack',
                'font-sora text-2xl md:text-4xl lg:text-4xl font-semibold leading-8 tracking-wider w-full py-6',
              )}
            >
              Have questions about this course?
            </div>
            <div
              className={clsx(
                isCourseV2 ? 'text-white' : 'text-titleBlack',
                'font-inter text-base font-medium leading-6 mb-6',
              )}
            >
              These are the topics in TypeScript we’ll cover in 2 days of live lectures.{' '}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
              <Button
                className={clsx(
                  'font-semibold',
                  isCourseV2
                    ? 'bg-gradient-to-r from-aqua to-dodgerBlue'
                    : 'bg-gradient-to-r from-lightGreen via-mediumSpringGreen to-aquamarine',
                )}
                size="medium"
              >
                <div className="flex justify-center font-semibold text-xl items-center">
                  Contact
                </div>
              </Button>
            </div>
          </div>
          <div className={clsx(isCourseV2 && 'hidden', 'lg:px-10 md:px-10 md:pt-0 lg:pt-0')}>
            {accordianData.map((item, index) => (
              <Accordian
                key={index}
                question={item.question}
                answer={item.answer}
                isCourseV2={isCourseV2}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
