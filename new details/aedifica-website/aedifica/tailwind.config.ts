import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1F2933",          // charcoal — primary text / dark surfaces
        "ink-soft": "#2C3E50",
        slate: "#3E4C59",
        muted: "#616E7C",
        rule: "#CBD2D9",
        "rule-soft": "#E4E7EB",
        paper: "#FFFFFF",
        cream: "#F5F4F0",         // warm paper
        "cream-deep": "#EDEBE4",
        accent: "#6667AB",        // lavender / indigo — single disciplined accent
        "accent-deep": "#4F4F8C",
        "accent-soft": "#E8E8F0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Söhne", "Helvetica Neue", "Arial", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: { content: "1200px", text: "720px" },
      letterSpacing: { tightest: "-0.03em" },
    },
  },
  plugins: [],
};
export default config;
