import React from 'react';
import { IconProps } from '../iconProps';

export const IconChevronLeft: React.FC<IconProps> = ({ width, height, fill, ...props }: IconProps) => {
    return (
        <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5306 18.9694C15.6003 19.0391 15.6556 19.1218 15.6933 19.2128C15.731 19.3039 15.7504 19.4015 15.7504 19.5C15.7504 19.5985 15.731 19.6961 15.6933 19.7872C15.6556 19.8782 15.6003 19.9609 15.5306 20.0306C15.4609 20.1003 15.3782 20.1556 15.2872 20.1933C15.1961 20.231 15.0985 20.2504 15 20.2504C14.9014 20.2504 14.8039 20.231 14.7128 20.1933C14.6218 20.1556 14.539 20.1003 14.4694 20.0306L6.96935 12.5306C6.89962 12.461 6.8443 12.3783 6.80656 12.2872C6.76882 12.1962 6.74939 12.0986 6.74939 12C6.74939 11.9014 6.76882 11.8038 6.80656 11.7128C6.8443 11.6217 6.89962 11.539 6.96935 11.4694L14.4694 3.96937C14.6101 3.82864 14.801 3.74958 15 3.74958C15.199 3.74958 15.3899 3.82864 15.5306 3.96937C15.6713 4.1101 15.7504 4.30098 15.7504 4.5C15.7504 4.69902 15.6713 4.88989 15.5306 5.03062L8.56029 12L15.5306 18.9694Z" fill={fill} />
            </svg>
    )
}
