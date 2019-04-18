const mapValues = require('lodash/mapValues')
const get = require('lodash/get')

const asMarkdown = require('./prismicToMarkdown').asMarkdown

module.exports = function(results) {
  const edges = get(results, 'edges', [])

  return edges.map(edge => {
    let node = edge.node

    if (node.data) {
      node = { ...node, ...flattenNode(node.data) }
    }

    return node
  })
}

function getText(node) {
  if (node) {
    if (Object.prototype.hasOwnProperty.call(node, 'html')) {
      return node.html
    } else if (Object.prototype.hasOwnProperty.call(node, 'raw')) {
      const content =
        node.raw && node.raw.length > 0 ? asMarkdown(node.raw) : null
      return content
    } else if (Object.prototype.hasOwnProperty.call(node, 'text')) {
      return node.text
    } else if (Object.prototype.hasOwnProperty.call(node, 'url')) {
      return node.url
    }
  }

  return node
}

module.exports.getText = getText

function flattenNode(data) {
  return mapValues(data, getText)
}

module.exports.flattenNode = flattenNode
