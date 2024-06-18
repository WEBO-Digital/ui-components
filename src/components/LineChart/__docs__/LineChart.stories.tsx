import { Meta, StoryObj } from "@storybook/react";
import LineChart, { LineChartProps } from "../LineChart";
const meta: Meta<typeof LineChart> = {
  title: "Components/LineChart",
  component: LineChart,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

export const Primary: StoryObj<LineChartProps> = {
  args: {
    color: "black",
    items: [
      {
        dataOne: 10,
        dataTwo: 20,
        dataThree: 30,
        dataFour: 70,
        dataFive: 20,
      },
    ],
  },
};
