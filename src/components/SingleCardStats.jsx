import React from "react";

const SingleCardStats = ({ cardStats }) => {
  return (
    <li
      className={`bg-[${
        cardStats.cardColour
      }] p-6 rounded-sm w-full  lg:w-1/3 ${
        cardStats?.id === 1
          ? "bg-[#5F9EA0]"
          : cardStats?.id === 2
          ? "bg-[#00FFFF]"
          : "bg-[#C0C0C0]"
      }
      }`}
    >
      <h2 className="text-[#ffffff] font-medium text-[14px]">
        {cardStats.name}
      </h2>
      <h1 className="text-[#ffffff] text-[22px] font-semibold">
        {cardStats.count}
      </h1>
    </li>
  );
};

export default SingleCardStats;
