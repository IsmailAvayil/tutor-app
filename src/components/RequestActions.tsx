import React from "react";
import {
  CheckIcon,
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
          className="text-[#5F9EA0] font-semibold flex flex-col gap-1  items-center cursor-pointer hover:font-bold"
        >
          <CheckIcon className="h-6 w-6" />
          Accept
        </button>
        <button className="text-danger font-semibold flex flex-col gap-1  items-center cursor-pointer hover:font-bold">
          <XMarkIcon className="h-6 w-6" />
          Decline
        </button>
        <button className="text-black font-semibold flex flex-col gap-1  items-center cursor-pointer hover:font-bold">
          <ClockIcon className="h-6 w-6" />
          Propose new time
        </button>
        <button className="text-[#5F9EA0] font-semibold cursor-pointer flex-col gap-1 hover:font-bold  items-center hidden lg:flex">
          <TagIcon className="h-6 w-6" />
          Mark us tentative
        </button>
      </div>
    </>
  );
};

export default RequestActions;
