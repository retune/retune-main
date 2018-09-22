/*
  This file needs to be used in node and ES6
*/
const slug = require('slug')
const getType = require('./getType')

slug.defaults.mode = 'rfc3986' // Lowercases URLs

const maybeToSlug = event => {
  if (event && event.title) {
    return `${slug(event.title)}/`
  }

  return ''
}

module.exports.aboutPath = () => '/about/'
module.exports.festivalsPath = event => `/festivals/${maybeToSlug(event)}`
module.exports.studioVisitsPath = event =>
  `/studio-visits/${maybeToSlug(event)}`
module.exports.servicesPath = () => `/services/`
module.exports.newsPath = item => `/news/${maybeToSlug(item)}`
module.exports.imprintPath = () => '/imprint/'
module.exports.privacyPath = () => '/datenschutz/'
module.exports.newsletterPath = () => 'http://eepurl.com/b3QkdX'
module.exports.eventPath = event => {
  if (event.type) {
    switch (getType(event)) {
      case 'festival':
        return module.exports.festivalsPath(event)
      case 'studio-visit':
        return module.exports.studioVisitsPath(event)
      default:
        throw new Error(`Unknown event type: ${event.type} (id: ${event.id})`)
    }
  }

  throw new Error(`Not an event object`)
}
