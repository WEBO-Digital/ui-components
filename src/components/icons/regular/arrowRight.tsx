import React from "react";
import { IconProps } from "../iconProps";

export const IconArrowRight: React.FC<IconProps> = ({
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
      <path
        d="M20.7806 12.5306L14.0306 19.2806C13.8899 19.4214 13.699 19.5004 13.5 19.5004C13.301 19.5004 13.1101 19.4214 12.9694 19.2806C12.8286 19.1399 12.7496 18.949 12.7496 18.75C12.7496 18.551 12.8286 18.3601 12.9694 18.2194L18.4397 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H18.4397L12.9694 5.78063C12.8286 5.6399 12.7496 5.44903 12.7496 5.25001C12.7496 5.05098 12.8286 4.86011 12.9694 4.71938C13.1101 4.57865 13.301 4.49959 13.5 4.49959C13.699 4.49959 13.8899 4.57865 14.0306 4.71938L20.7806 11.4694C20.8504 11.539 20.9057 11.6218 20.9434 11.7128C20.9812 11.8038 21.0006 11.9014 21.0006 12C21.0006 12.0986 20.9812 12.1962 20.9434 12.2872C20.9057 12.3783 20.8504 12.461 20.7806 12.5306Z"
        fill={fill ? fill : "#000000"}
      />
    </svg>
  );
};
