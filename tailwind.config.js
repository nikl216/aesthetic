module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),

      orange: "#ff7613",
    }),
    extend: {
      height: {
        "screen/2": "50vh",
        500: "500px",
        600: "600px",
        750: "750px",
        900: "900px",
        "screen/1.5": "calc(100vh/1.5)",
      },
      animation: {
        menu: "menu 0.5s ease-in",
        reverse: "reverse 1s ease-in",
      },
      keyframes: {
        menu: {
          "0%": {
            top: "-100%",
            opacity: 0,
          },
          "100%": {
            top: "0%",
            opacity: 1,
          },
          reverse: {
            "0%": {
              top: "0%",
              opacity: 0,
            },
            "100%": {
              top: "-100%",
              opacity: 1,
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
