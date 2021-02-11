module.exports = {
  inputDir: './src/svg',
  outputDir: './dist',
  fontTypes: ['ttf', 'eot', 'woff', 'woff2'],
  assetTypes: ['ts', 'css', 'json', 'html'],
  fontsUrl: '/static/fonts',
  codepoints: {
    'button-a': 0xE000,
    // 'button-a': 0xE100,
    'button-b': 0xE001,
    'button-x': 0xE002,
    'button-y': 0xE003,
    'button-l': 0xE004,
    'button-r': 0xE005,
    'dpad': 0xE006,
    'alarm': 0xE007,
    'face-happy': 0xE008,
    'face-angry': 0xE009,
    'face-sad': 0xE00A,
    'face-bored': 0xE00B,
    'sun': 0xE00C,
    'cloud': 0xE00D,
    'umbrella': 0xE00E,
    'snowman': 0xE00F,
    'block-warning': 0xE010,
    'block-question': 0xE011,
    'envelope': 0xE012,
    'device-phone': 0xE013,
    'suit-spades': 0xE015,
    'suit-diamonds': 0xE016,
    'suit-hearts': 0xE017,
    'suit-clubs': 0xE018,
    'arrow-right': 0xE019,
    'arrow-left': 0xE01A,
    'arrow-up': 0xE01B,
    'arrow-down': 0xE01C,
    'cross': 0xE028,
    'frog': 0xFA700, // Flipnote Studio (DSiWare) only
  },
  formatOptions: {
    // Pass options directly to `svgicons2svgfont`
    woff: {
      // Woff Extended Metadata Block - see https://www.w3.org/TR/WOFF/#Metadata
      // metadata: '...'
    },
    json: {
      // render the JSON human readable with two spaces indentation (default is none, so minified)
      indent: 2
    },
    ts: {
      // select what kind of types you want to generate (default `['enum', 'constant', 'literalId', 'literalKey']`)
      types: ['constant', 'literalId'],
      // render the types with `'` instead of `"` (default is `"`)
      singleQuotes: true
    }
  },
  // Use a custom Handlebars template
  // templates: {
  //   css: './my-custom-tp.css.hbs'
  // },
  // pathOptions: {
  //   ts: './src/types/icon-types.ts',
  //   json: './misc/icon-codepoints.json'
  // }
};