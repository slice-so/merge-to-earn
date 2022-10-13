const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  darkMode: "class",
  purge: [
    "./pages/**/*.tsx",
    "./pages/**/*.js",
    "./components/**/*.tsx",
    "./components/**/*.js",
    "./components/**/*.css",
    "./components/**/*.scss",
    "./styles/**/*.scss",
    "./utils/**/*.ts",
    "./lib/**/*.ts",
    "./lib/**/*.tsx",
    "./styles/jit-hack.txt"
  ],

  theme: {
    nightwind: {
      colorClasses: ["gradient", "placeholder"],
      typography: {
        strong: {
          color: colors.white
        }
      },
      colors: {
        white: "#0F1115",
        black: "gray.50",
        sky: {
          50: "#001928"
        }
      }
    },
    extend: {
      screens: {
        xs: "560px"
      },
      colors: {
        gray: colors.gray,
        sky: colors.sky,
        cyan: colors.cyan
      },
      zIndex: {
        "-10": "-10"
      }
      // typography: (theme) => ({
      //   DEFAULT: {
      //     css: {
      //       color: theme("colors.black"),
      //       a: {
      //         textDecorationColor: "var(--darkColor2)",
      //         textDecorationThickness: "2px",
      //         textUnderlineOffset: "1px"
      //       },
      //       h1: {
      //         color: theme("colors.black"),
      //         fontWeight: "900"
      //       },
      //       h2: {
      //         color: theme("colors.black"),
      //         fontWeight: "900"
      //       },
      //       h3: {
      //         color: theme("colors.black"),
      //         fontSize: "1.12em"
      //       },
      //       blockquote: {
      //         borderLeftColor: theme("colors.random2.600")
      //       },
      //       "blockquote p:first-of-type::before": false,
      //       "blockquote p:last-of-type::after": false,
      //       strong: {
      //         fontWeight: "900"
      //       },
      //       img: {
      //         borderRadius: "0.75rem"
      //       }
      //     }
      //   },
      //   sm: {
      //     css: {
      //       color: theme("colors.black"),
      //       a: {
      //         textDecorationColor: "var(--darkColor2)",
      //         textDecorationThickness: "2px",
      //         textUnderlineOffset: "1px"
      //       },
      //       h1: {
      //         color: theme("colors.black"),
      //         fontWeight: "900"
      //       },
      //       h2: {
      //         color: theme("colors.black"),
      //         fontWeight: "900"
      //       },
      //       h3: {
      //         color: theme("colors.black"),
      //         fontSize: "1.12em"
      //       },
      //       blockquote: {
      //         borderLeftColor: theme("colors.random2.600")
      //       },
      //       "blockquote p:first-of-type::before": false,
      //       "blockquote p:last-of-type::after": false,
      //       strong: {
      //         fontWeight: "900"
      //       },
      //       img: {
      //         borderRadius: "0.75rem"
      //       }
      //     }
      //   }
      // })
    }
  },
  variants: {
    // nightwind: ["group-hover"],
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("nightwind")
  ]
}
