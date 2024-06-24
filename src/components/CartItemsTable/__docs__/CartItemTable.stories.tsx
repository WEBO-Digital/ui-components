import { Meta, StoryObj } from "@storybook/react";
import { CartItemTable, cartTableProps } from "../CartItemTable";
const meta: Meta<typeof CartItemTable> = {
  title: "Components/CartItemTable",
  component: CartItemTable,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["Show Variant", "Hide Variant"],
      control: { type: "select" },
    },
  },
};
export default meta;

export const Primary: StoryObj<cartTableProps> = {
  args: {
    desiredRows: 4,
    items: [
      {
        size: 6,
        leadTime: "5 - 7 Days (Est. 17th Mar, 2024)",
        itemStatus: "badge",
        quantity: 7,
      },
      {
        size: 6,
        leadTime: "5 - 7 Days (Est. 17th Mar, 2024)",
        itemStatus: "badge",
        quantity: 7,
      },
      {
        size: 6,
        leadTime: "5 - 7 Days (Est. 17th Mar, 2024)",
        itemStatus: "badge",
        quantity: 7,
      },
      {
        size: 6,
        leadTime: "5 - 7 Days (Est. 17th Mar, 2024)",
        itemStatus: "badge",
        quantity: 7,
      },
    ],
    variant: "Show Variants",
  },
};
