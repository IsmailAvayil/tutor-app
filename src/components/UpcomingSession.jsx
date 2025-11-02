import React from "react";
import Card from "./Card";
import TutorStatus from "./TutorStatus";

const UpcomingSession = () => {
  return (
    <Card className="w-full lg:w-1/2 ">
      <h1 className="font-semibold text-info">Upcoming sessions this week</h1>
      <TutorStatus isUpcomingSession={true} />
    </Card>
  );
};

export default UpcomingSession;
