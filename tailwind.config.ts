import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      background: "var(--background)",
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
    extend: {
      fontFamily: {
        body: ["var(--outfit)"],
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      backdropBlur: {
        noisy: "url('/public/noise.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("autoprefixer")],
};
export default config;
