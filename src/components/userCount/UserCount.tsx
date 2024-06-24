import Skeleton from "react-loading-skeleton";
import React from "react";

export interface UserCountItemProps {
  title: string;
  variant?: "currency" | "count";
  count: number;
  children: React.ReactNode;
  isLoading?: boolean;
}

const UserCountItem: React.FC<UserCountItemProps> = ({
  title = "Total Users",
  count = 70,
  variant = "count",
  isLoading = false,
  ...props
}: UserCountItemProps) => {
  return (
    <div
      className={`gap-4 inline-flex items-center user-count-card justify-between bg-danger-0 rounded p-4`}
    >
      {props.children ? props.children : ""}
      <div className="text-field">
        {isLoading ? (
          <Skeleton height={29} width={100} count={2} />
        ) : (
          <>
            <h4 className="text-neutral-500 text-base font-normal">{title}</h4>
            <h3 className="text-neutral-500 text-[28px] font-semibold">
              {variant === "currency" ? (
                <>
                  {count.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                  })}
                </>
              ) : (
                <>
                  {count.toLocaleString("en-US", { minimumFractionDigits: 0 })}
                </>
              )}
            </h3>
          </>
        )}
      </div>
    </div>
  );
};

export default UserCountItem;
