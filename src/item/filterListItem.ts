import { Doc } from '../../convex/_generated/dataModel'

export default function filterListItem (props: {
  item: Doc<'items'>
  query?: string
}): boolean {
  if (props.query == null) {
    return true
  }
  const lowerUid = props.item.uid.toLowerCase()
  if (lowerUid.includes(props.query)) {
    return true
  }
  const lowerLabel = props.item.label.toLowerCase()
  return lowerLabel.includes(props.query)
}
