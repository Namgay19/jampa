module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        'primary': '#F1F6FB',
        'secondary': '#FFFFFF',
        'logFirst': '#736969',
        'logSecond': '#0A2835'
      },
      height: {
        '128': '32rem'
      }
    }
  },
  plugins: [],
}