import React, { useEffect, useState } from "react";
export interface ProgressBarProps {
  percentage?: string;
  color?: string;
  title?: string;
}
export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  title,
  color,
}) => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  useEffect(() => {
    setIsAnimated(true);
  }, [percentage]);
  return (
    <div className="w-full flex flex-col items-center text-xl">
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
      <span>{`${percentage}%`}</span>
      <span>{title}</span>
    </div>
  );
};
