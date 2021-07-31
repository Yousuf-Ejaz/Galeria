module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: (theme) => ({
      red: theme("colors.red.primary"),
      yellow: theme("colors.yellow.primary")
    }),
    extend: {},
    colors: {
      white: "#ffffff",
      blue: {
        medium: "#005c98",
      },
      black: {
        light: "#262626",
        faded: "#00000059",
      },
      gray: {
        base: "#616161",
        background: "#fafafa",
        primary: "#dbdbdb",
      },
      red: {
        primary: "#ed4956",
      },
      yellow: {
        primary: "#FEDD00",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
