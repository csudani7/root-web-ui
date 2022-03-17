import React from 'react';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { isCookiesPolicyVisibleAtom } from '../../../recoils/CookiesPolicyRecoil';
import { CloseIcon, CokkieIcon } from '../Icon';
import { routes } from '../../../routes';

export default function CookiesPolicy() {
  const [isCookieBannerVisible, setIsCookieBannerVisible] = useRecoilState(
    isCookiesPolicyVisibleAtom
  );

  const declineCookiesPolicy = () => {
    setIsCookieBannerVisible(false);
  };

  const acceptCookiesPolicy = () => {
    setIsCookieBannerVisible(false);
  };

  return (
    <>
      {isCookieBannerVisible && (
        <div className="bg-royalBlue fixed w-72 md:w-82 bottom-2 left-2 px-2 pt-8 pb-6 z-30 border border-gray-100 box-border rounded-lg shadow-lg text-center text-sm">
          <span
            onClick={declineCookiesPolicy}
            className="absolute top-2.5 right-2.5 cursor-pointer"
          >
            <CloseIcon width={10} height={10} />
          </span>
          <div className="flex justify-between items-center">
            <div className="mx-2">
              <CokkieIcon />
            </div>
            <div className="ml-3 text-left text-white font-medium">
              We care about your data, and we{`'`}d love to use cookies to make
              your experience better.
            </div>
          </div>
          <div className="flex justify-between items-center pt-4 text-white">
            <div className="ml-2 cursor-pointer">
              <Link href={routes.privacyPolicy}>Privacy Policy</Link>
            </div>
            <div className="cursor-pointer">
              <span
                className="mr-2 py-0.5 px-2 border border-white"
                onClick={acceptCookiesPolicy}
              >
                Accept
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
