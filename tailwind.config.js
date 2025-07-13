// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      colors: {
        "neutral-0": "#ffffff",
        "neutral-10": "#fafafa",
        "neutral-20": "#f5f5f5",
        "neutral-30": "#ebebeb",
        "neutral-40": "#dedede",
        "neutral-50": "#bfbfbf",
        "neutral-60": "#b0b0b0",
        "neutral-80": "#949494",
        "neutral-100": "#757575",
        "neutral-200": "#666666",
        "neutral-300": "#575757",
        "neutral-500": "#3B3B3B",
        "neutral-600": "#2e2e2e",
        "neutral-700": "#1c1c1c",
        "neutral-900": "#000000",
        "neutral-01-100": "#fefefe",
        "neutral-04-100": "#6c7275",
        "neutral-05-100": "#343839",
        "neutral-07-100": "#141718",
        "primary-200": "#1ee5fa",
        "primary-300": "#18b7c8",
        "primary-400": "#128996",
        card: "#f3f5f7",
        offer: "#38cb89",
        "nav-menu": "#0f121c",
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        opensans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
};
