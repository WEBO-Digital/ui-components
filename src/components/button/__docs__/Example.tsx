import React, { FC } from "react";
import Button, { ButtonProps } from "../Button";

const Example: FC<ButtonProps> = ({
  disabled = false,
  onClick = () => {},
  size = "small",
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Button size={size} disabled={disabled} label="Hello" onClick={onClick} />
    </div>
  );
};

export default Example;
