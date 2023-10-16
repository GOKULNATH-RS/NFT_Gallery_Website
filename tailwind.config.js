/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    boxShadow:{
      primary: "1px 1px 30px 0 rgba(255,255,255,0.09)",
      primaryLight: "1px 1px 30px 0 rgba(0,0,0,0.15)",
      secondary: "1px 1px 30px 0 rgba(255,255,255,0.07)",
      secondaryLight: "1px 1px 30px 0 rgba(0,0,0,0.45)",
      tertiaryLight: "1px 1px 30px 0 rgba(0,0,0,0.25)",
      tertiary: "1px 1px 30px 0 rgba(255,255,255,0.13)",
    },
    fontWeight: {
      bold: "600",
    },
    extend: {
      colors:{
        Primary:"#F3EFE0",
        PrimaryDark:"#03001C",
        Secondary:"#0f1631c8",
      },
    },
  },
  plugins: [],
}

