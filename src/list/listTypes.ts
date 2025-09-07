import { Doc, Id } from '../../convex/_generated/dataModel'
import { RelatedImport } from '../episode/episodeTypes'
import { RelatedListItem } from '../item/itemTypes'
import { RelatedUser } from '../user/userTypes'

export interface AuthList extends RelatedList {
  choices: Array<Doc<'choices'>>
  imports: RelatedImport[]
}
export interface AuthListColumns {
  type: 'columns'
}
export interface AuthListItem {
  type: 'item'
  uid: string
}
export interface AuthListItems {
  type: 'items'
}
export interface AuthListEpisodes {
  type: 'episodes'
}
export interface AuthListImport {
  type: 'import'
  importId: Id<'imports'>
}
export interface AuthListImportItem {
  type: 'importItem'
  itemUid: string
}
export interface AuthListChoice {
  type: 'choice'
  choiceId: Id<'choices'>
}
export interface AuthListChoiceItem {
  type: 'choiceItem'
  choiceId: Id<'choices'>
  itemUid: string
}
export type AuthListRow = AuthListColumns
| AuthListItem
| AuthListItems
| AuthListEpisodes
| AuthListImport
| AuthListImportItem
| AuthListChoice
| AuthListChoiceItem
export interface RelatedList extends Doc<'lists'> {
  listItems: RelatedListItem[]
  user: RelatedUser
}
