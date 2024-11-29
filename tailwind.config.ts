import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "slide-in-from-left": {
          "0%": { opacity: "0", transform: "translateX(-30%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "slide-in-from-left": "slide-in-from-left 0.2s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
