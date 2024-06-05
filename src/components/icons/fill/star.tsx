import React from "react";
import { IconProps } from "../iconProps";

export const IconStar: React.FC<IconProps> = ({ size, fill }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.9646 10.7672L17.7459 14.4075L19.0312 19.8516C19.1021 20.1471 19.0838 20.457 18.9787 20.7422C18.8736 21.0274 18.6863 21.275 18.4405 21.4537C18.1947 21.6325 17.9015 21.7344 17.5978 21.7466C17.2941 21.7588 16.9936 21.6807 16.7343 21.5222L11.9999 18.6085L7.26275 21.5222C7.00347 21.6798 6.70335 21.7571 6.4002 21.7445C6.09704 21.7319 5.8044 21.6298 5.55913 21.4512C5.31386 21.2726 5.12692 21.0254 5.02185 20.7407C4.91679 20.4561 4.89829 20.1467 4.96869 19.8516L6.25869 14.4075L2.03994 10.7672C1.81053 10.5689 1.64462 10.3075 1.56293 10.0155C1.48123 9.72348 1.48737 9.41388 1.58058 9.12535C1.67379 8.83681 1.84994 8.58213 2.08703 8.39312C2.32412 8.2041 2.61164 8.08912 2.91369 8.06253L8.44494 7.61628L10.5787 2.45253C10.6942 2.17111 10.8908 1.93039 11.1434 1.76097C11.3961 1.59156 11.6934 1.5011 11.9976 1.5011C12.3018 1.5011 12.5991 1.59156 12.8518 1.76097C13.1044 1.93039 13.301 2.17111 13.4165 2.45253L15.5493 7.61628L21.0806 8.06253C21.3832 8.08813 21.6716 8.20247 21.9095 8.39122C22.1475 8.57998 22.3244 8.83476 22.4182 9.12364C22.512 9.41253 22.5185 9.72267 22.4368 10.0152C22.3551 10.3077 22.1889 10.5697 21.959 10.7682L21.9646 10.7672Z"
        fill={fill}
      />
    </svg>
  );
};
