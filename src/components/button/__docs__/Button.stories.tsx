import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Button",
  component: Example,
} satisfies Meta<typeof Example>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Button",
    onClick: () => {
      window.console.log("Button clicked!");
    },
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    buttonType: "secondary",
    onClick: () => {
      window.console.log("Button clicked!");
    },
  },
};

export const Large: Story = {
  args: {
    label: "Button",
    size: "large",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
    onClick: () => {
      window.console.log("Button clicked!");
    },
  },
};
