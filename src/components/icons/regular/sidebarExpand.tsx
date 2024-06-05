import React from "react";
import { IconProps } from "../iconProps";

export const IconSidebarExpand: React.FC<IconProps> = ({
  size,
  fill,
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="white" />
      <path
        d="M7 5.25C6.58579 5.25 6.25 5.58579 6.25 6C6.25 6.41421 6.58579 6.75 7 6.75L21 6.75C21.4142 6.75 21.75 6.41421 21.75 6C21.75 5.58579 21.4142 5.25 21 5.25H7Z"
        fill={fill}
      />
      <path
        d="M12 11.25C11.5858 11.25 11.25 11.5858 11.25 12C11.25 12.4142 11.5858 12.75 12 12.75L21 12.75C21.4142 12.75 21.75 12.4142 21.75 12C21.75 11.5858 21.4142 11.25 21 11.25L12 11.25Z"
        fill={fill}
      />
      <path
        d="M6.25 18C6.25 17.5858 6.58579 17.25 7 17.25L21 17.25C21.4142 17.25 21.75 17.5858 21.75 18C21.75 18.4142 21.4142 18.75 21 18.75L7 18.75C6.58579 18.75 6.25 18.4142 6.25 18Z"
        fill={fill}
      />
      <path
        d="M3.53033 6.46967C3.23744 6.17678 2.76256 6.17678 2.46967 6.46967C2.17678 6.76256 2.17678 7.23744 2.46967 7.53033L6.93934 12L2.46967 16.4697C2.17678 16.7626 2.17678 17.2374 2.46967 17.5303C2.76256 17.8232 3.23744 17.8232 3.53033 17.5303L8.53033 12.5303C8.82322 12.2374 8.82322 11.7626 8.53033 11.4697L3.53033 6.46967Z"
        fill={fill ? fill : "#000000"}
      />
    </svg>
  );
};