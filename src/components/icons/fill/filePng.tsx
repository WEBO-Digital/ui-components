import React from "react";
import { IconProps } from "../iconProps";

export const IconFilePng: React.FC<IconProps> = ({ size, fill }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.12499 11.25H19.875C19.9744 11.25 20.0698 11.2105 20.1402 11.1402C20.2105 11.0698 20.25 10.9745 20.25 10.875V8.25C20.2501 8.15148 20.2307 8.05391 20.1931 7.96286C20.1555 7.87182 20.1002 7.78908 20.0306 7.71938L14.7806 2.46938C14.7109 2.39975 14.6282 2.34454 14.5371 2.3069C14.4461 2.26926 14.3485 2.24992 14.25 2.25H5.24999C4.85217 2.25 4.47063 2.40804 4.18933 2.68934C3.90803 2.97064 3.74999 3.35218 3.74999 3.75V10.875C3.74999 10.9745 3.7895 11.0698 3.85983 11.1402C3.93015 11.2105 4.02553 11.25 4.12499 11.25ZM14.25 4.125L18.375 8.25H14.25V4.125ZM5.62499 13.5H4.12499C3.92608 13.5 3.73531 13.579 3.59466 13.7197C3.45401 13.8603 3.37499 14.0511 3.37499 14.25V19.4738C3.37167 19.6678 3.44212 19.8558 3.57211 19.9999C3.70211 20.144 3.88195 20.2334 4.0753 20.25C4.17789 20.2568 4.28079 20.2425 4.3776 20.2078C4.47441 20.1732 4.56306 20.119 4.63805 20.0487C4.71305 19.9784 4.77278 19.8934 4.81354 19.799C4.8543 19.7046 4.87522 19.6028 4.87499 19.5V18.75H5.56874C6.99749 18.75 8.20687 17.6325 8.24905 16.2047C8.25972 15.8534 8.19974 15.5035 8.07267 15.1759C7.94559 14.8482 7.75401 14.5494 7.50929 14.2971C7.26456 14.0449 6.97168 13.8444 6.648 13.7074C6.32432 13.5705 5.97644 13.5 5.62499 13.5ZM5.59218 17.25H4.87499V15H5.62499C5.78234 14.9993 5.9381 15.0315 6.08219 15.0948C6.22629 15.158 6.35553 15.2507 6.46155 15.367C6.56757 15.4832 6.64802 15.6205 6.69771 15.7698C6.74739 15.9191 6.7652 16.0771 6.74999 16.2338C6.71726 16.5165 6.58069 16.777 6.36676 16.9648C6.15283 17.1526 5.87679 17.2542 5.59218 17.25ZM21 18.8316C20.9999 19.0265 20.9239 19.2138 20.7881 19.3538C20.527 19.6337 20.2117 19.8575 19.8613 20.0116C19.5109 20.1657 19.1328 20.2468 18.75 20.25C17.0962 20.25 15.75 18.7359 15.75 16.875C15.75 15.0141 17.0962 13.5 18.75 13.5C19.2865 13.5016 19.8108 13.66 20.2584 13.9556C20.4211 14.057 20.5401 14.2155 20.5921 14.3999C20.6441 14.5844 20.6254 14.7817 20.5397 14.9531C20.4904 15.0461 20.4221 15.1277 20.3391 15.1926C20.2562 15.2574 20.1606 15.3041 20.0585 15.3296C19.9563 15.355 19.85 15.3587 19.7463 15.3404C19.6427 15.322 19.5441 15.2821 19.4569 15.2231C19.2495 15.0783 19.0029 15.0005 18.75 15C17.9231 15 17.25 15.8438 17.25 16.875C17.25 17.9062 17.9231 18.75 18.75 18.75C19.0208 18.747 19.2835 18.6577 19.5 18.495V18C19.3972 18.0002 19.2954 17.9793 19.201 17.9385C19.1066 17.8978 19.0216 17.8381 18.9513 17.7631C18.881 17.6881 18.8268 17.5994 18.7922 17.5026C18.7575 17.4058 18.7432 17.3029 18.75 17.2003C18.7666 17.0075 18.8555 16.828 18.999 16.6981C19.1425 16.5682 19.3299 16.4974 19.5234 16.5H20.25C20.4489 16.5 20.6397 16.579 20.7803 16.7197C20.921 16.8603 21 17.0511 21 17.25V18.8316ZM14.625 14.25V19.4775C14.6269 19.6148 14.5921 19.7501 14.5242 19.8694C14.4563 19.9888 14.3577 20.0878 14.2387 20.1562C14.0777 20.2455 13.8893 20.2724 13.7097 20.2318C13.5301 20.1912 13.3717 20.0859 13.2647 19.9359L10.875 16.5938V19.4775C10.8778 19.6712 10.8072 19.8588 10.6772 20.0025C10.5473 20.1462 10.3677 20.2353 10.1747 20.2519C10.0721 20.2587 9.96919 20.2443 9.87238 20.2097C9.77558 20.1751 9.68692 20.1209 9.61193 20.0506C9.53693 19.9802 9.4772 19.8952 9.43644 19.8008C9.39568 19.7065 9.37476 19.6047 9.37499 19.5019V14.2791C9.37247 14.1335 9.41096 13.9902 9.48606 13.8656C9.56117 13.7409 9.66985 13.6399 9.79968 13.5741C9.95912 13.4969 10.1407 13.4787 10.3123 13.5226C10.4839 13.5666 10.6344 13.6698 10.7372 13.8141L13.125 17.1562V14.2753C13.1224 14.0818 13.1932 13.8944 13.3231 13.7509C13.453 13.6074 13.6324 13.5184 13.8253 13.5019C13.9277 13.4951 14.0305 13.5094 14.1272 13.5439C14.2238 13.5784 14.3124 13.6324 14.3874 13.7025C14.4623 13.7727 14.5221 13.8574 14.563 13.9516C14.6039 14.0458 14.625 14.1473 14.625 14.25Z"
        fill={fill}
      />
    </svg>
  );
};
