import React from "react";
import RequestActions from "../RequestActions";
import { XMarkIcon } from "@heroicons/react/24/outline";

const newTutorRequestData = [
  {
    id: 1,
    client_name: "Sheila Pratt",
    date: "16 August, 2022",
    time_duration: "8:00AM - 9:00AM",
  },
];

const NewTutorRequest = ({ setHaveTutorRequest }) => {
  return (
    <div className="flex lg:flex-row flex-col gap-12 p-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 my-6 relative">
      <div className="text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 flex gap-x-3">
        <img
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h1 className="text-[#5F9EA0] font-bold">Tutor Request</h1>
          {newTutorRequestData.map((card) => (
            <ul
              key={card.id}
              className="grid lg:grid-cols-3 grid-cols-1 gap-4 font-semibold"
            >
              <li className="">Client : {card.client_name}</li>
              <li>Date : {card.date}</li>
              <li>Time : {card?.time_duration}</li>
            </ul>
          ))}
        </div>
      </div>
      <RequestActions />
      <button
        className="hover:bg-red hover:text-black rounded-full "
        onClick={() => setHaveTutorRequest(false)}
      >
        {" "}
        <XMarkIcon className="h-5 w-5 absolute top-2 right-2 " />
      </button>
    </div>
  );
};

export default NewTutorRequest;
