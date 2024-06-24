import React from "react";

import { AlertIcon } from "./alertIcon";
import { cn } from "../../lib/utils";

type AlertType = "success" | "error" | "info" | "warning" | "default";

const defaultBttnClass = "py-4 px-6 border-l-4 w-full rounded";

const AlertTypeClasses: Record<AlertType, string> = {
  success: "bg-green-50 border-l-green-600",
  error: "bg-warning-50 border-l-warning-600",
  info: "bg-blue-50 border-l-blue-600",
  warning: "bg-yellow-50 border-l-yellow-600",
  default: "bg-gray-50 border-l-gray-600",
};

export interface AlertProps {
  type: AlertType;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  link?: string;
  openState: boolean;
  classes?: string;
  alertIcon?: React.ReactNode;
  setOpenState: React.Dispatch<React.SetStateAction<boolean>>;
}
const Alert: React.FC<AlertProps> = ({
  type = "default",
  openState = false,
  title,
  description,
  link,
  classes,
  children,
  alertIcon,
  setOpenState,
}: AlertProps) => {
  return (
    <>
      {openState === true ? (
        <div className={cn(defaultBttnClass, AlertTypeClasses[type], classes)}>
          <div className="pl-14 relative">
            <span className="icon left-0 top-0 block absolute">
              {alertIcon ? alertIcon : AlertIcon(type)}
            </span>
            <div className="flex items-start justify-between gap-2">
              <div className="content">
                {title && (
                  <h3 className="text-base font-semibold m-0 mb-1 title">
                    {title}
                  </h3>
                )}
                {description && (
                  <div className="description text-base font-normal">
                    {description}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-1.5">
                <a href={link} className="text-xs">
                  View Details
                </a>
                <span className="text-xs" onClick={() => setOpenState(false)}>
                  Dismiss
                </span>
              </div>
            </div>
            {children && <div>{children}</div>}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Alert;
