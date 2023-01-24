module.exports = {
  mode : "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'background' : "#282a36",
        'dpurple' : "#bd93f9"
      },
      backgroundImage: {
        'bg-pattern' : "url('src/`\assets/\back.svg')"
      },
      'animation': {
        'text':'text 5s ease infinite',
    },
    'keyframes': {
        'text': {
            '0%, 100%': {
               'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
               'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
    }
    },
  },
  plugins: [],
}
