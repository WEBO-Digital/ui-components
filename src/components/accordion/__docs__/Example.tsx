import React, { FC } from "react";
import Accordion, { AccordionProps } from "../Accordion";
import {
  ChevronDoubleUpIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/20/solid";

const items = [
  {
    title: "Accordion Item 1",
    children: <p>Content for Accordion Item 1</p>,
  },
  {
    title: "Accordion Item 2",
    children: <p>Content for Accordion Item 2</p>,
  },
  {
    title: "Accordion Item 3",
    children: <p>Content for Accordion Item 3</p>,
  },
];
const Example: FC<AccordionProps> = ({ allowMultiple }) => {
  return (
    <Accordion
      UpIcon={ChevronDoubleUpIcon}
      DownIcon={ChevronDoubleDownIcon}
      items={items}
      allowMultiple={allowMultiple}
    />
  );
};

export default Example;
