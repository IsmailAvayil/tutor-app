import { useState } from "react";
import DatePicker from "./DatePicker";

const CalenderButton = () => {
  const [isShowCalendar, setIsShowCalendar] = useState(false);
  const handleCalendarShow = () => setIsShowCalendar(true);
  return (
    <>
      {isShowCalendar ? (
        <DatePicker />
      ) : (
        <button
          onClick={handleCalendarShow}
          className="text-white font-semibold bg-info w-full py-2 rounded-md"
        >
          See Calendar
        </button>
      )}
    </>
  );
};

export default CalenderButton;
