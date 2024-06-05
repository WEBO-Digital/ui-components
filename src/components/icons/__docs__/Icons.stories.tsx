import type { Meta, StoryObj } from "@storybook/react";
import IconsComponent from "../IconsComponent";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const Meta: Meta = {
  title: "components / Icons",
  component: IconsComponent,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "base", "lg", "xl", "2xl", "3xl", "4xl"],
      control: { type: "select" },
    },
    icon: {
      options: [
        "reg-check",
        "reg-close",
        "reg-hide",
        "reg-arrow-left",
        "reg-arrow-right",
        "reg-headset",
        "reg-question",
        "reg-building",
        "reg-user",
        "reg-check-circle",
        "reg-chevron-right",
        "reg-search",
        "reg-cart",
        "reg-chat",
        "reg-notification",
        "reg-trend-up",
        "reg-trend-down",
        "reg-arrows-up",
        "reg-arrows-down-up",
        "reg-arrows-down",
        "reg-arrow-line-left",
        "reg-arrow-line-right",
        "reg-dots-three-vertical",
        "reg-sidebar-expand",
        "reg-sidebar-collapsed",
        "reg-sort-ascending",
        "reg-sort-descending",
        "reg-edit",
        "reg-chevron-up",
        "reg-add",
        "reg-add-circle",
        "reg-export",
        "reg-user-three",
        "reg-id-card",
        "reg-dots-three",
        "reg-filter",
        "reg-trash",
        "reg-upload",
        "reg-crown",
        "reg-compare",
        "reg-heart",
        "reg-pdf",
        "reg-link",
        "reg-minus",
        "reg-arrow-counter-clockwise",
        "reg-reset",
        "reg-ruler",
        "reg-map-in",
        "reg-phone",
        "reg-image",
        "reg-thumb",
        "reg-list",
        "reg-squares-four",
        "reg-list-magnifying-glass",
        "reg-file-arrow-down",
        "reg-download-simple",
        "reg-printer",
        "reg-trash",
        "reg-building-office",
        "reg-envelope-simple",
        "reg-phone",
        "reg-map-pin-area",
        "reg-pencil-simple",
        "reg-receipt",
        "reg-calendar-blank",
        "reg-file-text",
        "reg-paperclip",
        "reg-spinner",
        "reg-magic-wand",
        "reg-chat-circle-dots",
        "reg-smartphone",
        "reg-envelope",
        "reg-shipment",
        "reg-copy",
        "reg-stack",
        "fill-cart",
        "fill-carret-up-down",
        "fill-chat",
        "fill-check-circle",
        "fill-checkList",
        "fill-color-swatch",
        "fill-compare",
        "fill-cube",
        "fill-dispatched",
        "fill-error",
        "fill-file-pdf",
        "fill-file-png",
        "fill-flag",
        "fill-gear",
        "fill-happy",
        "fill-info",
        "fill-leader",
        "fill-logout",
        "fill-marketing-resources",
        "fill-notifications",
        "fill-order-confirmation",
        "fill-order-picked",
        "fill-order-processing",
        "fill-order-received",
        "fill-orders",
        "fill-overview",
        "fill-paper-plane-right",
        "fill-point",
        "fill-product",
        "fill-question",
        "fill-realtime-stock",
        "fill-receipt",
        "fill-resources",
        "fill-setting",
        "fill-sidebar",
        "fill-sparkle",
        "fill-star",
        "fill-stock",
        "fill-support",
        "fill-user",
        "fill-user-circle",
        "fill-users",
        "fill-warehouse",
        "fill-warning",
        "fill-website",
        "fill-xls",
      ],
      control: { type: "select" },
    },
    // fill: {
    //   options: [
    //     '#F7F0F4',
    //     '#F2E4EC',
    //     '#C997AE',
    //     '#7B2F3F ',
    //     '#6E2534 ',
    //     '#4A111A ',
    //     '#025aa1 ',
    //     '#FFFDF2',
    //     '#FFFCE8 ',
    //     '#FCEAA2',
    //     '#F8B717 ',
    //     '#DE9D12',
    //     '#945707',
    //     '#F9FAFB',
    //     '#F3F4F6 ',
    //     '#D1D5DB',
    //     '#6B7280 ',
    //     '#4B5563',
    //     '#1F2937 ',
    //     '#FEF2F2 ',
    //     '#FEE2E2',
    //     '#FCA5A5 ',
    //     '#EF4444 ',
    //     '#DC2626',
    //     '#991B1B ',
    //     '#F0FDF4',
    //     '#DCFCE7 ',
    //     '#86EFAC',
    //     '#22C55E',
    //     '#16A34A',
    //     '#166534',
    //     '#EFF6FF',
    //     '#DBEAFE',
    //     '#93C5FD',
    //     '#3B82F6',
    //     '#2563EB',
    //     '#1E40AF',
    //   ],
    //   control: { type: 'select' },
    // },
  },
} satisfies Meta<typeof IconsComponent>;

export default Meta;

type Story = StoryObj<typeof Meta>;

export const Primary: Story = {
  args: {
    size: "4xl",
    icon: "reg-hide",
    fill: "red",
    // width: 0,  //fsdjfhnjn
    // height: 0
  },
};
