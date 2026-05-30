import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        apple: {
          black: "#000000",
          card: "#161617",
          "card-alt": "#1c1c1e",
          white: "#f5f5f7",
          grey: "#86868b",
          "grey-light": "#a1a1a6",
          blue: "#0071e3",
          "blue-hover": "#0077ed",
          border: "rgba(255, 255, 255, 0.08)",
        },
      },
      backdropBlur: {
        nav: "20px",
      },
      letterSpacing: {
        tight: "-0.02em",
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
