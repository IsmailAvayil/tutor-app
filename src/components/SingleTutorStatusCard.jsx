import React from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon, MapPinIcon } from "@heroicons/react/24/solid";

const SingleTutorStatusCard = ({
  tutorStatusData,
  index,
  isUpcomingSession,
}) => {
  console.log("tutorstatusData", tutorStatusData);
  return (
    <div key={tutorStatusData.id} className="grid grid-cols-12 ">
      <div className="col-span-1 flex items-start">
        {isUpcomingSession ? (
          index + "."
        ) : (
          <CheckCircleIcon className="w-6 h-6 text-[#5F9EA0]" />
        )}
      </div>
      <div className="col-span-7 ">
        {" "}
        <ul className="flex flex-col gap-1">
          <ul className="flex">
            <li className="text-gray-600 text-[11px] lg:text-[14px] font-semibold">
              {tutorStatusData.tutors
                .map((tutor) =>
                  Array.isArray(tutor.name) ? tutor.name.join(", ") : tutor.name
                )
                .join(", ")}{" "}
              {tutorStatusData?.grade && "| " + tutorStatusData?.grade}
            </li>
          </ul>

          <ul className="flex gap-4 items-center  ">
            {isUpcomingSession && (
              <button className="bg-[#5F9EA0] px-1 py-1 lg:px-2 lg:py-2 font-bold text-[6px] lg:text-[9px] text-white min-w-[60px] lg:min-w-[90px]">
                {" "}
                {tutorStatusData.availability}
              </button>
            )}

            <li className="font-semibold text-[6px] lg:text-[10px] text-black">
              {tutorStatusData.teaching_date}
            </li>
            <li className="text-[6px] lg:text-[10px] flex items-center ">
              <MapPinIcon className="lg:w-6 lg:h-7 w-3 h-4    text-[#5F9EA0] " />
              {tutorStatusData.teaching_mode}
            </li>
          </ul>
        </ul>
      </div>

      <div class="flex col-span-3 items-center justify-center -space-x-1 overflow-hidden ">
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
        <EllipsisVerticalIcon className="w-4 h-4 lg:h-6 lg:w-6 text-[#5F9EA0]" />
      </button>
    </div>
  );
};

export default SingleTutorStatusCard;
