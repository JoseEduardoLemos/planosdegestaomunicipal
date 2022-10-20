/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    '../nextjs/src/components/**/*.tsx',
    '../nextjs/src/pages/**/*.tsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
