import React, { useEffect } from "react";
import TutorialStats from "../../../components/TutorialStats";
import TutorialSessionProgress from "../../../components/TutorialSessionProgress";
import DatePicker from "../../../components/DatePicker";
import NewTutorRequest from "../../../components/Alerts/NewTutorRequest";
import NoticeBoard from "../../../components/NoticeBoard";
import CalenderButton from "../../../components/CalenderButton";

export const Overview = () => {
  const [haveTutorRequest, setHaveTutorRequest] = React.useState(false);
  useEffect(() => {
    setTimeout(() => setHaveTutorRequest(true), 3000);
  }, [haveTutorRequest]);

  return (
    <>
      {haveTutorRequest && (
        <NewTutorRequest setHaveTutorRequest={setHaveTutorRequest} />
      )}
      <div className="flex lg:flex-row flex-col gap-5 ">
        <div className="flex flex-col w-full lg:w-[75%]">
          <TutorialStats />
          <TutorialSessionProgress />
        </div>
        <div className="lg:w-[25%] w-full flex flex-col gap-y-4">
          <div className="hidden lg:block">
            <DatePicker />
          </div>
          <div className="block lg:hidden">
            <CalenderButton />
          </div>

          <NoticeBoard />
        </div>
      </div>
    </>
  );
};
