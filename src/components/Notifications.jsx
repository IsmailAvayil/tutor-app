import { BellIcon } from "@heroicons/react/24/outline";

const Notifications = () => {
  return (
    <div className="relative flex items-center">
      <div className="bg-danger absolute top-0 right-0 text-white rounded-full w-3 h-3 flex items-center justify-center">
        <span className="text-[8px] bg-danger">2</span>
      </div>
      <div className="flex items-center justify-between hover:bg-[#5F9EA0] hover:text-white  rounded-full">
        <BellIcon className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default Notifications;
