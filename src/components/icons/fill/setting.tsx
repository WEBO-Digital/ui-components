import React from "react";
import { IconProps } from "../iconProps";

export const IconSetting: React.FC<IconProps> = ({ size, fill }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.25 7.5C17.25 7.30109 17.329 7.11032 17.4697 6.96967C17.6103 6.82902 17.8011 6.75 18 6.75H20.25C20.4489 6.75 20.6397 6.82902 20.7803 6.96967C20.921 7.11032 21 7.30109 21 7.5C21 7.69891 20.921 7.88968 20.7803 8.03033C20.6397 8.17098 20.4489 8.25 20.25 8.25H18C17.8011 8.25 17.6103 8.17098 17.4697 8.03033C17.329 7.88968 17.25 7.69891 17.25 7.5ZM3.75 8.25H12.75V9.75C12.75 9.94891 12.829 10.1397 12.9697 10.2803C13.1103 10.421 13.3011 10.5 13.5 10.5H15C15.1989 10.5 15.3897 10.421 15.5303 10.2803C15.671 10.1397 15.75 9.94891 15.75 9.75V5.25C15.75 5.05109 15.671 4.86032 15.5303 4.71967C15.3897 4.57902 15.1989 4.5 15 4.5H13.5C13.3011 4.5 13.1103 4.57902 12.9697 4.71967C12.829 4.86032 12.75 5.05109 12.75 5.25V6.75H3.75C3.55109 6.75 3.36032 6.82902 3.21967 6.96967C3.07902 7.11032 3 7.30109 3 7.5C3 7.69891 3.07902 7.88968 3.21967 8.03033C3.36032 8.17098 3.55109 8.25 3.75 8.25ZM20.25 15.75H12C11.8011 15.75 11.6103 15.829 11.4697 15.9697C11.329 16.1103 11.25 16.3011 11.25 16.5C11.25 16.6989 11.329 16.8897 11.4697 17.0303C11.6103 17.171 11.8011 17.25 12 17.25H20.25C20.4489 17.25 20.6397 17.171 20.7803 17.0303C20.921 16.8897 21 16.6989 21 16.5C21 16.3011 20.921 16.1103 20.7803 15.9697C20.6397 15.829 20.4489 15.75 20.25 15.75ZM9 13.5H7.5C7.30109 13.5 7.11032 13.579 6.96967 13.7197C6.82902 13.8603 6.75 14.0511 6.75 14.25V15.75H3.75C3.55109 15.75 3.36032 15.829 3.21967 15.9697C3.07902 16.1103 3 16.3011 3 16.5C3 16.6989 3.07902 16.8897 3.21967 17.0303C3.36032 17.171 3.55109 17.25 3.75 17.25H6.75V18.75C6.75 18.9489 6.82902 19.1397 6.96967 19.2803C7.11032 19.421 7.30109 19.5 7.5 19.5H9C9.19891 19.5 9.38968 19.421 9.53033 19.2803C9.67098 19.1397 9.75 18.9489 9.75 18.75V14.25C9.75 14.0511 9.67098 13.8603 9.53033 13.7197C9.38968 13.579 9.19891 13.5 9 13.5Z"
        fill={fill}
      />
    </svg>
  );
};