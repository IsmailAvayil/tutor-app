import SingleCardStats from "./SingleCardStats";

const statsCardDatas = [
  { id: 1, name: "Upcoming Tutorials", count: 10, cardColour: "bg-red-500" },
  {
    id: 2,
    name: "Number of Tutorial Hours Tracked Last Months",
    count: 39,
    cardColour: "bg-blue-500",
  },
  {
    id: 3,
    name: "Pending Tutorial Requests",
    count: 10,
    cardColour: "bg-green-500",
  },
];

const TutorialStats = () => {
  return (
    <>
      <ul className="flex lg:flex-row flex-col  gap-8">
        {statsCardDatas?.map((cardData) => (
          <SingleCardStats key={cardData.id} cardStats={cardData} />
        ))}
      </ul>
    </>
  );
};

export default TutorialStats;
