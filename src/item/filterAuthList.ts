import { AuthListRow } from '../list/listTypes'

export default function filterAuthList (props: {
  query?: string
  row: AuthListRow
}): boolean {
  if (props.query == null) {
    return true
  }
  return true
}
