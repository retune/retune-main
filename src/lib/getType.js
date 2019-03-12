const config = require('../../gatsby-config')
const eventTypes = config.siteMetadata.eventTypes

function getType(item) {
  if (item.type) {
    return item.type
  }

  return 'news'
}

function labelForEventType(type, plural = false) {
  const eventTypeConfig = eventTypes[type]
  const labelKey = plural ? 'plural' : 'label'

  if (eventTypeConfig && eventTypeConfig.hasOwnProperty(labelKey)) {
    return eventTypeConfig[labelKey]
  }

  return plural ? 'Events' : 'Event'
}

function urlPathForEventType(type) {
  const eventTypeConfig = eventTypes[type]

  if (eventTypeConfig && eventTypeConfig.hasOwnProperty('urlPath')) {
    return `/${eventTypeConfig.urlPath}/`
  }

  return null
}

function templateNameForEventType(type) {
  const eventTypeConfig = eventTypes[type]

  if (eventTypeConfig && eventTypeConfig.hasOwnProperty('urlPath')) {
    return eventTypeConfig.urlPath
  }

  return null
}

module.exports = getType
module.exports.labelForEventType = labelForEventType
module.exports.urlPathForEventType = urlPathForEventType
module.exports.templateNameForEventType = templateNameForEventType
