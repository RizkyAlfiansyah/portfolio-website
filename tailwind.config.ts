import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      colors: {
        base: {
          light: "#f7f6f3",
          dark: "#0b0d0c"
        },
        ink: {
          light: "#0e0f12",
          dark: "#f4f4f0"
        },
        muted: {
          light: "#6b6f76",
          dark: "#b2b6bf"
        },
        line: {
          light: "#e6e4df",
          dark: "#1c1f1e"
        },
        accent: {
          light: "#0f766e",
          dark: "#5eead4"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(15, 118, 110, 0.2), 0 18px 45px -25px rgba(15, 118, 110, 0.6)"
      },
      backgroundImage: {
        "grain": "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\" viewBox=\"0 0 120 120\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"120\" height=\"120\" filter=\"url(%23n)\" opacity=\"0.07\"/></svg>')",
        "radial-spot": "radial-gradient(circle at 20% 20%, rgba(15, 118, 110, 0.18), transparent 55%), radial-gradient(circle at 80% 0%, rgba(14, 15, 18, 0.14), transparent 45%)"
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.65" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out both",
        "pulse-soft": "pulse-soft 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
