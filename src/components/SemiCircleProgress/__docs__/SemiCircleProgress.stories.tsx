import {
  SemiCircleProgressProps,
  SemiCircleProgress,
} from "../SemiCircleProgress";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SemiCircleProgress> = {
  title: "Components/SemiCircleProgress",
  component: SemiCircleProgress,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

export const Primary: StoryObj<SemiCircleProgressProps> = {
  args: {
    percentage: 10,
    diameter: 200,
    showPercentValue: true,
    stroke: "red",
    strokeWidth: 20,
    direction: "right",
    title:'Tadow'
  },
};
