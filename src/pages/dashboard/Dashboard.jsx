import React from "react";
import Card from "../../components/Card";
import { Tabs } from "../../components/ui/Tabs";
import { tabs } from "../../data/TabNavigationData";

const Dashboard = () => {
  return (
    <div className="">
      <Tabs tabs={tabs} defaultTab="overview" isFromDesktopView={true} />
    </div>
  );
};

export default Dashboard;
