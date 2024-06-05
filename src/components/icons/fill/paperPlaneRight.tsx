import React from "react";
import { IconProps } from "../iconProps";

export const IconPaperPlaneRight: React.FC<IconProps> = ({
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
        d="M22.5 11.9897C22.5007 12.2569 22.4299 12.5195 22.2951 12.7502C22.1603 12.981 21.9663 13.1715 21.7331 13.3022L5.99061 22.3031C5.76471 22.4311 5.50966 22.4989 5.24999 22.5C5.01073 22.4987 4.77525 22.4402 4.5632 22.3293C4.35116 22.2185 4.16871 22.0586 4.03107 21.8628C3.89344 21.6671 3.80462 21.4413 3.77203 21.2043C3.73944 20.9673 3.76403 20.7259 3.84374 20.5003L6.37499 13.005C6.39973 12.9317 6.44652 12.8679 6.50895 12.8222C6.57138 12.7766 6.64641 12.7513 6.72374 12.75H13.5C13.6028 12.7502 13.7046 12.7293 13.799 12.6885C13.8934 12.6478 13.9784 12.588 14.0487 12.513C14.119 12.438 14.1732 12.3494 14.2078 12.2526C14.2424 12.1558 14.2568 12.0529 14.25 11.9503C14.233 11.7574 14.1437 11.5781 14.0002 11.4482C13.8566 11.3184 13.6692 11.2476 13.4756 11.25H6.72561C6.64716 11.25 6.57067 11.2254 6.50693 11.1796C6.44319 11.1339 6.39541 11.0693 6.3703 10.995L3.83905 3.5006C3.7383 3.21334 3.72734 2.90223 3.80761 2.60859C3.88789 2.31495 4.05561 2.05269 4.28848 1.85664C4.52136 1.66059 4.80837 1.54004 5.1114 1.51099C5.41442 1.48195 5.71911 1.54579 5.98499 1.69403L21.735 10.6837C21.9668 10.814 22.1598 11.0036 22.2943 11.2331C22.4287 11.4626 22.4997 11.7237 22.5 11.9897Z"
        fill={fill}
      />
    </svg>
  );
};
