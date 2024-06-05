import React from "react";
import { IconProps } from "../iconProps";

export const IconOrderReceived: React.FC<IconProps> = ({
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
        d="M16.9969 12C14.2358 12 11.998 14.2383 11.998 17C11.998 19.7617 14.2358 22 16.9969 22C19.7581 22 21.9959 19.7617 21.9959 17C21.9959 14.2383 19.7581 12 16.9969 12ZM20.0655 16.76L17.8134 18.9383C17.4369 19.31 16.937 19.4975 16.4362 19.4975C15.9355 19.4975 15.4339 19.31 15.0507 18.9358L13.9226 17.8258C13.5935 17.5033 13.5893 16.9758 13.9109 16.6475C14.2325 16.3183 14.7599 16.3133 15.089 16.6358L16.2163 17.745C16.3362 17.8633 16.5329 17.8608 16.6512 17.7433L18.9116 15.5567C19.2423 15.2392 19.7705 15.2483 20.0896 15.5808C20.4079 15.9125 20.3971 16.4408 20.0655 16.76ZM12.5937 22H6.99898C4.69945 21.9975 2.83566 20.1333 2.83316 17.8333V11.1667C2.83316 10.7067 3.20642 10.3333 3.66633 10.3333H16.9928C13.3194 10.3358 10.3316 13.325 10.3316 17C10.3316 18.9892 11.2073 20.7775 12.5937 22ZM4.49949 8.66667C3.11977 8.66667 2 7.5475 2 6.16667C2 3.865 3.86462 2 6.16582 2C6.16582 2 17.9509 2.00167 18.0117 2.00417C20.3129 2.10417 22.0967 4.05083 21.9959 6.3525C21.9109 7.665 20.8128 8.6825 19.4964 8.66667H4.49949Z"
        fill={fill}
      />
    </svg>
  );
};