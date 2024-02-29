/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-black": "#2B2B2B",
        "color-grey": "#3B3B3B",
        "color-info": "#858584",
        "color-violet": "#A259FF",
        "color-blue": "#377DF7",
        "color-orange": "#FF6250",
        "color-white": "#ffffff",
        "color-green": "#00AC4F",
      },
    },

    fontSize: {
      "12px": ["12px", "13.2px"],
      "16px": ["16px", "22.4px"],
      "22px": ["22px", "35.2px"],
      "28px": ["28px", "39.2px"],
      "38px": ["38px", "45.6px"],
      "51px": ["51px", "56.1px"],
      "67px": ["67px", "73.7px"],
    },

    fontFamily: {
      "space-mono": ["Space Mono", "monospace"],
      "work-sans": ["Work Sans", "sans-serif"],
    },

    screens: {
      // 1085 < 1285

      xl: { max: "1085px" },

      lg: { max: "992px" }, // 2 nchi break point

      md: { max: "768px" },

      sm: { max: "576px" }, // 3 nchi break point
    },
  },
  plugins: [],
};
