import find from 'lodash/find'
import map from 'lodash/map'

export default function findEventsByIds(events, ids) {
  return map(ids, id => find(events, { id }))
}
