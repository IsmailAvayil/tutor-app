import React from "react";
import Card from "./Card";
import TutorStatus from "./TutorStatus";

const tutorStatusDatas = [
  {
    id: 1,
    session_date: "TODAY",
    tutors: [
      {
        reg_id: 21,
        name: "Sheila Moore",
        profile_image:
          "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        reg_id: 22,
        name: "Mackle Moore",
        profile_image:
          "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    teaching_mode: "Online",
    teaching_date: "FRIDAY, MAY 12",
    availability: "TODAY",
  },
  {
    id: 2,
    session_date: "TODAY",
    tutors: [
      {
        reg_id: 21,
        name: "Sheila Moore",
        profile_image:
          "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    teaching_mode: "In-house",
    teaching_date: "FRIDAY, MAY 12",
    availability: "TODAY",
  },
  {
    id: 3,
    session_date: "TODAY",
    tutors: [
      {
        reg_id: 21,
        name: "John F Kennedy",
        profile_image:
          "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    teaching_mode: "Online",
    teaching_date: "FRIDAY, MAY 12",
    availability: "IN 2 DAYS",
  },
];

const UpcomingSession = () => {
  return (
    <Card className="w-full lg:w-1/2 ">
      <h1 className="font-semibold text-info">Upcoming sessions this week</h1>
      <TutorStatus
        isUpcomingSession={true}
        tutorStatusDatas={tutorStatusDatas}
      />
    </Card>
  );
};

export default UpcomingSession;
