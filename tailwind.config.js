module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "var(--bgPrimary)",
        bgSecondary: "var(--bgSecondary)",
        textPrimary: "var(--textPrimary)",
        textSecondary: "var(--textSecondary)",

        firefly: {
          bgPrimary: "#0E2A30",
          bgSecondary: "#193D45",
          textPrimary: "#DAE7EA",
          textSecondary: "#A7D129",
        },
        blueNight: {
          bgPrimary: "#333745",
          bgSecondary: "#474b58",
          textPrimary: "#ebebec",
          textSecondary: "#FEC260;",
        },
        redPear: {
          bgPrimary: "#7b3638",
          bgSecondary: "#884a4c",
          textPrimary: "#f2ebeb",
          textSecondary: "#98ACF8",
        },
        lynxWhite: {
          bgPrimary: "#f4ecf5",
          bgSecondary: "#e9d9eb",
          textPrimary: "#923f9d",
          textSecondary: "#FF0000",
        },
        milkyWay: {
          bgPrimary: "#e9f4f8",
          bgSecondary: "#d2e8f1",
          textPrimary: "#208cb7",
          textSecondary: "#734046",
        },
      },

      fontFamily: {
        inter: "'Inter', sans-serif",
        fira: "'Fira Code', monospace"
      }
    },
  },
  plugins: [],
};
