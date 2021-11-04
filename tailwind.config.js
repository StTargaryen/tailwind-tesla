module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'tablet': '600px',
      'desctop': '1200px',
      'portrait': { 'raw': '(orientation: portrait)'},
    },
    extend: {
      boxShadow: {
        // shadow-border
        border: '0 2px 0 0 #181b21'
      },
      backgroundImage: theme => ({
        // bg-*theme*
        'accessories': "url('img/accessories.jpeg')",
        'solar-roof': "url('img/solar-roof.jpeg')",
        'mobile-solar-roof': "url('img/mobile-solar-roof.jpeg')",
        'solar-panels': "url('img/solar-panels.jpeg')",
        'mobile-solar-panels': "url('img/mobile-solar-panels.jpeg')",
        'model-x': "url('img/model-x.jpeg')",
        'mobile-model-x': "url('img/mobile-model-x.jpeg')",
        'model-y': "url('img/model-y.jpeg')",
        'mobile-model-y': "url('img/mobile-model-y.jpeg')",
        'model-s': "url('img/model-s.jpeg')",
        'mobile-model-s': "url('img/mobile-model-s.jpeg')",
        'model-3': "url('img/model-3.jpeg')",
        'mobile-model-3': "url('img/mobile-model-3.jpeg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
