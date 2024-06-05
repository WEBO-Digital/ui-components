import React from "react";
import { IconProps } from "../iconProps";

export const IconGear: React.FC<IconProps> = ({ size, fill }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.25 12.2025C20.2538 12.0675 20.2538 11.9325 20.25 11.7975L21.6488 10.05C21.7221 9.95829 21.7729 9.8506 21.797 9.73563C21.8211 9.62067 21.8179 9.50165 21.7875 9.38817C21.5578 8.52637 21.2148 7.69884 20.7675 6.92723C20.7089 6.82628 20.6276 6.7404 20.5299 6.67644C20.4322 6.61248 20.321 6.57219 20.205 6.55879L17.9813 6.31129C17.8888 6.21379 17.795 6.12004 17.7 6.03004L17.4375 3.80067C17.424 3.68462 17.3836 3.57333 17.3195 3.47567C17.2554 3.37801 17.1693 3.29668 17.0682 3.23817C16.2966 2.79121 15.469 2.44884 14.6072 2.22004C14.4937 2.18972 14.3747 2.18648 14.2598 2.21058C14.1448 2.23468 14.0371 2.28545 13.9454 2.35879L12.2025 3.75004C12.0675 3.75004 11.9325 3.75004 11.7975 3.75004L10.05 2.35411C9.95829 2.28076 9.8506 2.23 9.73563 2.2059C9.62067 2.1818 9.50165 2.18504 9.38817 2.21536C8.52637 2.44507 7.69884 2.78806 6.92723 3.23536C6.82628 3.29397 6.7404 3.37535 6.67644 3.473C6.61248 3.57065 6.57219 3.68189 6.55879 3.79786L6.31129 6.02536C6.21379 6.11848 6.12004 6.21223 6.03004 6.30661L3.80067 6.56254C3.68462 6.57605 3.57333 6.61647 3.47567 6.6806C3.37801 6.74473 3.29668 6.83079 3.23817 6.93192C2.79131 7.70363 2.44864 8.53114 2.21911 9.39286C2.18891 9.50641 2.18583 9.62547 2.21009 9.74044C2.23435 9.8554 2.28529 9.96306 2.35879 10.0547L3.75004 11.7975C3.75004 11.9325 3.75004 12.0675 3.75004 12.2025L2.35411 13.95C2.28076 14.0418 2.23 14.1495 2.2059 14.2645C2.1818 14.3794 2.18504 14.4984 2.21536 14.6119C2.44507 15.4737 2.78806 16.3012 3.23536 17.0729C3.29397 17.1738 3.37535 17.2597 3.473 17.3236C3.57065 17.3876 3.68189 17.4279 3.79786 17.4413L6.02161 17.6888C6.11473 17.7863 6.20848 17.88 6.30286 17.97L6.56254 20.1994C6.57605 20.3155 6.61647 20.4268 6.6806 20.5244C6.74473 20.6221 6.83079 20.7034 6.93192 20.7619C7.70363 21.2088 8.53114 21.5515 9.39286 21.781C9.50641 21.8112 9.62547 21.8143 9.74044 21.79C9.8554 21.7657 9.96306 21.7148 10.0547 21.6413L11.7975 20.25C11.9325 20.2538 12.0675 20.2538 12.2025 20.25L13.95 21.6488C14.0418 21.7221 14.1495 21.7729 14.2645 21.797C14.3794 21.8211 14.4984 21.8179 14.6119 21.7875C15.4739 21.5582 16.3014 21.2152 17.0729 20.7675C17.1738 20.7089 17.2597 20.6276 17.3236 20.5299C17.3876 20.4322 17.4279 20.321 17.4413 20.205L17.6888 17.9813C17.7863 17.8888 17.88 17.795 17.97 17.7L20.1994 17.4375C20.3155 17.424 20.4268 17.3836 20.5244 17.3195C20.6221 17.2554 20.7034 17.1693 20.7619 17.0682C21.2088 16.2965 21.5515 15.4689 21.781 14.6072C21.8112 14.4937 21.8143 14.3746 21.79 14.2597C21.7657 14.1447 21.7148 14.037 21.6413 13.9454L20.25 12.2025ZM12 15.75C11.2584 15.75 10.5333 15.5301 9.91666 15.1181C9.29997 14.706 8.81932 14.1203 8.53549 13.4351C8.25167 12.7499 8.1774 11.9959 8.3221 11.2685C8.46679 10.541 8.82395 9.87284 9.34839 9.34839C9.87284 8.82395 10.541 8.46679 11.2685 8.3221C11.9959 8.1774 12.7499 8.25167 13.4351 8.53549C14.1203 8.81932 14.706 9.29997 15.1181 9.91666C15.5301 10.5333 15.75 11.2584 15.75 12C15.75 12.9946 15.355 13.9484 14.6517 14.6517C13.9484 15.355 12.9946 15.75 12 15.75Z"
        fill={fill}
      />
    </svg>
  );
};