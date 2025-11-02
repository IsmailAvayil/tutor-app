"use client";
import React, { useContext, useState } from "react";

import TabsMenus from "../TabsMenus";
import { AppContext } from "../../context/TabsConext";

export const Tabs = ({
  tabs = [],
  defaultTab,
  onTabChange,
  isFromDesktopView,
}) => {
  // const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.value);
  const { activeTab, setActiveTab } = useContext(AppContext);

  const handleTabClick = (value) => {
    setActiveTab(value);
    onTabChange?.(value);
  };
  return (
    <div>
      {/* Tabs Header */}
      <div className="hidden lg:block">
        <TabsMenus
          tabs={tabs}
          handleTabClick={handleTabClick}
          activeTab={activeTab}
        />
      </div>

      {/* Tabs Content */}

      <div className="mt-4 ">
        {tabs.map(
          (tab) =>
            activeTab === tab.value && (
              <div key={tab.value} className="animate-fadeIn">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};
