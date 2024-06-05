import React from "react";
import { IconProps } from "../iconProps";

export const IconLeader: React.FC<IconProps> = ({ size, fill }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 18.75H21.75V13.5C21.75 13.1022 21.592 12.7206 21.3107 12.4393C21.0294 12.158 20.6478 12 20.25 12H16.5V5.25C16.5 4.85218 16.342 4.47064 16.0607 4.18934C15.7794 3.90804 15.3978 3.75 15 3.75H9C8.60218 3.75 8.22064 3.90804 7.93934 4.18934C7.65804 4.47064 7.5 4.85218 7.5 5.25V8.25H3.75C3.35218 8.25 2.97064 8.40804 2.68934 8.68934C2.40804 8.97064 2.25 9.35218 2.25 9.75V18.75H1.5C1.30109 18.75 1.11032 18.829 0.96967 18.9697C0.829018 19.1103 0.75 19.3011 0.75 19.5C0.75 19.6989 0.829018 19.8897 0.96967 20.0303C1.11032 20.171 1.30109 20.25 1.5 20.25H22.5C22.6989 20.25 22.8897 20.171 23.0303 20.0303C23.171 19.8897 23.25 19.6989 23.25 19.5C23.25 19.3011 23.171 19.1103 23.0303 18.9697C22.8897 18.829 22.6989 18.75 22.5 18.75ZM7.5 18.75H3.75V9.75H7.5V18.75ZM13.125 12.75C13.125 12.9489 13.046 13.1397 12.9053 13.2803C12.7647 13.421 12.5739 13.5 12.375 13.5C12.1761 13.5 11.9853 13.421 11.8447 13.2803C11.704 13.1397 11.625 12.9489 11.625 12.75V10.0406L11.4872 10.0866C11.3937 10.1177 11.2951 10.1301 11.1968 10.1232C11.0986 10.1162 11.0027 10.0899 10.9146 10.0459C10.8265 10.0018 10.7479 9.94085 10.6834 9.86644C10.6188 9.79202 10.5696 9.70563 10.5384 9.61219C10.5073 9.51874 10.4949 9.42008 10.5018 9.32183C10.5088 9.22358 10.5351 9.12767 10.5791 9.03957C10.6232 8.95147 10.6842 8.87291 10.7586 8.80837C10.833 8.74383 10.9194 8.69459 11.0128 8.66344L12.1378 8.28844C12.2506 8.25085 12.3706 8.2406 12.4881 8.25852C12.6056 8.27645 12.7171 8.32203 12.8135 8.39152C12.91 8.46102 12.9885 8.55243 13.0426 8.65822C13.0968 8.76401 13.125 8.88116 13.125 9V12.75ZM20.25 18.75H16.5V13.5H20.25V18.75Z"
        fill={fill}
      />
    </svg>
  );
};
