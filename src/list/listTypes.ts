import { Doc } from '../../convex/_generated/dataModel'
import { ChoiceEpisode, ImportEpisode, RelatedImport } from '../episode/episodeTypes'
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
  item: RelatedListItem
}
export interface AuthListItems {
  type: 'items'
}
export interface AuthListEpisodes {
  type: 'episodes'
}
export interface AuthListImport {
  type: 'import'
  episode: ImportEpisode
}
export interface AuthListImportItem {
  type: 'importItem'
  item: RelatedListItem
}
export interface AuthListChoice {
  type: 'choice'
  episode: ChoiceEpisode
  aItem: RelatedListItem
  bItem: RelatedListItem
}
export interface AuthListChoiceItem {
  type: 'choiceItem'
  episode: ChoiceEpisode
  item: RelatedListItem
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
