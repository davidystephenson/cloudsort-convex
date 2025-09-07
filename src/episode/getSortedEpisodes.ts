import { Doc } from '../../convex/_generated/dataModel'
import { Episode, RelatedImport } from './episodeTypes'

export default function getSortedEpisodes (props: {
  choices: Array<Doc<'choices'>>
  imports: RelatedImport[]
}): Episode[] {
  const choiceEpisodes = props.choices.map((choice) => {
    return { ...choice, type: 'choice' } as const
  })
  const importEpisodes = props.imports.map((_import) => {
    return { ..._import, type: 'import' } as const
  })
  const episodes = [...choiceEpisodes, ...importEpisodes]
  const sortedEpisodes = episodes.toSorted((a, b) => {
    return b._creationTime - a._creationTime
  })
  return sortedEpisodes
}
