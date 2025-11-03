import { useState, useContext } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import HeaderNavigations from "./HeaderNavigations";
import UserProfile from "./UserProfile";
import TabsMenus from "./TabsMenus";

import { AppContext } from "../context/TabsConext";
import { tabNavigationMenus } from "../data/TabNavigationMenus";

const Hamburger = () => {
  const [isOpenLeftMenus, setIsOpenLeftMenus] = useState(false);
  const { activeTab, setActiveTab } = useContext(AppContext);

  const handleTabClick = (value) => {
    setActiveTab(value);
    onTabChange?.(value);
  };
  return (
    <>
      {isOpenLeftMenus ? (
        <XMarkIcon
          className="w-6 h-6"
          onClick={() => setIsOpenLeftMenus(!isOpenLeftMenus)}
        />
      ) : (
        <button onClick={() => setIsOpenLeftMenus(!isOpenLeftMenus)}>
          <Bars3Icon className="w-6 h-6" />
        </button>
      )}

      {isOpenLeftMenus && (
        <div className="absolute top-16 left-0 w-1/2 h-full bg-white z-10">
          <UserProfile />
          <TabsMenus
            tabNavigationMenus={tabNavigationMenus}
            handleTabClick={handleTabClick}
            activeTab={activeTab}
          />

          <HeaderNavigations />
        </div>
      )}
    </>
  );
};

export default Hamburger;
