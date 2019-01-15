/*
  This file needs to be used in node and ES6
*/
const slug = require('slug')
const getType = require('./getType')
const isEventInPastOrFuture = require('./isEventInPastOrFuture')

slug.defaults.mode = 'rfc3986' // Lowercases URLs

const slugify = item => {
  // For events or posts
  if (item && item.title) {
    return slug(item.title)
  }

  // For services
  if (item && item.name) {
    return slug(item.name)
  }

  return ''
}

const maybeToSlugUrl = item => {
  const asSlug = slugify(item)

  if (!!asSlug) {
    return `${asSlug}/`
  }

  return ''
}

module.exports.slugify = slugify

module.exports.aboutPath = () => '/about/'
module.exports.festivalsPath = event => `/festivals/${maybeToSlugUrl(event)}`
module.exports.studioVisitsPath = event =>
  `/studio-visits/${maybeToSlugUrl(event)}`
module.exports.servicesPath = service => {
  const anchor = slugify(service)
  if (!!anchor) {
    return `/services/#${anchor}`
  }

  return `/services/`
}
module.exports.newsPath = item => `/news/${maybeToSlugUrl(item)}`
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
