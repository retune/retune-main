module.exports = function getType(item) {
  if (item.type) {
    return item.type
  }

  return 'news'
}
