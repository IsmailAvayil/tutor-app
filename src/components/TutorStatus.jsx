import SingleTutorStatusCard from "./SingleTutorStatusCard";

const TutorStatusDatas = [
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

const TutorStatus = ({ isUpcomingSession }) => {
  return (
    <div className="flex flex-col gap-8 mt-6">
      {TutorStatusDatas.map((card, index) => (
        <SingleTutorStatusCard
          tutorStatusData={card}
          isUpcomingSession={isUpcomingSession}
          index={index + 1}
        />
      ))}
    </div>
  );
};

export default TutorStatus;
