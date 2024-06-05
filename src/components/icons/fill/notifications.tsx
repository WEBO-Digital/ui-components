import React from "react";
import { IconProps } from "../iconProps";

export const IconNotifications: React.FC<IconProps> = ({
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
        d="M20.7938 16.4944C20.2735 15.5981 19.5 13.0622 19.5 9.75C19.5 7.76088 18.7098 5.85322 17.3033 4.4467C15.8968 3.04018 13.9891 2.25 12 2.25C10.0109 2.25 8.10323 3.04018 6.69671 4.4467C5.29019 5.85322 4.50001 7.76088 4.50001 9.75C4.50001 13.0631 3.72564 15.5981 3.20532 16.4944C3.07245 16.7222 3.00201 16.9811 3.00111 17.2449C3.0002 17.5086 3.06886 17.768 3.20017 17.9967C3.33147 18.2255 3.52077 18.4156 3.74899 18.5478C3.9772 18.6801 4.23625 18.7498 4.50001 18.75H8.32595C8.49899 19.5967 8.95916 20.3577 9.62864 20.9042C10.2981 21.4507 11.1358 21.7492 12 21.7492C12.8642 21.7492 13.7019 21.4507 14.3714 20.9042C15.0409 20.3577 15.501 19.5967 15.6741 18.75H19.5C19.7637 18.7496 20.0226 18.6798 20.2507 18.5475C20.4788 18.4151 20.668 18.225 20.7992 17.9963C20.9303 17.7676 20.9989 17.5083 20.998 17.2446C20.997 16.9809 20.9266 16.7222 20.7938 16.4944ZM12 20.25C11.5348 20.2499 11.0812 20.1055 10.7014 19.8369C10.3216 19.5683 10.0344 19.1886 9.87939 18.75H14.1206C13.9656 19.1886 13.6784 19.5683 13.2986 19.8369C12.9189 20.1055 12.4652 20.2499 12 20.25Z"
        fill={fill}
      />
    </svg>
  );
};
