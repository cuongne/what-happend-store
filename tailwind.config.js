/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        notoSansKR: ["NotoSansKR", "sans-serif"],
        "notoSansKR-Bold": ["NotoSansKR-Bold", "sans-serif"],
        "notoSansKR-ExtraBold": ["NotoSansKR-ExtraBold", "sans-serif"],
        "notoSansKR-Medium": ["NotoSansKR-Medium", "sans-serif"],
        "notoSansKR-Regular": ["NotoSansKR-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
