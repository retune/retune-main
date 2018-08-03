const postcssImport = require('postcss-import')
const postcssPresetEnv = require('postcss-preset-env')
const postcssCustomMedia = require('postcss-custom-media')
const postcssBrowserReporter = require(`postcss-browser-reporter`)
const postcssReporter = require(`postcss-reporter`)

module.exports = {
  plugins: [
    postcssImport(),
    postcssPresetEnv(),
    postcssCustomMedia(),
    postcssBrowserReporter(),
    postcssReporter(),
  ],
}
