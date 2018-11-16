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

export default function(results) {
  return results.edges.map(edge => {
    let node = edge.node

    if (node.data) {
      node = { ...node, ...mapValues(node.data, getText) }
    }

    return node
  })
}
