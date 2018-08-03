const postcssImport = require('postcss-import')
const postcssCustomMedia = require('postcss-custom-media')

module.exports = {
  plugins: [postcssImport(), postcssCustomMedia()],
}
