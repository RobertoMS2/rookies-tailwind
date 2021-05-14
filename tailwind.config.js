module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#968279',
      'secondary': '#f0efed',
      'white': '#f8f8f8',
      'brown': '#968279'
     }),
     textColor: theme => theme('colors'),
     textColor: {
       'primary': '#281e1c',
       'secondary': '#e5dcd7',
       'brown': '#968279'
     },
     fontSize: {
      'base': '1rem',
      'l': '1.2rem',
      'xl': '1.6rem',
      '2xl': '3rem',
    },
    gridTemplateRows: {
      // Simple 8 row grid
     'auto-3': 'repeat(3, minmax(0, auto))'
    },
    backgroundImage: theme => ({
      'brow0-col2':                   'url(../images/0-2.png)',
      'brow0-col3':                   'url(../images/0-3.png)',
      'brow0-col4':                   'url(../images/0-4.png)',
      'brow1-col0':                   'url(../images/logo.png)',
      'brow1-col2':                   'url(../images/1-2.png)',
      'brow1-col3':                   'url(../images/1-3.png)',
      'brow1-col4':                   'url(../images/1-4.png)',
      'brow2-col2':                   'url(../images/2-2.png)',
      'brow2-col3':                   'url(../images/2-3.png)',
      'brow2-col4':                   'url(../images/2-4.png)',
      'el-jefe' :                     'url(../images/1-el-jefe.jpg)',
      'el-desafio':                   'url(../images/2-el-desafio.jpg)',
      'despierta-ya':                 'url(../images/3-despierta-ya.jpg)',
      'no-puedo-estar-mejor':         'url(../images/4-no-puedo-estar-mejor.jpg)',
      'tu-cancion':                   'url(../images/5-tu-cancion.jpg)',
      'esta-en-ti':                   'url(../images/6-esta-en-ti.jpg)',
      'tienes-fuego':                 'url(../images/7-tienes-fuego.jpg)',
      'rookies':                      'url(../images/8-rookies.jpg)',
      'como-duele':                   'url(../images/9-como-duele.jpg)',
      'camaleones':                   'url(../images/10-camaleones.jpg)',
      'juguetes-rotos':               'url(../images/11-juguetes-rotos.jpg)',
      'me-estoy-muriendo-por-dentro': 'url(../images/12-me-estoy-muriendo-por-dentro.jpg)',
      'las-de-ganar':                 'url(../images/13-las-de-ganar.jpg)',
      'heridas-de-guerra':            'url(../images/14-heridas-de-guerra.jpg)',
      'rockband':                     'url(../images/rockband.png)'
    }),
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '20': '20px'
    }, borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      'primary': '#968279',
      'secondary': '#f0efed',
      'white': '#f8f8f8',
    }),
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '80': '80%',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
