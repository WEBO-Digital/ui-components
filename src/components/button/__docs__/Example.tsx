import React, { FC } from "react";
import Button, { ButtonProps } from "../Button";

const Example: FC<ButtonProps> = ({
  disabled = false,
  onClick = () => {},
  size = "default",
  buttonType = "primary",
  rounded = "default",
  spacing = "default",
  label,
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
      <Button
        size={size}
        disabled={disabled}
        buttonType={buttonType}
        rounded={rounded}
        spacing={spacing}
        label={label}
        onClick={onClick}
      />
    </div>
  );
};

export default Example;
