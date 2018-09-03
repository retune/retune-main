module.exports = function getType(item) {
  return item.type ? 'event' : 'news'
}
