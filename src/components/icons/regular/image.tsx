import React from "react";
import { IconProps } from "../iconProps";

export const IconImage: React.FC<IconProps> = ({ size, fill }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM4.5 4.5H19.5V11.7544L17.1853 9.43875C16.904 9.15766 16.5227 8.99976 16.125 8.99976C15.7273 8.99976 15.346 9.15766 15.0647 9.43875L5.00344 19.5H4.5V4.5ZM19.5 19.5H7.125L16.125 10.5L19.5 13.875V19.5ZM9 11.25C9.44501 11.25 9.88002 11.118 10.25 10.8708C10.62 10.6236 10.9084 10.2722 11.0787 9.86104C11.249 9.4499 11.2936 8.9975 11.2068 8.56105C11.12 8.12459 10.9057 7.72368 10.591 7.40901C10.2763 7.09434 9.87541 6.88005 9.43895 6.79323C9.0025 6.70642 8.5501 6.75097 8.13896 6.92127C7.72783 7.09157 7.37643 7.37996 7.12919 7.74997C6.88196 8.11998 6.75 8.55499 6.75 9C6.75 9.59674 6.98705 10.169 7.40901 10.591C7.83097 11.0129 8.40326 11.25 9 11.25ZM9 8.25C9.14834 8.25 9.29334 8.29399 9.41668 8.3764C9.54001 8.45881 9.63614 8.57594 9.69291 8.71299C9.74968 8.85003 9.76453 9.00083 9.73559 9.14632C9.70665 9.2918 9.63522 9.42544 9.53033 9.53033C9.42544 9.63522 9.2918 9.70665 9.14632 9.73559C9.00083 9.76453 8.85003 9.74968 8.71299 9.69291C8.57594 9.63614 8.45881 9.54001 8.3764 9.41668C8.29399 9.29334 8.25 9.14834 8.25 9C8.25 8.80109 8.32902 8.61032 8.46967 8.46967C8.61032 8.32902 8.80109 8.25 9 8.25Z"
        fill={fill}
      />
    </svg>
  );
};
