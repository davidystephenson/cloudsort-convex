import { Doc } from '../../convex/_generated/dataModel'
import { RelatedListItem } from '../item/itemTypes'
import { RelatedUser } from '../user/userTypes'

export interface RelatedList extends Doc<'lists'> {
  items: RelatedListItem[]
  user: RelatedUser
}
