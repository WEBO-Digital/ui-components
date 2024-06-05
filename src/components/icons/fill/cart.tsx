import React from "react";
import { IconProps } from "../iconProps";

export const IconCart: React.FC<IconProps> = ({ size, fill }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5756 5.51906C21.5052 5.43481 21.4172 5.36705 21.3177 5.32056C21.2183 5.27407 21.1098 5.24998 21 5.25H5.87625L5.30625 2.11594C5.27485 1.94313 5.1838 1.78681 5.04897 1.67425C4.91414 1.56169 4.74408 1.50003 4.56844 1.5H2.25C2.05109 1.5 1.86032 1.57902 1.71967 1.71967C1.57902 1.86032 1.5 2.05109 1.5 2.25C1.5 2.44891 1.57902 2.63968 1.71967 2.78033C1.86032 2.92098 2.05109 3 2.25 3H3.9375L6.33375 16.1522C6.40434 16.5422 6.57671 16.9067 6.83344 17.2087C6.47911 17.5397 6.22336 17.9623 6.09455 18.4298C5.96575 18.8972 5.96892 19.3912 6.10371 19.8569C6.23851 20.3226 6.49966 20.7419 6.85821 21.0683C7.21676 21.3947 7.6587 21.6154 8.13502 21.7059C8.61134 21.7965 9.10344 21.7533 9.55673 21.5813C10.01 21.4092 10.4068 21.115 10.7031 20.7312C10.9994 20.3474 11.1836 19.889 11.2353 19.407C11.287 18.9249 11.2041 18.4379 10.9959 18H15.2541C15.0863 18.3513 14.9995 18.7357 15 19.125C15 19.6442 15.154 20.1517 15.4424 20.5834C15.7308 21.0151 16.1408 21.3515 16.6205 21.5502C17.1001 21.7489 17.6279 21.8008 18.1371 21.6996C18.6463 21.5983 19.114 21.3483 19.4812 20.9812C19.8483 20.614 20.0983 20.1463 20.1996 19.6371C20.3008 19.1279 20.2489 18.6001 20.0502 18.1205C19.8515 17.6408 19.5151 17.2308 19.0834 16.9424C18.6517 16.654 18.1442 16.5 17.625 16.5H8.54719C8.37155 16.5 8.20149 16.4383 8.06665 16.3257C7.93182 16.2132 7.84077 16.0569 7.80938 15.8841L7.51219 14.25H18.3872C18.9141 14.2499 19.4243 14.0649 19.8288 13.7272C20.2333 13.3896 20.5064 12.9206 20.6006 12.4022L21.7406 6.13406C21.7599 6.02572 21.7551 5.91447 21.7266 5.80818C21.6981 5.7019 21.6466 5.60319 21.5756 5.51906ZM9.75 19.125C9.75 19.3475 9.68402 19.565 9.5604 19.75C9.43679 19.935 9.26109 20.0792 9.05552 20.1644C8.84995 20.2495 8.62375 20.2718 8.40552 20.2284C8.18729 20.185 7.98684 20.0778 7.8295 19.9205C7.67217 19.7632 7.56502 19.5627 7.52162 19.3445C7.47821 19.1262 7.50049 18.9 7.58564 18.6945C7.67078 18.4889 7.81498 18.3132 7.99998 18.1896C8.18499 18.066 8.4025 18 8.625 18C8.92337 18 9.20952 18.1185 9.4205 18.3295C9.63147 18.5405 9.75 18.8266 9.75 19.125ZM18.75 19.125C18.75 19.3475 18.684 19.565 18.5604 19.75C18.4368 19.935 18.2611 20.0792 18.0555 20.1644C17.85 20.2495 17.6238 20.2718 17.4055 20.2284C17.1873 20.185 16.9868 20.0778 16.8295 19.9205C16.6722 19.7632 16.565 19.5627 16.5216 19.3445C16.4782 19.1262 16.5005 18.9 16.5856 18.6945C16.6708 18.4889 16.815 18.3132 17 18.1896C17.185 18.066 17.4025 18 17.625 18C17.9234 18 18.2095 18.1185 18.4205 18.3295C18.6315 18.5405 18.75 18.8266 18.75 19.125Z"
        fill={fill}
      />
    </svg>
  );
};