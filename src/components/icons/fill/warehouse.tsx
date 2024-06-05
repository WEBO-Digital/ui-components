import React from "react";
import { IconProps } from "../iconProps";

export const IconWarehouse: React.FC<IconProps> = ({
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
        d="M22 10.1029V19.9167C22 21.0675 21.0675 22 19.9167 22C18.7658 22 17.8333 21.0675 17.8333 19.9167V12.0003C17.8333 11.5403 17.46 11.167 17 11.167H7C6.54 11.167 6.16667 11.5403 6.16667 12.0003V19.9167C6.16667 21.0675 5.23417 22 4.08333 22C2.9325 22 2 21.0675 2 19.9167V10.1029C2 8.71791 2.68833 7.42379 3.83583 6.64965L9.66917 2.7131C11.0775 1.7623 12.9225 1.7623 14.3308 2.7131L20.1642 6.64965C21.3117 7.42462 22 8.71875 22 10.1029ZM10.3333 18.6668H9.5C9.03917 18.6668 8.66667 19.0401 8.66667 19.5001V21.1667C8.66667 21.6267 9.03917 22 9.5 22H10.3333C10.7942 22 11.1667 21.6267 11.1667 21.1667V19.5001C11.1667 19.0401 10.7942 18.6668 10.3333 18.6668ZM10.3333 13.6669H9.5C9.03917 13.6669 8.66667 14.0402 8.66667 14.5002V16.1668C8.66667 16.6268 9.03917 17.0002 9.5 17.0002H10.3333C10.7942 17.0002 11.1667 16.6268 11.1667 16.1668V14.5002C11.1667 14.0402 10.7942 13.6669 10.3333 13.6669ZM14.5 18.6668H13.6667C13.2058 18.6668 12.8333 19.0401 12.8333 19.5001V21.1667C12.8333 21.6267 13.2058 22 13.6667 22H14.5C14.9608 22 15.3333 21.6267 15.3333 21.1667V19.5001C15.3333 19.0401 14.9608 18.6668 14.5 18.6668Z"
        fill={fill}
      />
    </svg>
  );
};