import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        newsreader: ["\"Newsreader\"", "serif"],
      },
      colors: {
        brand: "rgba(123,36,36,0.92)",
      },
    },
  },
  plugins: [],
};

export default config;

