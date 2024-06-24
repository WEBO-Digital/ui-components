import React from "react";
import { IconProps } from "../iconProps";

export const IconSmartPhone: React.FC<IconProps> = ({
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
        d="M16.5 1.5H7.5C6.90326 1.5 6.33097 1.73705 5.90901 2.15901C5.48705 2.58097 5.25 3.15326 5.25 3.75V20.25C5.25 20.8467 5.48705 21.419 5.90901 21.841C6.33097 22.2629 6.90326 22.5 7.5 22.5H16.5C17.0967 22.5 17.669 22.2629 18.091 21.841C18.5129 21.419 18.75 20.8467 18.75 20.25V3.75C18.75 3.15326 18.5129 2.58097 18.091 2.15901C17.669 1.73705 17.0967 1.5 16.5 1.5ZM17.25 20.25C17.25 20.4489 17.171 20.6397 17.0303 20.7803C16.8897 20.921 16.6989 21 16.5 21H7.5C7.30109 21 7.11032 20.921 6.96967 20.7803C6.82902 20.6397 6.75 20.4489 6.75 20.25V3.75C6.75 3.55109 6.82902 3.36032 6.96967 3.21967C7.11032 3.07902 7.30109 3 7.5 3H16.5C16.6989 3 16.8897 3.07902 17.0303 3.21967C17.171 3.36032 17.25 3.55109 17.25 3.75V20.25ZM13.125 5.625C13.125 5.8475 13.059 6.06501 12.9354 6.25002C12.8118 6.43502 12.6361 6.57922 12.4305 6.66436C12.225 6.74951 11.9988 6.77179 11.7805 6.72838C11.5623 6.68498 11.3618 6.57783 11.2045 6.4205C11.0472 6.26316 10.94 6.06271 10.8966 5.84448C10.8532 5.62625 10.8755 5.40005 10.9606 5.19448C11.0458 4.98891 11.19 4.81321 11.375 4.6896C11.56 4.56598 11.7775 4.5 12 4.5C12.2984 4.5 12.5845 4.61853 12.7955 4.8295C13.0065 5.04048 13.125 5.32663 13.125 5.625Z"
        fill={fill}
      />
    </svg>
  );
};
