const mapValues = require('lodash/mapValues')
const flatMap = require('lodash/flatMap')

module.exports = function(results) {
  return results.edges.map(edge => {
    let node = edge.node

    if (node.data) {
      node = { ...node, ...flattenNode(node.data) }
    }

    return node
  })
}

function getText(node) {
  if (node) {
    if (node.raw) {
      return node.raw
        .map(function({ type, text }) {
          return text
        })
        .join('\n\n')
    } else if (node.text) {
      return node.text
    } else if (node.url) {
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
