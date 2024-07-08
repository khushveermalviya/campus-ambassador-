import React from 'react';

const Steps = () => {
  return (
    <div className="bg-gray-900 text-white p-10 overflow-hidden">
      <h1 className="text-4xl font-bold text-center mb-10">
        You are just 3 Steps away from becoming a part of this{' '}
        <span className="border-b-2 border-white">JOURNEY</span>
      </h1>
      <ol className="flex justify-center items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse">
        <li className="flex items-center text-blue-600 dark:text-blue-500">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            1
          </span>
          Fill in the google form <span className="hidden sm:inline-flex sm:ms-2">form</span>
          <svg
            className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
        <li className="flex items-center">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
          </span>
          You will receive  <span className="hidden sm:inline-flex sm:ms-2">E-Mail</span>
          <svg
            className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
        <li className="flex items-center">
          <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
          </span>
          Get your referral code
        </li>
      </ol>

      {/* Responsive Images Section */}
      <div className="flex flex-wrap justify-center mt-8">
        <img
          className="w-52 sm:w-1/2 lg:w-1/3 mx-4 my-2 h-auto"
         src="ss2.png"
          alt="Image 1"
        />
        <img
          className="w-full sm:w-1/2 lg:w-1/3 mx-4 my-2"
    src="ss2.png"
          alt="Image 2"
        />
        <img
          className="w-full sm:w-1/2 lg:w-1/3 mx-4 my-2"
          src="ss2.png"
          alt="Image 3"
        />
      </div>
    </div>
  );
};

export default Steps;
