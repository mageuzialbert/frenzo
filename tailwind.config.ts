import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        // Brand
        magenta: {
          DEFAULT: "#E5097F",
          50: "#FFE5F2",
          100: "#FFC2DF",
          200: "#FF85BF",
          300: "#FB47A0",
          400: "#F11E8C",
          500: "#E5097F",
          600: "#B80665",
          700: "#8A044C",
          800: "#5C0333",
          900: "#2E0119",
        },
        violet: {
          DEFAULT: "#6D28D9",
          50: "#F3ECFD",
          100: "#E0CDFA",
          200: "#C4A5F4",
          300: "#A77CEE",
          400: "#8B53E7",
          500: "#6D28D9",
          600: "#5820AE",
          700: "#421882",
          800: "#2C1057",
          900: "#16082B",
        },
        ink: {
          DEFAULT: "#0A0A0F",
          soft: "#1A1A22",
          mute: "#2B2B36",
        },
        paper: {
          DEFAULT: "#FAFAF7",
          warm: "#F4F2EC",
        },
        // shadcn semantic
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-1": [
          "clamp(3.5rem, 8vw, 7rem)",
          { lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: "600" },
        ],
        "display-2": [
          "clamp(2.5rem, 6vw, 5rem)",
          { lineHeight: "0.98", letterSpacing: "-0.035em", fontWeight: "600" },
        ],
        "display-3": [
          "clamp(2rem, 4vw, 3.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "600" },
        ],
        eyebrow: [
          "0.75rem",
          { lineHeight: "1", letterSpacing: "0.18em", fontWeight: "500" },
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #E5097F 0%, #6D28D9 60%, #06B6D4 130%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(229,9,127,0.18) 0%, rgba(109,40,217,0.18) 60%, rgba(6,182,212,0.18) 130%)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
      },
      keyframes: {
        "marquee-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-x-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "blob": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-50px) scale(1.1)" },
          "66%": { transform: "translate(-20px,20px) scale(0.95)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "marquee-x": "marquee-x 40s linear infinite",
        "marquee-x-reverse": "marquee-x-reverse 50s linear infinite",
        "spin-slow": "spin-slow 30s linear infinite",
        "blob": "blob 18s ease-in-out infinite",
        "shimmer": "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
