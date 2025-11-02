import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const DatePicker = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <div className="p-4 bg-white flex justify-center rounded-2xl shadow-md w-full">
      <DayPicker
        navLayout="around"
        selected={selected}
        onSelect={setSelected}
        mode="single"
      />
    </div>
  );
};

export default DatePicker;
