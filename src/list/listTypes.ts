import { Doc } from '../../convex/_generated/dataModel'
import { RelatedUser } from '../user/userTypes'

export interface RelatedList extends Doc<'lists'> {
  user: RelatedUser
}
