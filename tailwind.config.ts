import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#06b6d4",
        secondary: "#8b5cf6",
        accent: "#f59e0b",
        muted: "#64748b",
        cyan: "#06b6d4",
        purple: "#8b5cf6",
        glass: {
          DEFAULT: "var(--card)",
          border: "var(--border)",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-hero":
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(6, 182, 212, 0.12) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 20% 90%, rgba(139, 92, 246, 0.08) 0%, transparent 50%), radial-gradient(ellipse 50% 30% at 85% 70%, rgba(245, 158, 11, 0.06) 0%, transparent 50%), linear-gradient(180deg, #0a0e17 0%, #0f172a 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
