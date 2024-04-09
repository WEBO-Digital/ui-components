/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Add custom transition properties
      transitionProperty: {
        height: "height",
      },
      colors: {
        cds_primary: {
          50: "#fafdff",
          100: "#f5faff",
          200: "#d7edfe",
          300: "#bee1fe",
          400: "#9fd3fe",
          500: "#7cc3fd",
          600: "#54b1fd",
          700: "#1a96fc",
          800: "#037bdd",
          900: "#025aa1",
        },
        cds_accent: {
          50: "#f6f7f9",
          100: "#eceff3",
          200: "#d6dde6",
          300: "#c0cbd8",
          400: "#a3b4c7",
          500: "#849AB4",
          600: "#5B7695",
          700: "#293543",
          800: "#1F2833",
          900: "#131920",
        },
        cds_danger: {
          0: "#FFFFFF",
          50: "#FFEAE8",
          100: "#FFD8D8",
          200: "#FFB7B1",
          300: "#FF928B",
          400: "#FF6E64",
          500: "#FF4A3D",
          600: "#CC3B31",
          700: "#992C25",
          800: "#661E18",
          900: "#330F0C",
        },
      },
    },
  },
  plugins: [],
};
