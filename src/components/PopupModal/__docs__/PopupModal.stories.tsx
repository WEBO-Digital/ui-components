import { Meta, StoryObj } from "@storybook/react";
import PopupModal from "../PopupModal";
import { ProgressBarProps } from "../../progressBar/ProgressBar";
const meta: Meta<typeof PopupModal> = {
  title: "Components/PopupModal",
  component: PopupModal,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

export const Primary: StoryObj<ProgressBarProps> = {
  args: {
    min: 0,
    max: 100,
    percentage: 40,
    color: "red",
  },
};
