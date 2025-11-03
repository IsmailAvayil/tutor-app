"use client";
import { useContext } from "react";

import TabsMenus from "../TabsMenus";
import { AppContext } from "../../context/TabsConext";

export const Tabs = ({ tabNavigationMenus = [], onTabChange }) => {
  const { activeTab, setActiveTab } = useContext(AppContext);

  const handleTabClick = (value) => {
    setActiveTab(value);
    onTabChange?.(value);
  };
  return (
    <>
      <div className="hidden lg:block">
        <TabsMenus
          tabNavigationMenus={tabNavigationMenus}
          handleTabClick={handleTabClick}
          activeTab={activeTab}
        />
      </div>

      <div className="mt-4 ">
        {tabNavigationMenus?.map(
          (tabNavigationMenu) =>
            activeTab === tabNavigationMenu.value && (
              <div key={tabNavigationMenu.value} className="animate-fadeIn">
                {tabNavigationMenu.content}
              </div>
            )
        )}
      </div>
    </>
  );
};
