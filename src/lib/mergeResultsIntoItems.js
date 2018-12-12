const mapValues = require('lodash/mapValues')

const asMarkdown = require('./prismicToMarkdown').default.asMarkdown

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
    if (Object.prototype.hasOwnProperty.call(node, 'raw')) {
      const markdown =
        node.raw && node.raw.length > 0 ? asMarkdown(node.raw) : null

      // console.log('markdown:', markdown)

      return markdown
      // return node.raw && node.raw.length > 0
      //   ? node.raw
      //       .map(function({ type, text }) {
      //         return `${text}\n\n`
      //       })
      //       .join('')
      //   : null
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
