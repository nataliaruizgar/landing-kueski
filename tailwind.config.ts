import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "768px",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "Sora", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      colors: {
        brand: {
          red: {
            50: "#FEF4F4",
            100: "#F9D2D2",
            200: "#F1B0A9",
            300: "#E9897E",
            400: "#E26153",
            500: "#DB3B2B",
            600: "#DB362B",
            700: "#CC0000",
          },
        },
        red: {
          50: "#FEF4F4",
          100: "#F9D2D2",
          200: "#F1B0A9",
          300: "#E9897E",
          400: "#E26153",
          500: "#DB3B2B",
          600: "#DB362B",
          700: "#CC0000",
        },
        blue: {
          100: "#F0F8FF",
          300: "#7DB3FF",
          500: "#2180FF",
          600: "#0075FF",
          700: "#005EDC",
          900: "#0F3D7A",
        },
        gray: {
          50: "#F8F8F8",
          100: "#F3F3F3",
          200: "#E7E7E7",
          300: "#DBDBDB",
          400: "#CFCFCF",
          500: "#C3C3C3",
          600: "#9CA3AF",
          700: "#6B7280",
          800: "#4B5563",
          900: "#1F2937",
        },
        oxford: "#4C4C4C",
      },
      boxShadow: {
        card: "0 0 25px 2px rgba(0,0,0,0.06)",
        cardHover: "0 18px 60px -10px rgba(226,97,83,0.18)",
        mockup: "0 30px 80px -20px rgba(0,0,0,0.15)",
        glassHeader: "0 0 25px 2px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        card: "24px",
        button: "18px",
        chip: "999px",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, #FDF0EF 0%, #FFFFFF 60%, #FFFFFF 100%)",
        "cta-gradient": "linear-gradient(to bottom right, #E59086, #F2B5AE)",
        "mesh-dark":
          "radial-gradient(ellipse at 25% 35%, rgba(226,97,83,0.10), transparent 50%), radial-gradient(ellipse at 75% 80%, rgba(33,128,255,0.05), transparent 50%), #0f1219",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "0.85", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-soft": "pulse-soft 6s ease-in-out infinite",
        marquee: "marquee 35s linear infinite",
        float: "float 6s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
