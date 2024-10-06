import { IconTypes } from "./types";

export const AccountIcon = ({ color, className, style }: IconTypes) => (
  <svg
    style={style}
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 3V5H8.5C9.88071 5 11 6.11929 11 7.5V10.5C11 11.8807 9.88071 13 8.5 13H8V21C8 21.5523 7.55228 22 7 22C6.44772 22 6 21.5523 6 21L6 13H5.5C4.11929 13 3 11.8807 3 10.5V7.5C3 6.11929 4.11929 5 5.5 5H6L6 3C6 2.44772 6.44772 2 7 2C7.55228 2 8 2.44772 8 3ZM5.5 7H8.5C8.77614 7 9 7.22386 9 7.5V10.5C9 10.7761 8.77614 11 8.5 11H5.5C5.22386 11 5 10.7761 5 10.5V7.5C5 7.22386 5.22386 7 5.5 7Z"
        fill={color || "#828282"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 19V21C16 21.5523 16.4477 22 17 22C17.5523 22 18 21.5523 18 21V19H18.5C19.8807 19 21 17.8807 21 16.5V10.5C21 9.11929 19.8807 8 18.5 8H18V3C18 2.44772 17.5523 2 17 2C16.4477 2 16 2.44772 16 3V8H15.5C14.1193 8 13 9.11929 13 10.5V16.5C13 17.8807 14.1193 19 15.5 19H16ZM15.5 10C15.2239 10 15 10.2239 15 10.5V16.5C15 16.7761 15.2239 17 15.5 17H18.5C18.7761 17 19 16.7761 19 16.5V10.5C19 10.2239 18.7761 10 18.5 10H15.5Z"
        fill={color || "#828282"}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
