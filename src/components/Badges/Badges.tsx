import React from "react";
import { cn } from "../../lib/utils";

type badgeVarient = "default" | "yellow" | "red" | "green" | "blue" | "primary";

const defaultBadgeClass =
  "rounded leading-none inline-flex items-center justify-center capitalize py-1 px-2 text-xs gap-1.5";
const badgeVarientClasses: Record<badgeVarient, string> = {
  default: "badge-default bg-gray-100 text-gray-800",
  yellow: "badge-yellow bg-yellow-100 text-yellow-800",
  red: "badge-red bg-red-100 text-red-800",
  green: "badge-green bg-green-100 text-green-800",
  blue: "badge-blue bg-blue-100 text-blue-800",
  primary: "badge-primary bg-primary-100 text-primary-800",
};

export interface ButtonProps {
  varient: badgeVarient;
  children: React.ReactNode;
  classes?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Badges: React.FC<ButtonProps> = ({
  varient,
  children,
  classes,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  return (
    <span
      {...props}
      className={cn(defaultBadgeClass, badgeVarientClasses[varient], classes)}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </span>
  );
};

export default Badges;
