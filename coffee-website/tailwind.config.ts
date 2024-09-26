import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Using CSS variables
        foreground: "var(--foreground)", // Using CSS variables
        brown: {  // Adding the brown palette for the coffee shop theme
          50: '#fdf3e7',
          100: '#f7e0cb',
          200: '#e8c1a1',
          300: '#da9e73',
          400: '#c67845',
          500: '#a96135',  // Main brown
          600: '#874d2d',
          700: '#65371f',
          800: '#45260f',  // Dark brown
          900: '#2b1807',  // Very dark brown
        },
        yellow: {  // Accent color for hover effects or buttons
          500: '#f9d923',
        },
      },
    },
  },
  plugins: [],
};

export default config;
