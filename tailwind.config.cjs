/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        border: "#1B264B",
        accent: "#F1C73E",
        "accent-hover": "#E1BA39",
        typography: "#F0F0F0",
        background: "#0E1428",
        "background-secondary": "#151E3C",
        "background-secondary-hover": "#172143",
        "background-tertiary": "#1B264B",
      },
      padding: {
        desktop: "80px",
        mobile: "40px",
      },
      width: {
        "6/10": "60%",
        "4/10": "40%",
      },
      maxWidth: {
        medialarge: "calc(100vh - var(--info-height))",
        mediafit: "calc(100vh - var(--total-height))",
      },
      height: {
        header: "var(--header-height)",
        strip: "var(--strip-height)",
        info: "var(--info-height)",
        main: "calc(100vh - var(--header-height))",
        media: "calc(100vh - var(--total-height))",
        contentoffset: "calc(100vh - var(--top-offset))",
      },
      spacing: {
        headerH: "var(--header-height)",
      },
      screens: {
        // screen height 800px
        "h-md": { raw: "(min-height: 800px)" },
      },
    },
  },
  safelist: [
    "cc-con",
    "cc-con__btn",
    "cp-con",
    "cp-con__li",
    "cp-con__li__btn",
    "active",
  ],
  plugins: [require("@tailwindcss/typography")],
};
