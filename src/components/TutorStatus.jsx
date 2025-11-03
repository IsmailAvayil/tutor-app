import SingleTutorStatusCard from "./SingleTutorStatusCard";

const TutorStatus = ({ isUpcomingSession, tutorStatusDatas }) => {
  return (
    <div className="flex flex-col gap-8 mt-6 lg:h-screen">
      {tutorStatusDatas.map((tutorStatusData, index) => (
        <SingleTutorStatusCard
          tutorStatusData={tutorStatusData}
          isUpcomingSession={isUpcomingSession}
          index={index + 1}
        />
      ))}
    </div>
  );
};

export default TutorStatus;
