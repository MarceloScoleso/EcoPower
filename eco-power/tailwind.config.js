// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          600: '#388E3C',  // Tom de verde para o cabeçalho
          800: '#2C6E31',  // Tom de verde para o rodapé
        },
      },
    },
  },
  plugins: [],
};
