import { ProgressBar, ProgressBarProps } from "../ProgressBar";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

export const Primary: StoryObj<ProgressBarProps> = {
  args: {
    percentage: '40',
    color: "red",
    title: "Payable and Used",
  },
};
