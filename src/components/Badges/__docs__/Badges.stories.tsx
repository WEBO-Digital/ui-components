import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Badges from "../Badges";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const closeSvg = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.77295 8.97705C9.87862 9.08272 9.93799 9.22605 9.93799 9.37549C9.93799 9.52493 9.87862 9.66825 9.77295 9.77393C9.66728 9.8796 9.52395 9.93897 9.37451 9.93897C9.22507 9.93897 9.08174 9.8796 8.97607 9.77393L5.99998 6.7969L3.02295 9.77299C2.91728 9.87866 2.77395 9.93803 2.62451 9.93803C2.47507 9.93803 2.33175 9.87866 2.22607 9.77299C2.1204 9.66732 2.06104 9.524 2.06104 9.37455C2.06104 9.22511 2.1204 9.08179 2.22607 8.97612L5.2031 6.00002L2.22701 3.02299C2.12134 2.91732 2.06197 2.774 2.06197 2.62455C2.06197 2.47511 2.12134 2.33179 2.22701 2.22611C2.33268 2.12044 2.47601 2.06108 2.62545 2.06108C2.77489 2.06108 2.91821 2.12044 3.02389 2.22611L5.99998 5.20315L8.97701 2.22565C9.08268 2.11997 9.226 2.06061 9.37545 2.06061C9.52489 2.06061 9.66821 2.11997 9.77388 2.22565C9.87956 2.33132 9.93892 2.47464 9.93892 2.62408C9.93892 2.77353 9.87956 2.91685 9.77388 3.02252L6.79685 6.00002L9.77295 8.97705Z"
      fill="#6B7280"
    />
  </svg>
);
const meta: Meta = {
  title: "components/Badges",
  component: Badges,
  tags: ["autodocs"],
  argTypes: {
    varient: {
      options: ["default", "yellow", "red", "green", "blue", "primary"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Badges>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    varient: "default",
    classes: "",
    children: "Badge",
    leftIcon: null,
    rightIcon: <div>{closeSvg}</div>,
  },
};
