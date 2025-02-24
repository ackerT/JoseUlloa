/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Asegúrate de incluir .astro
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,vue}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        'gris-oscuro': '#5a5a5a',
        'negro': '#000000',
        'gris-profundidad': '#1e2224',
        'dorado': '#9d956d',
        'naranja': '#ff6e26',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
