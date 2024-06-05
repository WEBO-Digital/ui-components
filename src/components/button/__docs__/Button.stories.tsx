import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { fn } from "@storybook/test";
import Button from "../Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    viewBox="0 0 1024 1024"
    className="icon"
    version="1.1"
  >
    <path d="M373.2 600.3h278.7v8H373.2z" fill="#999999" />
    <path
      d="M512.6 948.3h-9.8c-58.7 0-106.7-48-106.7-106.7v-212h259v176.2c0 78.4-64.2 142.5-142.5 142.5z"
      fill="#F9C0C0"
    />
    <path
      d="M511.7 958.8c-40.7 0-79-15.9-108-44.9s-44.9-67.3-44.9-108V209.2h-32.2c-11.4 0-20.7-9.3-20.7-20.7v-17.6c0-11.4 9.3-20.7 20.7-20.7h370.1c11.4 0 20.7 9.3 20.7 20.7v17.6c0 11.4-9.3 20.7-20.7 20.7h-32.2v596.7c0 40.7-15.9 79-44.9 108-28.9 28.9-67.2 44.9-107.9 44.9zM326.6 165.1c-3.2 0-5.7 2.6-5.7 5.7v17.6c0 3.2 2.6 5.7 5.7 5.7h47.2v611.7c0 36.7 14.4 71.3 40.5 97.4 26.1 26.1 60.7 40.5 97.4 40.5s71.3-14.4 97.4-40.5c26.1-26.1 40.5-60.7 40.5-97.4V194.2h47.2c3.2 0 5.7-2.6 5.7-5.7v-17.6c0-3.2-2.6-5.7-5.7-5.7l-370.2-0.1z"
      fill="#999999"
    />
    <path
      d="M373.2 193.8h50.7v8h-50.7zM466.8 193.8h185.1v8H466.8z"
      fill="#999999"
    />
    <path
      d="M535.7 558.5c-14.1 0-25.5-11.4-25.5-25.5s11.4-25.5 25.5-25.5 25.5 11.4 25.5 25.5c0 14-11.4 25.5-25.5 25.5z m0-43c-9.6 0-17.5 7.8-17.5 17.5 0 9.6 7.8 17.5 17.5 17.5s17.5-7.8 17.5-17.5-7.9-17.5-17.5-17.5zM458.1 417.6c-21.3 0-38.6-17.3-38.6-38.6s17.3-38.6 38.6-38.6 38.6 17.3 38.6 38.6-17.3 38.6-38.6 38.6z m0-69.2c-16.9 0-30.6 13.7-30.6 30.6s13.7 30.6 30.6 30.6 30.6-13.7 30.6-30.6-13.7-30.6-30.6-30.6zM566.7 107.3c-11.4 0-20.7-9.3-20.7-20.7s9.3-20.7 20.7-20.7 20.7 9.3 20.7 20.7-9.2 20.7-20.7 20.7z m0-33.4c-7 0-12.7 5.7-12.7 12.7s5.7 12.7 12.7 12.7 12.7-5.7 12.7-12.7-5.7-12.7-12.7-12.7zM540.5 299.5c-16.7 0-30.3-13.6-30.3-30.3s13.6-30.3 30.3-30.3 30.3 13.6 30.3 30.3-13.6 30.3-30.3 30.3z m0-52.6c-12.3 0-22.3 10-22.3 22.3s10 22.3 22.3 22.3 22.3-10 22.3-22.3-10-22.3-22.3-22.3z"
      fill="#CE0202"
    />
  </svg>
);
const loadingIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    style={
      {
        "--style-string":
          "shape-rendering: auto; display: block; background: transparent;",
      } as React.CSSProperties
    }
    width="28"
    height="28"
  >
    <g>
      <circle
        strokeWidth="2"
        stroke="#e90c59"
        fill="none"
        r="0"
        cy="50"
        cx="50"
      >
        <animate
          begin="0s"
          calcMode="spline"
          keySplines="0 0.2 0.8 1"
          keyTimes="0;1"
          values="0;40"
          dur="1s"
          repeatCount="indefinite"
          attributeName="r"
        />
        <animate
          begin="0s"
          calcMode="spline"
          keySplines="0.2 0 0.8 1"
          keyTimes="0;1"
          values="1;0"
          dur="1s"
          repeatCount="indefinite"
          attributeName="opacity"
        />
      </circle>
      <circle
        strokeWidth="2"
        stroke="#46dff0"
        fill="none"
        r="0"
        cy="50"
        cx="50"
      >
        <animate
          begin="-0.5s"
          calcMode="spline"
          keySplines="0 0.2 0.8 1"
          keyTimes="0;1"
          values="0;40"
          dur="1s"
          repeatCount="indefinite"
          attributeName="r"
        />
        <animate
          begin="-0.5s"
          calcMode="spline"
          keySplines="0.2 0 0.8 1"
          keyTimes="0;1"
          values="1;0"
          dur="1s"
          repeatCount="indefinite"
          attributeName="opacity"
        />
      </circle>
      <g />
    </g>
  </svg>
);
const meta: Meta = {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
    designType: {
      options: ["solid", "outline", "tertiary"],
      control: { type: "select" },
    },
    varient: {
      options: ["primary", "yellow", "gray", "warning", "green", "blue"],
      control: { type: "select" },
    },
    type: {
      options: ["button", "submit", "reset"],
      control: { type: "select" },
    },
    handleClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "small",
    designType: "solid",
    varient: "primary",
    type: "button",
    classes: "",
    children: "Button",
    isDisabled: true,
    leftIcon: <div>{svg}</div>,
    rightIcon: <div>{svg}</div>,
    url: "",
    isLoading: true,
    loadingIcon: <div>{loadingIcon}</div>,
    handleClick: fn(),
  },
};
