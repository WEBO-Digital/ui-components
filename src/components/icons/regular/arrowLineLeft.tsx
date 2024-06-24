import React from "react";
import { IconProps } from "../iconProps";

export const IconArrowLineLeft: React.FC<IconProps> = ({
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
        d="M21.75 12C21.75 12.1989 21.671 12.3897 21.5303 12.5303C21.3897 12.671 21.1989 12.75 21 12.75H8.56031L14.0306 18.2194C14.1003 18.2891 14.1556 18.3718 14.1933 18.4628C14.231 18.5539 14.2504 18.6515 14.2504 18.75C14.2504 18.8485 14.231 18.9461 14.1933 19.0372C14.1556 19.1282 14.1003 19.2109 14.0306 19.2806C13.9609 19.3503 13.8782 19.4056 13.7872 19.4433C13.6961 19.481 13.5985 19.5004 13.5 19.5004C13.4015 19.5004 13.3039 19.481 13.2128 19.4433C13.1218 19.4056 13.0391 19.3503 12.9694 19.2806L6.21937 12.5306C6.14964 12.461 6.09432 12.3783 6.05658 12.2872C6.01884 12.1962 5.99941 12.0986 5.99941 12C5.99941 11.9014 6.01884 11.8038 6.05658 11.7128C6.09432 11.6217 6.14964 11.539 6.21937 11.4694L12.9694 4.71938C13.0391 4.64969 13.1218 4.59442 13.2128 4.55671C13.3039 4.51899 13.4015 4.49958 13.5 4.49958C13.5985 4.49958 13.6961 4.51899 13.7872 4.55671C13.8782 4.59442 13.9609 4.64969 14.0306 4.71938C14.1003 4.78906 14.1556 4.87178 14.1933 4.96283C14.231 5.05387 14.2504 5.15145 14.2504 5.25C14.2504 5.34855 14.231 5.44613 14.1933 5.53717C14.1556 5.62822 14.1003 5.71094 14.0306 5.78062L8.56031 11.25H21C21.1989 11.25 21.3897 11.329 21.5303 11.4697C21.671 11.6103 21.75 11.8011 21.75 12ZM3.75 3C3.55109 3 3.36032 3.07902 3.21967 3.21967C3.07902 3.36032 3 3.55109 3 3.75V20.25C3 20.4489 3.07902 20.6397 3.21967 20.7803C3.36032 20.921 3.55109 21 3.75 21C3.94891 21 4.13968 20.921 4.28033 20.7803C4.42098 20.6397 4.5 20.4489 4.5 20.25V3.75C4.5 3.55109 4.42098 3.36032 4.28033 3.21967C4.13968 3.07902 3.94891 3 3.75 3Z"
        fill={fill ? fill : "#000000"}
      />
    </svg>
  );
};
