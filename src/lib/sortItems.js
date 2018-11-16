import sortBy from 'lodash/sortBy'

function getSortField(item) {
  return item.startdate || item.publishedDate
}

export default function sortItems(items = []) {
  return sortBy(items, getSortField).reverse()
}
