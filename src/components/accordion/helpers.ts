import { cva } from "cva";

export const accordionStyles = cva(
  "w-full p-4 text-left focus:outline-none transition-height duration-300 ease-in-out flex items-center justify-between px-4 py-3",
  {
    variants: {
      accordionStates: {
        active: "bg-blue-500 text-white hover:bg-blue-600",
      },
    },
  },
);
