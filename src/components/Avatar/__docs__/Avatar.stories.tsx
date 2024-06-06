import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "../Avatar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const avatars = [
  {
    id: 0,
    imageSrc:
      "https://images.pexels.com/photos/25184994/pexels-photo-25184994/free-photo-of-fashion-eastern-dresses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "avatar 1",
  },
  {
    id: 1,
    imageSrc:
      "https://images.pexels.com/photos/25184994/pexels-photo-25184994/free-photo-of-fashion-eastern-dresses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "avatar 1",
  },
  {
    id: 2,
    imageSrc:
      "https://images.pexels.com/photos/25184994/pexels-photo-25184994/free-photo-of-fashion-eastern-dresses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "avatar 1",
  },
];

const meta: Meta = {
  title: "components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    classes: "",
    avatar: avatars,
  },
};
