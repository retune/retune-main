/*
  This file needs to be used in node and ES6
*/

module.exports.aboutPath = () => '/about/'
module.exports.festivalsPath = () => `/festivals/`
module.exports.eventPath = ({ id }) => `/events${id ? `/${id}/` : ''}`
module.exports.imprintPath = () => '/imprint/'
module.exports.privacyPath = () => '/datenschutz/'
