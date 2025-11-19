import type { Config } from "tailwindcss";

// Tailwind configuration that scans src/ for class names and extends tokens.
const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        // Custom serif used across hero/headers.
        newsreader: ["\"Newsreader\"", "serif"],
      },
      colors: {
        // Primary brand color reused in components.
        brand: "rgba(123,36,36,0.92)",
      },
    },
  },
  plugins: [],
};

export default config;
