import React from "react";
import "./inputField.css";
// eslint-disable-next-line react/prop-types
const PasswordStrengthIllustration = ({ strength }) => {
  const illustrations = {
    1: PasswordStrengthStep(1),
    2: PasswordStrengthStep(2),
    3: PasswordStrengthStep(3),
    4: PasswordStrengthStep(4),
  };

  return illustrations[strength] || null;
};
export default PasswordStrengthIllustration;

const PasswordStrengthStep = (p0: number) => {
  return (
    <div className="password-strength">
      {p0 === 1 && (
        <div className="very-week strength flex items-center gap-1.5">
          <span></span>
          <span></span>
          <span></span>
          <span></span>Very Weak
        </div>
      )}
      {p0 === 2 && (
        <div className="weak strength flex items-center gap-1.5">
          <span></span>
          <span></span>
          <span></span>
          <span></span>Weak
        </div>
      )}
      {p0 === 3 && (
        <div className="good strength flex items-center gap-1.5">
          <span></span>
          <span></span>
          <span></span>
          <span></span>Good
        </div>
      )}
      {p0 === 4 && (
        <div className="strong strength flex items-center gap-1.5">
          <span></span>
          <span></span>
          <span></span>
          <span></span>Strong
        </div>
      )}
    </div>
  );
};
