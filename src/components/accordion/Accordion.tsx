import React, { useState, ReactNode } from "react";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  iconUp?: ReactNode;
  iconDown?: ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  iconDown,
  iconUp,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-gray-200 first:border-t-0">
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-3 text-left focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-gray-900">{title}</span>
        {open ? <>{iconUp}</> : <>{iconDown}</>}
      </button>
      {open && (
        <div className="px-4 py-3 bg-gray-50">
          <div className="text-gray-700">{children}</div>
        </div>
      )}
    </div>
  );
};

export interface AccordionProps {
  items: AccordionItemProps[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="border border-gray-200 rounded-md">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.children}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
