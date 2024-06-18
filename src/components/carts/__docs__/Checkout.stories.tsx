import { Meta, StoryObj } from "@storybook/react";
import Payment, { PaymentProps } from "../Payment";
import Checkout from "../checkout/Checkout";
const meta: Meta<typeof Payment> = {
  title: "Components/Checkout",
  component: Checkout,
  tags: ["autodocs"],
  argTypes: {
    borderStyle: {
      options: [
        "border-solid	",
        "border-dashed	",
        "border-dotted	",
        "border-double	",
        "border-hidden	",
      ],
      control: { type: "select" },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

export const Primary: StoryObj<PaymentProps> = {
  args: {
    borderStyle: "border-none",
    items: [
      {
        subtotal: 2525.55,
        carriageCost: 0.0,
        estimatedVat: "TBD",
        orderTotal: 2858.2,
      },
    ],
  },
};
