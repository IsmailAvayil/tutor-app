import { Overview } from "../pages/dashboard/sub-pages/Overview";

export const tabs = [
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
    content: <div>Sessions content goes here.</div>,
  },
  {
    id: 3,
    label: "Notifications",
    value: "notifications",
    content: <div>Notifications content goes here.</div>,
  },
  {
    id: 4,
    label: "Media",
    value: "media",
    content: <div>Media content goes here.</div>,
  },
  {
    id: 5,
    label: "Account",
    value: "account",
    content: <div>Account settings go here.</div>,
  },
];
