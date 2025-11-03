import { Tabs } from "../../components/ui/Tabs";
import { tabNavigationMenus } from "../../data/TabNavigationMenus";

const Dashboard = () => {
  return (
    <>
      <Tabs
        tabNavigationMenus={tabNavigationMenus}
        defaultTab="overview"
        isFromDesktopView={true}
      />
    </>
  );
};

export default Dashboard;
