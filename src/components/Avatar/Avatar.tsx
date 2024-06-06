import React from "react";
import { cn } from "../../lib/utils";

export interface AvatarProps {
  classes?: string;
  avatar: { id; imageSrc; name }[];
  width?: number;
  height?: number;
}

const defaultclass =
  "rounded-full w-14 h-14 border border-4 border-gray-500 overflow-hidden block first:ml-0 -ml-2";

const Avatar: React.FC<AvatarProps> = ({ classes, avatar }: AvatarProps) => {
  if (avatar?.length < 1) return;
  return (
    <div className="avatar">
      {avatar && (
        <div className="avatar-wrap flex items-center">
          {avatar.map((item) => {
            return (
              <figure className={cn(defaultclass, classes)} key={item?.id}>
                <img
                  src={item?.imageSrc}
                  alt={item?.name}
                  className="w-full h-full object-cover"
                />
              </figure>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Avatar;
