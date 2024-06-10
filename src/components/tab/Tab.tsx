import React from "react";
import { IconUser } from "../icons/regular/user";

export interface TabProps {
  iteration?: number;
  content?: string;
  fill?: string;
}
export const GroupTab: React.FC<TabProps> = ({ iteration, content, fill }) => {
  const existingArray = [iteration, content];
  const newArray = [...existingArray];
  return (
    <div className="flex flex-wrap gap-2">
      {Array(iteration)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className={`border-b-2 flex justify-center items-center gap-2 border-${fill} p-2`}
          >
            <div className="border rounded-full p-2 ">
              <IconUser size={18} />
            </div>
            <span className="">{content}</span>
          </div>
        ))}
    </div>
  );
};
