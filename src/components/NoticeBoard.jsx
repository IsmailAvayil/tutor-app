import React from "react";

const NoticeBoard = () => {
  return (
    <div className="bg-white p-6">
      <h1 className="text-[14px] font-semibold  text-[#5F9EA0] text-center">
        Notice Board
      </h1>
      <ol class="relative border-s border-l-2 border-[#5F9EA0] dark:border-gray-700 my-6">
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-[#5F9EA0] rounded-full mt-1.5 -start-1.5 border border-[#5F9EA0]"></div>

          <div className="flex justify-between">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Rescheduled Session
            </h3>
            <time class="mb-1 text-sm font-semibold leading-none text-black dark:text-gray-500">
              Today
            </time>
          </div>

          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            This session has been rescheduled to 16th august, 2020 by student{" "}
            <line>Action</line>
          </p>
        </li>
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border-2  border-[#5F9EA0] dark:border-gray-900 dark:bg-gray-700"></div>
          {/* <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
           
          </time> */}

          <div className="flex justify-between">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              John Manor (Student)
            </h3>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March 2022
            </time>
          </div>

          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            I haven engagement on your propsed date. Could we rescheduled?
          </p>
        </li>

        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border-2  border-[#5F9EA0] dark:border-gray-900 dark:bg-gray-700"></div>

          <div className="flex justify-between">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Admin
            </h3>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              February 2022
            </time>
          </div>

          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Tutorial commences in 30 minus. Get ready
          </p>
        </li>

        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border-2 border-[#5F9EA0] dark:border-gray-900 dark:bg-gray-700"></div>

          <div className="flex justify-between">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Admin
            </h3>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              February 2022
            </time>
          </div>

          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Tutorial commences in 30 minus. Get ready
          </p>
        </li>
      </ol>
    </div>
  );
};

export default NoticeBoard;
