import { Meta, StoryObj } from "@storybook/react";
import { GroupTab, TabProps } from "../Tab";
const meta: Meta<typeof GroupTab> = {
  title: "Components/ToolTip",
  component: GroupTab,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

export const Primary: StoryObj<TabProps> = {
  args: {
    iteration: 2,
    content: "Null",
    fill: "bg-red-500",
  },
};
