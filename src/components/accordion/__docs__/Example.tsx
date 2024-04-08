import React, { FC } from "react";
import Accordion, { AccordionProps } from "../Accordion";
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
const Example: FC<AccordionProps> = () => {
  return <Accordion items={items} />;
};

export default Example;
