import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { fn } from "@storybook/test";
import Breadcrumbs from "../Breadcrumb";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const path = [
  {
    id: 0,
    link: "/",
    label: "Home",
  },
  {
    id: 1,
    link: "/news",
    label: "News",
  },
  {
    id: 2,
    link: "/nepal-win-the-race",
    label: "Nepal win the race",
  },
];
const PrevPageSvg = () => (
  <svg
    width="20"
    height="20"
    className="cursor-pointer"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5005 10.0003C17.5005 10.1661 17.4346 10.3251 17.3174 10.4423C17.2002 10.5595 17.0413 10.6253 16.8755 10.6253H4.63409L9.19268 15.1832C9.25075 15.2412 9.29681 15.3102 9.32824 15.386C9.35967 15.4619 9.37584 15.5432 9.37584 15.6253C9.37584 15.7075 9.35967 15.7888 9.32824 15.8647C9.29681 15.9405 9.25075 16.0095 9.19268 16.0675C9.13461 16.1256 9.06567 16.1717 8.9898 16.2031C8.91393 16.2345 8.83261 16.2507 8.75049 16.2507C8.66837 16.2507 8.58705 16.2345 8.51118 16.2031C8.43531 16.1717 8.36637 16.1256 8.3083 16.0675L2.6833 10.4425C2.62519 10.3845 2.57909 10.3156 2.54764 10.2397C2.51619 10.1638 2.5 10.0825 2.5 10.0003C2.5 9.91821 2.51619 9.83688 2.54764 9.76101C2.57909 9.68514 2.62519 9.61621 2.6833 9.55816L8.3083 3.93316C8.42558 3.81588 8.58464 3.75 8.75049 3.75C8.91634 3.75 9.0754 3.81588 9.19268 3.93316C9.30996 4.05044 9.37584 4.2095 9.37584 4.37535C9.37584 4.5412 9.30996 4.70026 9.19268 4.81753L4.63409 9.37535H16.8755C17.0413 9.37535 17.2002 9.4412 17.3174 9.55841C17.4346 9.67562 17.5005 9.83459 17.5005 10.0003Z"
      fill="#121212"
    />
  </svg>
);
const meta: Meta = {
  title: "components/BreadCrumb",
  component: Breadcrumbs,
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Breadcrumb Page",
    path: path,
    children: <div>add anything here</div>,
    previcon: <PrevPageSvg />,
    onClick: fn(),
  },
};
