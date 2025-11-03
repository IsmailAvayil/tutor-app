import { Overview } from "../pages/dashboard/sub-pages/Overview";

export const tabNavigationMenus = [
  {
    id: 1,
    label: "Overview",
    value: "overview",
    content: <Overview />,
  },
  {
    id: 2,
    label: "Sessions",
    value: "sessions",
    content: (
      <div className="flex items-center justify-center h-[calc(100vh-140px)]  ">
        Sessions content goes here.
      </div>
    ),
  },
  {
    id: 3,
    label: "Notifications",
    value: "notifications",
    content: (
      <div className="flex items-center justify-center h-[calc(100vh-140px)]  ">
        Notifications content goes here.
      </div>
    ),
  },
  {
    id: 4,
    label: "Media",
    value: "media",
    content: (
      <div className="flex items-center justify-center h-[calc(100vh-140px)]  ">
        Media content goes here.
      </div>
    ),
  },
  {
    id: 5,
    label: "Whiteboard",
    value: "whiteboard",
    content: (
      <div className="flex items-center justify-center h-[calc(100vh-140px)]  ">
        Whiteboard settings go here.
      </div>
    ),
  },
  {
    id: 6,
    label: "Account",
    value: "account",
    content: (
      <div className="flex items-center justify-center h-[calc(100vh-140px)]  ">
        Account settings go here.
      </div>
    ),
  },
];
