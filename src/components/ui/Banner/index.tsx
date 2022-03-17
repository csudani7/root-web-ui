import React from 'react';

function Banner({ setBannerState, contents }: any) {
  return (
    <div className="bg-gray-700 w-full">
      <div className="mx-auto px-6 md:px-4 md:pl-8 xl:px-12">
        <div className="flex items-center justify-between py-2">
          <div className="mr-2">
            <div className="font-sans text-xs md:text-sm text-white leading-5 prismic-rich-text">
              {contents}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setBannerState(false)}
            className="focus:outline-none"
          >
            <span className="sr-only">Dismiss</span>
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
