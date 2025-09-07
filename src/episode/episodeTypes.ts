import { Doc } from '../../convex/_generated/dataModel'
import { AuthListChoice, AuthListChoiceItem, AuthListImport, AuthListImportItem } from '../list/listTypes'

export interface ChoiceEpisode extends Doc<'choices'> {
  type: 'choice'
}
export type Episode = ChoiceEpisode | ImportEpisode
export interface Episodes {
  choices: Array<Doc<'choices'>>
  imports: RelatedImport[]
}
export interface EpisodeActors {
  choice: (props: ChoiceEpisode) => [AuthListChoice] | [AuthListChoice, AuthListChoiceItem, AuthListChoiceItem]
  import: (props: ImportEpisode) => [AuthListImport, ...AuthListImportItem[]]
}
export interface ImportEpisode extends RelatedImport {
  type: 'import'
}
export interface RelatedImport extends Doc<'imports'> {
  importItems: Array<Doc<'importItems'>>
}
