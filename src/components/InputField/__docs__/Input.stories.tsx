import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../InputField";

const meta: Meta<typeof InputField> = {
  title: "components/Input Field",
  component: InputField,
  decorators: [
    (Story) => {
      const methods = useForm({ mode: "onTouched" });
      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      );
    },
  ],
  argTypes: {
    type: {
      options: ["text", "email", "password", "url", "number", "date", "search"],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryInput: Story = {
  args: {
    type: "email",
    requirement: false,
    placeholder: "",
    name: "inputName",
    label: "Input Label",
    max_width: 0,
    minHeight: 0,
    rules: {
      required: "This field is required",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: "Invalid email address",
      },
    },
  },
  render: (args) => <InputField {...args} />,
};
