import React from 'react';
import { IconProps } from '../iconProps';

export const IconExternalLink: React.FC<IconProps> = ({ width, height, fill, ...props }: IconProps) => {
    return (
        <>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6.75C18 6.94891 17.921 7.13968 17.7803 7.28033C17.6397 7.42098 17.4489 7.5 17.25 7.5C17.0511 7.5 16.8603 7.42098 16.7197 7.28033C16.579 7.13968 16.5 6.94891 16.5 6.75V2.56125L10.2816 8.78063C10.1408 8.92136 9.94996 9.00042 9.75094 9.00042C9.55191 9.00042 9.36104 8.92136 9.22031 8.78063C9.07958 8.63989 9.00052 8.44902 9.00052 8.25C9.00052 8.05098 9.07958 7.86011 9.22031 7.71937L15.4387 1.5H11.25C11.0511 1.5 10.8603 1.42098 10.7197 1.28033C10.579 1.13968 10.5 0.948912 10.5 0.75C10.5 0.551088 10.579 0.360322 10.7197 0.21967C10.8603 0.0790178 11.0511 0 11.25 0H17.25C17.4489 0 17.6397 0.0790178 17.7803 0.21967C17.921 0.360322 18 0.551088 18 0.75V6.75ZM14.25 9C14.0511 9 13.8603 9.07902 13.7197 9.21967C13.579 9.36032 13.5 9.55109 13.5 9.75V16.5H1.5V4.5H8.25C8.44891 4.5 8.63968 4.42098 8.78033 4.28033C8.92098 4.13968 9 3.94891 9 3.75C9 3.55109 8.92098 3.36032 8.78033 3.21967C8.63968 3.07902 8.44891 3 8.25 3H1.5C1.10218 3 0.720644 3.15804 0.43934 3.43934C0.158035 3.72064 0 4.10218 0 4.5V16.5C0 16.8978 0.158035 17.2794 0.43934 17.5607C0.720644 17.842 1.10218 18 1.5 18H13.5C13.8978 18 14.2794 17.842 14.5607 17.5607C14.842 17.2794 15 16.8978 15 16.5V9.75C15 9.55109 14.921 9.36032 14.7803 9.21967C14.6397 9.07902 14.4489 9 14.25 9Z" fill={fill} />
            </svg>
    )
}