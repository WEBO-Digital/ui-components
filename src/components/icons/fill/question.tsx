import React from "react";
import { IconProps } from "../iconProps";

export const IconQuestion: React.FC<IconProps> = ({
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
        d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 18C11.7775 18 11.56 17.934 11.375 17.8104C11.19 17.6868 11.0458 17.5111 10.9606 17.3055C10.8755 17.1 10.8532 16.8738 10.8966 16.6555C10.94 16.4373 11.0472 16.2368 11.2045 16.0795C11.3618 15.9222 11.5623 15.815 11.7805 15.7716C11.9988 15.7282 12.225 15.7505 12.4305 15.8356C12.6361 15.9208 12.8118 16.065 12.9354 16.25C13.059 16.435 13.125 16.6525 13.125 16.875C13.125 17.1734 13.0065 17.4595 12.7955 17.6705C12.5845 17.8815 12.2984 18 12 18ZM12.75 13.4325V13.5C12.75 13.6989 12.671 13.8897 12.5303 14.0303C12.3897 14.171 12.1989 14.25 12 14.25C11.8011 14.25 11.6103 14.171 11.4697 14.0303C11.329 13.8897 11.25 13.6989 11.25 13.5V12.75C11.25 12.5511 11.329 12.3603 11.4697 12.2197C11.6103 12.079 11.8011 12 12 12C13.2403 12 14.25 11.1562 14.25 10.125C14.25 9.09375 13.2403 8.25 12 8.25C10.7597 8.25 9.75 9.09375 9.75 10.125V10.5C9.75 10.6989 9.67099 10.8897 9.53033 11.0303C9.38968 11.171 9.19892 11.25 9 11.25C8.80109 11.25 8.61033 11.171 8.46967 11.0303C8.32902 10.8897 8.25 10.6989 8.25 10.5V10.125C8.25 8.26406 9.93188 6.75 12 6.75C14.0681 6.75 15.75 8.26406 15.75 10.125C15.75 11.7544 14.46 13.1184 12.75 13.4325Z"
        fill={fill}
      />
    </svg>
  );
};
