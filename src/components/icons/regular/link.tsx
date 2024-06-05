import React from "react";
import { IconProps } from "../iconProps";

export const IconLink: React.FC<IconProps> = ({ size, fill }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 8.27155C22.4624 9.57716 21.9256 10.8186 21 11.7403L17.7422 15C17.2678 15.4771 16.7034 15.8553 16.0817 16.1128C15.4601 16.3702 14.7935 16.5019 14.1207 16.5H14.116C13.4316 16.4995 12.7543 16.3619 12.1241 16.0952C11.4938 15.8286 10.9234 15.4384 10.4465 14.9475C9.96958 14.4567 9.59587 13.8754 9.34744 13.2377C9.099 12.6 8.98088 11.9191 9.00005 11.235C9.00564 11.0361 9.09002 10.8475 9.23463 10.7108C9.37924 10.5741 9.57223 10.5005 9.77114 10.5061C9.97005 10.5117 10.1586 10.5961 10.2953 10.7407C10.432 10.8853 10.5056 11.0783 10.5 11.2772C10.4864 11.7609 10.5698 12.2424 10.7454 12.6933C10.921 13.1441 11.1852 13.5553 11.5224 13.9023C11.8596 14.2494 12.2629 14.5253 12.7085 14.7139C13.1541 14.9024 13.633 14.9997 14.1169 15C14.5926 15.0012 15.0638 14.9081 15.5032 14.7261C15.9427 14.5441 16.3417 14.2768 16.6772 13.9397L19.935 10.6819C20.6072 10.0012 20.9828 9.08234 20.9798 8.12578C20.9768 7.16921 20.5955 6.25268 19.9191 5.57628C19.2427 4.89988 18.3261 4.51856 17.3696 4.51556C16.413 4.51257 15.4941 4.88815 14.8135 5.5603L13.7822 6.59155C13.6404 6.72627 13.4516 6.80026 13.2561 6.79776C13.0605 6.79525 12.8736 6.71645 12.7353 6.57815C12.597 6.43985 12.5182 6.25299 12.5157 6.05742C12.5132 5.86185 12.5872 5.67304 12.7219 5.53124L13.7532 4.49999C14.2289 4.02405 14.7938 3.6465 15.4155 3.38892C16.0373 3.13133 16.7036 2.99875 17.3766 2.99875C18.0496 2.99875 18.716 3.13133 19.3377 3.38892C19.9594 3.6465 20.5243 4.02405 21 4.49999C21.4928 4.99401 21.88 5.58315 22.1378 6.23154C22.3957 6.87993 22.5189 7.57402 22.5 8.27155ZM10.2188 17.4056L9.18755 18.4369C8.85119 18.7755 8.45089 19.0438 8.0099 19.2263C7.56892 19.4088 7.09605 19.5019 6.6188 19.5C5.90283 19.4994 5.2031 19.2866 4.60801 18.8885C4.01293 18.4904 3.54919 17.9249 3.2754 17.2633C3.00161 16.6018 2.93006 15.8739 3.06977 15.1717C3.20948 14.4695 3.5542 13.8245 4.06036 13.3181L7.31255 10.0603C7.82478 9.54536 8.48002 9.19634 9.19316 9.05857C9.9063 8.9208 10.6444 9.00064 11.3116 9.28773C11.9788 9.57482 12.5442 10.0559 12.9345 10.6685C13.3247 11.281 13.5218 11.9968 13.5 12.7228C13.4945 12.9217 13.5681 13.1147 13.7048 13.2593C13.8415 13.4039 14.03 13.4883 14.229 13.4939C14.4279 13.4995 14.6209 13.4258 14.7655 13.2891C14.9101 13.1524 14.9945 12.9639 15 12.765C15.0181 12.0686 14.8944 11.3757 14.6365 10.7285C14.3787 10.0813 13.992 9.49324 13.5 8.99999C12.5393 8.03964 11.2364 7.50016 9.87801 7.50016C8.51958 7.50016 7.21675 8.03964 6.25598 8.99999L3.00005 12.2578C2.28401 12.9735 1.79622 13.8855 1.59831 14.8784C1.4004 15.8713 1.50125 16.9005 1.88813 17.8361C2.275 18.7717 2.93053 19.5716 3.77188 20.1347C4.61323 20.6979 5.60263 20.999 6.61505 21C7.28805 21.0019 7.95475 20.8704 8.57656 20.6129C9.19837 20.3554 9.76292 19.9771 10.2375 19.5L11.2688 18.4687C11.3902 18.3258 11.4536 18.1425 11.4465 17.9551C11.4395 17.7677 11.3624 17.5898 11.2307 17.4563C11.0989 17.3229 10.9219 17.2437 10.7346 17.2343C10.5473 17.2249 10.3633 17.286 10.2188 17.4056Z"
        fill={fill}
      />
    </svg>
  );
};
