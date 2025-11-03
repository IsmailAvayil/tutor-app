import {
  BellIcon,
  FilmIcon,
  QueueListIcon,
  Squares2X2Icon,
  UserIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";

const TabsMenus = ({ tabNavigationMenus, activeTab, handleTabClick }) => {
  return (
    <div className="flex  lg:flex-row flex-col  gap-x-12 bg-white pl-4 mb-12 lg:mb-0 ">
      <h1 className="text-md font-semibold py-4 mr-46 text-nowrap">
        {" "}
        Tutor Dashboard
      </h1>
      {tabNavigationMenus.map((tabNavigationMenu) => (
        <button
          key={tabNavigationMenu.value}
          onClick={() => handleTabClick(tabNavigationMenu.value)}
          className={`${
            activeTab === tabNavigationMenu.value
              ? "text-[#5F9EA0] lg:border-b-3 border-[#5F9EA0] "
              : "text-gray-500 hover:text-gray-700"
          }   py-4 text-sm font-medium transition-all duration-200 relative flex items-center gap-2`}
        >
          {tabNavigationMenu.id === 1 ? (
            <Squares2X2Icon className="w-6 h-6" />
          ) : tabNavigationMenu.id === 2 ? (
            <QueueListIcon className="w-6 h-6" />
          ) : tabNavigationMenu?.id === 3 ? (
            <BellIcon className="w-6 h-6" />
          ) : tabNavigationMenu?.id === 4 ? (
            <FilmIcon className="w-6 h-6" />
          ) : tabNavigationMenu?.id === 5 ? (
            <WindowIcon className="w-6 h-6" />
          ) : tabNavigationMenu?.id === 6 ? (
            <UserIcon className="w-6 h-6" />
          ) : (
            "null"
          )}
          {tabNavigationMenu.label}
        </button>
      ))}
    </div>
  );
};

export default TabsMenus;
