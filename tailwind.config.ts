import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F0F0F0",
        foreground: "#121212",
        "bauhaus-bg": "#F0F0F0",
        "bauhaus-black": "#121212",
        "bauhaus-red": "#D02020",
        "bauhaus-blue": "#1040C0",
        "bauhaus-yellow": "#F0C020",
        "bauhaus-muted": "#E0E0E0",
      },
      boxShadow: {
        "hard-sm": "3px 3px 0px 0px #121212",
        "hard-md": "4px 4px 0px 0px #121212",
        "hard-lg": "6px 6px 0px 0px #121212",
        "hard-xl": "8px 8px 0px 0px #121212",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "Outfit", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
