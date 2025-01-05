/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#F8F8F8", // Light Mode Background
          dark: "#181818", // Dark Mode Background
        },
        text: {
          light: "#333333", // Light Mode Text
          dark: "#FFFFFF", // Dark Mode Text
        },
        accent: "#E67E22", // Burnt Orange
        secondary: {
          light: "#F5C299", // Creamy Peach
          dark: "#5C3C27", // Dark Brown
        },
        tertiary: {
          light: "#D9D9D9", // Light Gray
          dark: "#333333", // Dark Gray
        },
        interactive: {
          hover: "#E67E2280", // Hover state (Burnt Orange with 50% opacity)
          active: "#E67E2270", // Active state (Burnt Orange with 40% opacity)
        },
      },
    },
  },
  plugins: [],
};
