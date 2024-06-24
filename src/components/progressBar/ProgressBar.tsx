import React, { useEffect, useState } from "react";
export interface ProgressBarProps {
  percentage?: number;
  color?: string;
  // title?: string;
  min?: number;
  max?: number;
}
export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  min,
  max,
  color,
}) => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  useEffect(() => {
    setIsAnimated(true);
  }, [percentage]);
  return (
    <div className="w-full flex items-center  gap-2 text-gray-400 text-sm">
      <div className="">£{min}</div>
      <div className="h-2 bg-neutral-200 dark:bg-neutral-600 w-96 rounded overflow-hidden">
        <div
          className={`h-full rounded transition-all duration-500 ${
            isAnimated ? "animate-progress" : ""
          }`}
          style={{
            width: `${percentage}%`,
            backgroundColor: `${color}`,
          }}
        ></div>
      </div>
      <div>£{max}</div>
      {/* <span>{`${percentage}%`}</span>
      <span>{title}</span> */}
    </div>
  );
};
