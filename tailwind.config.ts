import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,tsx}",
    "./components/**/*.{js,ts,tsx}",
    "./app/**/*.{js,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      background: "var(--background)",
      prim: "var(--prim)",
      sec: "var(--sec)",
      tert: "var(--tert)",
      ghost: "var(--ghost)",
      card: "var(--card)",
      cardHover: "var(--cardHover)",
      primary: "var(--fg)",
      light: "var(--fgLight)",
      lighter: "var(--fgLighter)",
      lightest: "var(--fgLightest)",
      border: "var(--border)",
      borderLight: "var(--borderLight)",
      borderLighter: "var(--borderLighter)",
      borderLightest: "var(--borderLightest)",
      icon: "var(--icon)",
      iconLight: "var(--iconLight)",
      iconLighter: "var(--iconLighter)",
      iconLightest: "var(--iconLightest)",
      amber: "var(--badgeAmber)",
      cyan: "var(--badgeCyan)",
      ruby: "var(--badgeRuby)",
      jade: "var(--badgeJade)",
      amber_bg: "var(--badgeAmberBg)",
      cyan_bg: "var(--badgeCyanBg)",
      ruby_bg: "var(--badgeRubyBg)",
      jade_bg: "var(--badgeJadeBg)",
    },
    fontFamily: {
      body: ["var(--outfit)"],
      mono: ["var(--font-geist-mono)"],
    },
    extend: {
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        in: {
          "0%": { transform: "translateY(18px)", opacity: "0%" },
          "100%": { transform: "translateY(0)", opacity: "100%" },
        },
        "in-reverse": {
          "0%": { transform: "translateY(-18px)", opacity: "0%" },
          "100%": { transform: "translateY(0px)", opacity: "100%" },
        },
      },
      animation: {
        in: "in .6s both",
        "in-reverse": "in-reverse .6s both",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("autoprefixer")],
};

export default config;
