import { IconTypes } from "./types";

export const DashboardIcon = ({
  color,
  className,
  strokeClassName,
}: IconTypes) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 9L9 1L17 9M3 7.5V16C3 16.6 3.4 17 4 17H7V14C7 13.4 7.4 13 8 13H10C10.6 13 11 13.4 11 14V17H14C14.6 17 15 16.6 15 16V7.5"
      fill={color || "#828282"}
      className={className}
    />
    <path
      className={strokeClassName}
      d="M1 9L9 1L17 9M3 7.5V16C3 16.6 3.4 17 4 17H7V14C7 13.4 7.4 13 8 13H10C10.6 13 11 13.4 11 14V17H14C14.6 17 15 16.6 15 16V7.5"
      stroke={color || "#828282"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
