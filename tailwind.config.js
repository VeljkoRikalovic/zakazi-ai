/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light mode colors
        background: {
          DEFAULT: "#ffffff",
          dark: "#0a0a0a",
        },
        foreground: {
          DEFAULT: "#171717",
          dark: "#ededed",
        },
        surface: {
          DEFAULT: "#f5f5f5",
          dark: "#171717",
          hover: {
            DEFAULT: "#e5e5e5",
            dark: "#262626",
          },
        },
        primary: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        button: {
          DEFAULT: "#14b8a6",
          hover: "#0d9488",
          text: "#ffffff",
        },
      },
      backgroundImage: {
        "button-gradient": "linear-gradient(to right, #14b8a6, #0d9488)",
        "gradient-primary": "linear-gradient(to right, #14b8a6, #0d9488)",
      },
    },
  },
  plugins: [],
};
