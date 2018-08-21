/*
  This file needs to be used in node and ES6
*/

module.exports.eventPath = ({ id }) => `/events${id ? `/${id}/` : ''}`
