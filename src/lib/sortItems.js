import sortBy from 'lodash/sortBy'

function getSortField(item) {
  return item.startDate || item.publishedDate
}

export default function sortItems(items = []) {
  return sortBy(items, getSortField).reverse()
}
