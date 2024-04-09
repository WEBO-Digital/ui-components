/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Add custom transition properties
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
