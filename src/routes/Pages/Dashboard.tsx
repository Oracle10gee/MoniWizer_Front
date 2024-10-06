import { Dashboard } from "pages/Dashboard";
import Setting from "pages/Settings";
import Support from "pages/Support";

export const Dashboard_route_group = [
  {
    element: Dashboard,
    path: "/dashboard",
    title: "Dashboard",
  },
  // remove them later(just for showcase)
  {
    element: Dashboard,
    path: "/savings",
    title: "Savings",
  },
  {
    element: Dashboard,
    path: "/learning",
    title: "Learning",
  },
  {
    element: Dashboard,
    path: "/activity",
    title: "Activity",
  },
  {
    element: Setting,
    path: "/settings",
    title: "Settings",
  },
  {
    element: Support,
    path: "/support",
    title: "Support",
  },
];
