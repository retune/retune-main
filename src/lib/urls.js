/*
  This file needs to be used in node and ES6
*/
const slug = require('slug')
const getType = require('./getType')

const urlPathForEventType = getType.urlPathForEventType

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
module.exports.newsletterPath = () => 'https://landing.mailerlite.com/webforms/landing/w2u7m2'

module.exports.eventPath = event => {
  if (event.type) {
    const urlPath = urlPathForEventType(event.type)
    return `${urlPath}${maybeToSlugUrl(event)}`
  }

  throw new Error(`Not an event object`)
}
