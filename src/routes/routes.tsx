import {
  Account_route_group,
  Dashboard_route_group,
  PayOff_route_group,
} from "./Pages";

export const Pages_route_group = [
  ...Dashboard_route_group,
  ...Account_route_group,
  ...PayOff_route_group,
];
