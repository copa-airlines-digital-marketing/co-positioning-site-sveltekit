/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary) / 1)",
          ultralight: "rgb(var(--color-primary-ultralight) / 1)",
          light: "rgb(var(--color-primary-light) / 1)",
          dark: "rgb(var(--color-primary-dark) / 1)",
          ultradark: "rgb(var(--color-primary-ultradark) / 1)",
          faded: "rgb(var(--color-primary-faded) / 1)",
        },
        secondary: {
          DEFAULT: "rgb(var(--color-secondary) / 1)",
          faded: "rgb(var(--color-secondary-faded) / 1)",
        },
        tertiary: "rgb(var(--color-tertiary) / 1)",
        backgound: {
          lightblue: "rgb(var(--color-background-lightblue) / 1)",
          paper: "rgb(var(--color-background-paper) / 1)",
        },
        alternative: {
          pardo: "rgb(var(--color-alternative-pardo) / 1)",
          gold: "rgb(var(--color-alternative-gold) / 1)",
          darkorange: "rgb(var(--color-alternative-darkorange) / 1)",
          lightorange: "rgb(var(--color-alternative-lightorange) / 1)",
          prefermemberblue: "rgb(var(--color-alternative-prefermemberBlue) / 1)",
        },
        system: {
          warning: {
            DEFAULT: "rgb(var(--color-system-warning) / 1)",
            faded: "rgb(var(--color-system-warning-faded) / 1)",
          },
          error: {
            DEFAULT: "rgb(var(--color-system-error) / 1)",
            faded: "rgb(var(--color-system-error-faded) / 1)",
          },
          success: {
            DEFAULT: "rgb(var(--color-system-success) / 1)",
            faded: "rgb(var(--color-system-success-faded) / 1)",
          },
        },
        status: {
          member: "rgb(var(--color-status-member) / 1)",
          silver: "rgb(var(--color-status-silver) / 1)",
          gold: "rgb(var(--color-status-gold) / 1)",
          platinum: "rgb(var(--color-status-platinum) / 1)",
          presidential: "rgb(var(--color-status-presidential) / 1)",
        },
        grey: {
          800: "rgb(var(--color-grey-800) / 1)",
          700: "rgb(var(--color-grey-700) / 1)",
          600: "rgb(var(--color-grey-600) / 1)",
          500: "rgb(var(--color-grey-500) / 1)",
          400: "rgb(var(--color-grey-400) / 1)",
          300: "rgb(var(--color-grey-300) / 1)",
          200: "rgb(var(--color-grey-200) / 1)",
          100: "rgb(var(--color-grey-100) / 1)",
          75: "rgb(var(--color-grey-75) / 1)",
          50: "rgb(var(--color-grey-50) / 1)",
        },
        common: {
          black: "rgb(var(--color-common-black) / 1)",
          white: "rgb(var(--color-common-white) / 1)",
        }
      },
      dropShadow: {
        tiny: "0px 1px 2px rgba(0, 0, 0, 0.19)",
        medium: "0px 3px 5px rgba(0, 0, 0, 0.17)",
        large: [
          "0px 12px 17px rgba(0, 0, 0, 0.06)",
          "0px 5px 22px rgba(0, 0, 0, 0.06)",
          "0px 7px 8px rgba(0, 0, 0, 0.1)",
        ],
        modal: "0px 10px 20px 12px rgba(0, 0, 0, 0.12)",
      },
      fontFamily: {
        sans: ["Gilroy", "Helvetica", "Arial", "sans-serif"]
      },
      spacing: {
        minimal: "var(--spacing-minimal)",
        tiny: "var(--spacing-tiny)",
        petit: "var(--spacing-petit)",
        normal: "var(--spacing-normal)",
        roomy: "var(--spacing-roomy)",
        spacious: "var(--spacing-spacious)",
        big: "var(--spacing-big)",
        huge: "var(--spacing-huge)"
      }
    }
  },
  plugins: []
};