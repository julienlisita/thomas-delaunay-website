/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        //  Brand palette
          dark: '#2E4057',   // deep slate blue - stability, structure
          blue: '#5BA3C8',   // azur blue - energy, freshness
          mint: '#A8D5BA',   // mint green - balance, well-being
          sand: '#F6F3EE',   // sand beige - light background
          coral: '#F37B63',  // coral - warmth, human energy
          night: '#1C2A38',  // night blue - strong contrast
          light: '#E4EBF0',  // pale blue-grey - soft surfaces

        //  Functional aliases (design tokens)
        primary: '#F37B63',      // coral
        secondary: '#5BA3C8',    // blue
        bg: '#F6F3EE',           // sand (global background)
        surface: '#E4EBF0',      // light (cards, sections)
        border: '#5BA3C8',       // blue border
        text: '#2E4057',         // dark
        muted: '#A8D5BA',        // mint (soft accents)
        heading: '#1C2A38',      // night (titles)
        footer: {
          bg: '#2E4057',
          text: '#F6F3EE',
        },
      },
    },
  },
  plugins: [],
};
