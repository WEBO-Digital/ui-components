import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Button",
  component: Example,
  //👇 Enables auto-generated documentation for the component story
  // tags: ["autodocs"],
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
      control: { type: "select" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    spacing: {
      options: ["default", "small", "large", "xxl"],
      control: { type: "select" },
    },
    rounded: {
      options: ["default", "sm", "lg", "xl", "xxl", "none", "full"],
      control: { type: "select" },
    },
    leftIcon: {
      control: { type: "text" },
    },
    rightIcon: {
      control: { type: "text" },
    },
  },
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  args: { onClick: fn((e) => console.log("Button clicked", e)) },
  parameters: {
    controls: { expanded: true },
    actions: { argTypesRegex: "^on.*" },
  },
} satisfies Meta<typeof Example>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Button",
    size: "default",
    buttonType: "primary",
    spacing: "default",
  },
  play: () => console.log("Button clicked"),
};

export const Secondary: Story = {
  args: {
    label: "Button",
    size: "default",
    buttonType: "secondary",
    spacing: "default",
  },
};

export const Warning: Story = {
  args: {
    label: "Button",
    size: "default",
    buttonType: "warning",
    spacing: "default",
  },
};

export const Outline: Story = {
  args: {
    label: "Button",
    size: "default",
    buttonType: "outline",
    spacing: "default",
  },
};
