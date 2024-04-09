import React, { useState, ReactNode } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import Icon from "../icon/Icon";
import { cn } from "../../lib/utils";
import { accordionStyles } from "./helpers";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  UpIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  DownIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const AccordionItem: React.FC<
  AccordionItemProps & {
    open: boolean;
    onToggle: (index: number) => void;
    index: number;
  }
> = ({ title, children, open, onToggle, index, UpIcon, DownIcon }) => {
  return (
    <div className="border-t border-gray-200 first:border-t-0">
      <button
        type="button"
        className={cn(
          accordionStyles({ accordionStates: open ? "active" : null }),
        )}
        onClick={() => onToggle(index)}
      >
        <span className="font-medium text-gray-900">{title}</span>
        {open ? (
          <>
            {UpIcon ? (
              <UpIcon className="w-5 h-5 text-gray-500" />
            ) : (
              <Icon name="ChevronUpIcon" />
            )}
          </>
        ) : (
          <>
            {DownIcon ? (
              <DownIcon className="w-5 h-5 text-gray-500" />
            ) : (
              <Icon name="ChevronDownIcon" />
            )}
          </>
        )}
      </button>
      <div className={`px-4 py-3 bg-gray-50 ${open ? "block" : "hidden"}`}>
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export interface AccordionProps {
  items: AccordionItemProps[];
  allowMultiple?: boolean;
  UpIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  DownIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  UpIcon = ChevronUpIcon,
  DownIcon = ChevronDownIcon,
}) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      // If allowMultiple is true, toggle the item's state
      setOpenItems((prevOpenItems) =>
        prevOpenItems.includes(index)
          ? prevOpenItems.filter((item) => item !== index)
          : [...prevOpenItems, index],
      );
    } else {
      // If allowMultiple is false, only keep the clicked item open
      setOpenItems([index]);
    }
  };

  return (
    <div className="border border-gray-200 rounded-md">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          open={openItems.includes(index)}
          onToggle={handleToggle}
          index={index}
          UpIcon={UpIcon}
          DownIcon={DownIcon}
        >
          {item.children}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
