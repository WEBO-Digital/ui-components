import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Button",
  component: Example,
  argTypes: {
    buttonType: {
      options: [
        "primary",
        "secondary",
        "warning",
        "outline",
        "disabled",
        "error",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["default", "small", "large", "xxl"],
      control: { type: "radio" },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Example>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    label: "Button",
    size: "default",
    onClick: () => {
      window.console.log("Button clicked!");
    },
    buttonType: "primary",
  },
};
