import mapValues from 'lodash/mapValues'

const getText = node => {
  if (node) {
    if (node.text) {
      return node.text
    } else if (node.url) {
      return node.url
    }
  }

  return node
}

export const flattenNode = data => {
  return mapValues(data, getText)
}

export default function(results) {
  return results.edges.map(edge => {
    let node = edge.node

    if (node.data) {
      node = { ...node, ...flattenNode(node.data) }
    }

    return node
  })
}
