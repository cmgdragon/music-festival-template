module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false,
  theme: {
    screens: {
      'desktop': '675px'
    },
    extend: {
      colors: {
        primary: 'rgb(252, 252, 252)',
        bgcolor: 'rgb(37, 37, 37)',
        secondary: 'rgb(13, 201, 207)'
      },
      boxShadow: {
        nav: '0 0 20px 6px #000',
        logo: '0 6px 6px 0 #000'
      },
      margin: {
        '2.1': '2.1rem',
        '-1.1': '-1.1rem',
        '40': '40rem',
        'section': '3rem 12vw',
        'mobile-header-icon': '1.5rem 2rem 0'
      },
      minWidth: {
        '7.5': '7.5rem',
        '30': '30rem',
        'auto': 'auto'
       },
      maxWidth: {
        '30': '30rem',
      },
      maxHeight: {
        '4.5': '4.5rem',
        '550p': '550px'
      },
      inset: {
        '1.1': '1.1rem',
        '2.8': '2.8rem',
        '85': '85%'
      },
      borderRadius: {
        '5': '5rem'
      },
      fontSize: {
        '1.2': '1.2rem'
      },
      animation: {
        'disco': 'spin 2s linear infinite',
        'aguja': 'aguja 2s linear infinite',
      },
      keyframes: {
        aguja: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-0.2rem)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      padding: {
        '04': '.4rem'
      },
      height: {
        '35': '35rem'
      },
      backgroundImage: theme => ({
        'placeholder': "url('http://via.placeholder.com/750')"
       })
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover']
    },
  },
  plugins: [],
}
