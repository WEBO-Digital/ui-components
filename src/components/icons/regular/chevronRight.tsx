import React from "react";
import { IconProps } from "../iconProps";

export const IconChevronRight: React.FC<IconProps> = ({
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
        d="M17.0307 12.5306L9.53068 20.0306C9.46099 20.1003 9.37827 20.1556 9.28722 20.1933C9.19618 20.231 9.0986 20.2504 9.00005 20.2504C8.9015 20.2504 8.80392 20.231 8.71288 20.1933C8.62183 20.1556 8.53911 20.1003 8.46943 20.0306C8.39974 19.9609 8.34447 19.8782 8.30676 19.7872C8.26904 19.6961 8.24963 19.5985 8.24963 19.5C8.24963 19.4015 8.26904 19.3039 8.30676 19.2128C8.34447 19.1218 8.39974 19.0391 8.46943 18.9694L15.4397 12L8.46943 5.03062C8.32869 4.88989 8.24963 4.69902 8.24963 4.5C8.24963 4.30097 8.32869 4.1101 8.46943 3.96937C8.61016 3.82864 8.80103 3.74958 9.00005 3.74958C9.19907 3.74958 9.38995 3.82864 9.53068 3.96937L17.0307 11.4694C17.1004 11.539 17.1557 11.6217 17.1935 11.7128C17.2312 11.8038 17.2506 11.9014 17.2506 12C17.2506 12.0986 17.2312 12.1962 17.1935 12.2872C17.1557 12.3783 17.1004 12.461 17.0307 12.5306Z"
        fill={fill ? fill : "#000000"}
      />
    </svg>
  );
};