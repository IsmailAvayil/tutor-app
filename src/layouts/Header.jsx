import Logo from "../components/Logo";

import UserProfile from "../components/UserProfile";
import { BellIcon, Bars3Icon } from "@heroicons/react/24/outline";

import Hamburger from "../components/Hamburger";

import HeaderNavigations from "../components/HeaderNavigations";

const Header = () => {
  return (
    <div className="flex   items-center   border-b border-gray-200 py-2 w-full">
      <Logo />

      <div className=" lg:hidden flex items-center justify-end w-full ">
        <Hamburger />
      </div>

      <div className="ml-48 pl-4 hidden  lg:flex justify-between items-center w-full">
        <HeaderNavigations />
        <div className="flex items-center justify-end">
          <div className="flex gap-x-4">
            {" "}
            <UserProfile />
            <div className="relative flex items-center">
              <div className="bg-danger absolute top-0 right-0 text-white rounded-full w-3 h-3 flex items-center justify-center">
                <span className="text-[8px] bg-danger">2</span>
              </div>
              <BellIcon className="w-6 h-6 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
