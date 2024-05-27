import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        it: {
          purple: {
            100: "#C0C4F5",
            200: "#9993EB",
            300: "#7857E0",
          },
          teal: {
            100: "#C9FFFA",
            200: "#87E6DF",
            300: "#36D4CA",
          },
          blue: {
            100: "#CEE8FF",
            200: "#5796D5",
            300: "#2979E6",
          },
          gray: {
            100: "#F3F7FA",
            200: "#E5ECF2",
            300: "#B2C5D4",
            400: "#9BACB9",
            500: "#6D7C87",
            600: "#4C545A",
          },
          black: "#181A1A",
        },
      },
      fontFamily: {
        afacad: ["var(--font-afacad)"],
        lexend: ["var(--font-lexend)"],
        instrument: ["var(--font-instrument-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
