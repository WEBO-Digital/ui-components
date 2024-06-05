import React from "react";
import { IconProps } from "../iconProps";

export const IconHappy: React.FC<IconProps> = ({ size, fill }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1904_12085)">
        <path
          d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0ZM8.00001 8C8.53044 8 9.03915 8.21072 9.41422 8.58579C9.78929 8.96086 10 9.46957 10 10C10 11 9.10501 11 8.00001 11C6.89501 11 6.00001 11 6.00001 10C6.00001 9.46957 6.21072 8.96086 6.58579 8.58579C6.96086 8.21072 7.46957 8 8.00001 8ZM17.666 15.746C16.0781 17.1025 14.0858 17.8951 12 18C9.91422 17.8951 7.92187 17.1025 6.33401 15.746C6.13615 15.5694 6.01657 15.3214 6.00157 15.0566C5.99414 14.9255 6.01261 14.7942 6.05592 14.6702C6.09924 14.5462 6.16654 14.432 6.25401 14.334C6.34147 14.236 6.44737 14.1563 6.56566 14.0992C6.68395 14.0422 6.81232 14.009 6.94344 14.0016C7.20824 13.9866 7.46815 14.0774 7.66601 14.254C8.88823 15.2821 10.4064 15.8937 12 16C13.5945 15.8936 15.1135 15.2813 16.336 14.252C16.4341 14.1647 16.5484 14.0975 16.6725 14.0544C16.7965 14.0112 16.9279 13.993 17.059 14.0006C17.1901 14.0082 17.3184 14.0415 17.4367 14.0988C17.5549 14.156 17.6607 14.2359 17.748 14.334C17.8353 14.4321 17.9025 14.5464 17.9456 14.6705C17.9888 14.7945 18.0071 14.9259 17.9994 15.057C17.9918 15.1881 17.9585 15.3164 17.9013 15.4347C17.844 15.5529 17.7641 15.6587 17.666 15.746ZM16 11C14.895 11 14 11 14 10C14 9.46957 14.2107 8.96086 14.5858 8.58579C14.9609 8.21072 15.4696 8 16 8C16.5304 8 17.0391 8.21072 17.4142 8.58579C17.7893 8.96086 18 9.46957 18 10C18 11 17.105 11 16 11Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1904_12085">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};