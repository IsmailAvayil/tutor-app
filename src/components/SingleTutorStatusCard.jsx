import React from "react";
import { MapPinIcon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const SingleTutorStatusCard = ({
  tutorStatusData,
  index,
  isUpcomingSession,
}) => {
  return (
    <div key={tutorStatusData.id} className="grid grid-cols-12 ">
      <div className="col-span-1 flex items-start">
        {isUpcomingSession ? (
          index + "."
        ) : (
          <CheckCircleIcon className="w-6 h-6 text-[#5F9EA0]" />
        )}
      </div>
      <div className="col-span-8">
        {" "}
        <ul className="flex flex-col gap-2">
          <ul className="flex">
            <li className="text-gray-600 text-[11px] lg:text-[12px]">
              {tutorStatusData.tutors
                .map((tutor) =>
                  Array.isArray(tutor.name) ? tutor.name.join(", ") : tutor.name
                )
                .join(", ")}
            </li>
          </ul>

          <ul className="flex gap-4 items-center  ">
            {isUpcomingSession && (
              <button className="bg-[#5F9EA0] px-2 py-1 lg:px-4 lg:py-2 font-bold text-[8px] lg:text-[10px] text-white min-w-[60px] lg:min-w-[90px]">
                {" "}
                {tutorStatusData.availability}
              </button>
            )}

            <li className="font-semibold text-[10px] lg:text-[12px] text-black">
              {tutorStatusData.teaching_date}
            </li>
            <li className="text-[12px] lg:text-[16px] flex ">
              <MapPinIcon className="lg:w-6 lg:h-7 w-3 h-4    text-[#5F9EA0] " />
              {tutorStatusData.teaching_mode}
            </li>
          </ul>
        </ul>
      </div>

      <div class="flex col-span-2 items-center justify-center -space-x-1 overflow-hidden ">
        {tutorStatusData.tutors.map((tutor, index) => (
          <img
            key={index}
            src={tutor.profile_image}
            alt=""
            class="inline-block size-10  rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5"
          />
        ))}
      </div>
      <button className="col-span-1 lg:flex hidden items-center justify-center cursor-pointer hover:bg-gray-100">
        <EllipsisVerticalIcon className="w-4 h-4 lg:h-5 lg:w-5 text-[#5F9EA0]" />
      </button>
    </div>
  );
};

export default SingleTutorStatusCard;
