import React, { type MouseEventHandler } from "react";

type ButtonProps = {
  text: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  // Add any other suitable props here
};

const Button: React.FC<ButtonProps> = ({
  text,
  primary = false,
  disabled = false,
  size = "medium",
  onClick,
  // Add any other suitable props here
}) => {
  const buttonClasses = `rounded-md px-4 py-2 ${
    primary ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
  } ${
    size === "small" ? "text-sm" : size === "large" ? "text-lg" : "text-base"
  }`;

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
