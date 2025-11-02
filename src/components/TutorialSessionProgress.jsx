import CompletedSession from "./CompletedSession";
import UpcomingSession from "./UpcomingSession";

const TutorialSessionProgress = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-4 my-6">
      {" "}
      <UpcomingSession />
      <CompletedSession />
    </div>
  );
};

export default TutorialSessionProgress;
