module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'system-ui'],
        roboto: ['Roboto', 'system-ui'],
        sfpro: ['SF-Pro', 'system-ui', 'Open Sans'],
        body: ['system-ui', 'system-ui'],
      },
      colors: {
        blueme: '#2155CD',
        bluey: '#0AA1DD',
        tomato: '#B983FF',
      },
    },
  },
  plugins: [],
};
