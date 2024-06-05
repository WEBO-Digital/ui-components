import React from 'react';
import { IconProps } from '../iconProps';

export const IconGlobe: React.FC<IconProps> = ({ width, height, fill, ...props }: IconProps) => {
    return (
        <>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0.25C8.07164 0.25 6.18657 0.821828 4.58319 1.89317C2.97982 2.96451 1.73013 4.48726 0.992179 6.26884C0.254225 8.05042 0.061142 10.0108 0.437348 11.9021C0.813554 13.7934 1.74215 15.5307 3.10571 16.8943C4.46928 18.2579 6.20656 19.1865 8.09787 19.5627C9.98919 19.9389 11.9496 19.7458 13.7312 19.0078C15.5127 18.2699 17.0355 17.0202 18.1068 15.4168C19.1782 13.8134 19.75 11.9284 19.75 10C19.747 7.41505 18.7188 4.93683 16.891 3.109C15.0632 1.28116 12.585 0.252977 10 0.25ZM18.2144 9.25H14.4803C14.3125 5.82719 12.9944 3.40656 11.9134 1.975C13.5918 2.37804 15.102 3.29628 16.2321 4.60095C17.3623 5.90562 18.0558 7.53129 18.2153 9.25H18.2144ZM7.02157 10.75H12.9784C12.7619 14.6509 10.8944 17.0416 10 17.9688C9.10469 17.0406 7.23813 14.65 7.02157 10.75ZM7.02157 9.25C7.23813 5.34906 9.10563 2.95844 10 2.03125C10.8953 2.96219 12.7619 5.35281 12.9784 9.25H7.02157ZM8.08657 1.975C7.00563 3.40656 5.6875 5.82719 5.51969 9.25H1.78469C1.94425 7.53129 2.63773 5.90562 3.76788 4.60095C4.89803 3.29628 6.40818 2.37804 8.08657 1.975ZM1.78469 10.75H5.51969C5.69032 14.1728 7.00563 16.5934 8.08657 18.025C6.40818 17.622 4.89803 16.7037 3.76788 15.399C2.63773 14.0944 1.94425 12.4687 1.78469 10.75ZM11.9097 18.025C12.9906 16.5934 14.3059 14.1728 14.4766 10.75H18.2116C18.0522 12.4682 17.3593 14.0935 16.2299 15.3981C15.1005 16.7027 13.5911 17.6213 11.9134 18.025H11.9097Z" fill={fill} />
            </svg>

    )
}