/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  corePlugins: {
    container: false
  },
  plugins: [
    function ({
      addComponents
    }) {
      addComponents({
        '.container': {
          maxWidth: 'calc(100% - 2rem)',
          '@screen sm': {
            maxWidth: '560px',
          },
          '@screen md': {
            maxWidth: 'calc(100% - 144px)',
          },
          '@screen lg': {
            maxWidth: '1224px',
          }
        },
        ".container-grid": {
          display: "grid",
          gridTemplateColumns: "16px 1fr 16px",
          "@screen sm": {
            gridTemplateColumns: "1fr 560px 1fr",
          },
          "@screen md": {
            gridTemplateColumns: "72px 1fr 72px",
          },
          "@screen lg": {
            gridTemplateColumns: "1fr 1224px 1fr",
          },
        },
      })
    }
  ],
  theme: {
    screens: {
      xs: {
        max: '599px'
      },
      sm: '600px',
      'sm-only': {
        min: '600px',
        max: '959px'
      },
      md: '960px',
      'md-only': {
        min: '960px',
        max: '1366px'
      },
      lg: '1367px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--color-primary) / <alpha-value>)",
          ultralight: "hsl(var(--color-primary-ultralight) / <alpha-value>)",
          light: "hsl(var(--color-primary-light) / <alpha-value>)",
          dark: "hsl(var(--color-primary-dark) / <alpha-value>)",
          ultradark: "hsl(var(--color-primary-ultradark) / <alpha-value>)",
          faded: "hsl(var(--color-primary-faded) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--color-secondary) / <alpha-value>)",
          faded: "hsl(var(--color-secondary-faded) / <alpha-value>)",
        },
        tertiary: "hsl(var(--color-tertiary) / <alpha-value>)",
        backgound: {
          lightblue: "hsl(var(--color-background-lightblue) / <alpha-value>)",
          paper: "hsl(var(--color-background-paper) / <alpha-value>)",
        },
        alternative: {
          pardo: "hsl(var(--color-alternative-pardo) / <alpha-value>)",
          gold: "hsl(var(--color-alternative-gold) / <alpha-value>)",
          darkorange: "hsl(var(--color-alternative-darkorange) / <alpha-value>)",
          lightorange: "hsl(var(--color-alternative-lightorange) / <alpha-value>)",
          prefermemberblue: "hsl(var(--color-alternative-prefermemberBlue) / <alpha-value>)",
        },
        system: {
          warning: {
            DEFAULT: "hsl(var(--color-system-warning) / <alpha-value>)",
            faded: "hsl(var(--color-system-warning-faded) / <alpha-value>)",
          },
          error: {
            DEFAULT: "hsl(var(--color-system-error) / <alpha-value>)",
            faded: "hsl(var(--color-system-error-faded) / <alpha-value>)",
          },
          success: {
            DEFAULT: "hsl(var(--color-system-success) / <alpha-value>)",
            faded: "hsl(var(--color-system-success-faded) / <alpha-value>)",
          },
        },
        status: {
          member: "hsl(var(--color-status-member) / <alpha-value>)",
          silver: "hsl(var(--color-status-silver) / <alpha-value>)",
          gold: "hsl(var(--color-status-gold) / <alpha-value>)",
          platinum: "hsl(var(--color-status-platinum) / <alpha-value>)",
          presidential: "hsl(var(--color-status-presidential) / <alpha-value>)",
        },
        grey: {
          800: "hsl(var(--color-grey-800) / <alpha-value>)",
          700: "hsl(var(--color-grey-700) / <alpha-value>)",
          600: "hsl(var(--color-grey-600) / <alpha-value>)",
          500: "hsl(var(--color-grey-500) / <alpha-value>)",
          400: "hsl(var(--color-grey-400) / <alpha-value>)",
          300: "hsl(var(--color-grey-300) / <alpha-value>)",
          200: "hsl(var(--color-grey-200) / <alpha-value>)",
          100: "hsl(var(--color-grey-100) / <alpha-value>)",
          75: "hsl(var(--color-grey-75) / <alpha-value>)",
          50: "hsl(var(--color-grey-50) / <alpha-value>)",
        },
        common: {
          black: "hsl(var(--color-common-black) / <alpha-value>)",
          white: "hsl(var(--color-common-white) / <alpha-value>)",
        }
      },
      dropShadow: {
        tiny: "0px 1px 2px hsla(0, 0, 0, 0.19)",
        medium: "0px 3px 5px hsla(0, 0, 0, 0.17)",
        large: [
          "0px 12px 17px hsla(0, 0, 0, 0.06)",
          "0px 5px 22px hsla(0, 0, 0, 0.06)",
          "0px 7px 8px hsla(0, 0, 0, 0.1)",
        ],
        modal: "0px 10px 20px 12px hsla(0, 0, 0, 0.12)",
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
};