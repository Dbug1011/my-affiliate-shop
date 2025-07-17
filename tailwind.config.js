import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#000000",
        foreground: "#22c55e",
        techy: "#22c55e",
        pinky: "#ec4899",
        primary: {
          DEFAULT: "#22c55e",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#1f2937",
          foreground: "#22c55e",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#111111",
          foreground: "#22c55e",
        },
        accent: {
          DEFAULT: "#22c55e",
          foreground: "#000000",
        },
        popover: {
          DEFAULT: "#000000",
          foreground: "#22c55e",
        },
        card: {
          DEFAULT: "#000000",
          foreground: "#22c55e",
        },
      },
      borderRadius: {
        lg: "0px",
        md: "0px",
        sm: "0px",
      },
      borderWidth: {
        "3": "3px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', '"Courier New"', '"Monaco"', '"Menlo"', "monospace"],
        mono: ["ui-monospace", "SFMono-Regular", "Monaco", "Consolas", "Liberation Mono", "Menlo", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
