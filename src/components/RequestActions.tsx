import React from "react";
import {
  BellIcon,
  XMarkIcon,
  ClockIcon,
  TagIcon,
} from "@heroicons/react/24/outline";

const RequestActions = () => {
  const handleClick = () => {
    alert("Accepted");
  };
  return (
    <>
      {" "}
      <div className="flex  justify-center gap-x-8 relative">
        <button
          onClick={handleClick}
          className="text-info font-semibold flex flex-col  items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>{" "}
          Accept
        </button>
        <button className="text-danger font-semibold flex flex-col  items-center cursor-pointer">
          <XMarkIcon className="h-6 w-6" />
          Decline
        </button>
        <button className="text-black font-semibold flex flex-col  items-center cursor-pointer">
          <ClockIcon className="h-6 w-6" />
          Propose new time
        </button>
        <button className="text-info font-semibold cursor-pointer flex-col  items-center hidden lg:flex">
          <TagIcon className="h-6 w-6" />
          Mark us tentative
        </button>
      </div>
    </>
  );
};

export default RequestActions;
