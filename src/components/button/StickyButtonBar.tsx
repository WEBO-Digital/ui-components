import React from 'react'
interface StickyButtonBarProps {
  buttonOne: React.ReactNode;
  buttonTwo: React.ReactNode;
}

export const StickyButtonBar = ({
  buttonOne,
  buttonTwo,
}: StickyButtonBarProps) => {
  return (
    <div className="bottom-updates-field z-10 flex items-center justify-end gap-3 mt-6 px-6 py-4 bg-accent-700 rounded">
      {buttonOne}
      {buttonTwo}
    </div>
  );
};
