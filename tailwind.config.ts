import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      colors: {
        black: "#080808",
        dark: "#0f0f0f",
        card: "#141414",
        border: "#1f1f1f",
        cream: "#f0ede8",
        muted: "#6b6b6b",
        accent: "#c8ff00",
        orange: "#ff6b35",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        blink: "blink 1.5s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
