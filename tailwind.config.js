module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
        'brand-color': '#79c852'
      })
    },
  },
  plugins: [],
}