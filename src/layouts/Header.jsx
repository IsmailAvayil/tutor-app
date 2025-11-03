import Logo from "../components/Logo";
import UserProfile from "../components/UserProfile";
import Hamburger from "../components/Hamburger";
import HeaderNavigations from "../components/HeaderNavigations";
import Notifications from "../components/Notifications";

const Header = () => {
  return (
    <div className="flex   items-center   border-b border-gray-200 py-2 w-full">
      <Logo />
      <div className=" lg:hidden flex items-center justify-end w-full ">
        <Hamburger />
      </div>
      <div className="ml-8 px-4 hidden  lg:flex justify-between items-center w-full">
        <HeaderNavigations />
        <div className="flex items-center justify-end">
          <div className="flex gap-x-4">
            {" "}
            <UserProfile />
            <Notifications />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
