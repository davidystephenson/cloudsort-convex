import { AuthList } from '../list/listTypes'
import { Episode } from './episodeTypes'

export default function useSortedEpisodes (props: {
  list: AuthList
}): Episode[] {
  const choiceEpisodes = props.list.choices.map((choice) => {
    return { ...choice, type: 'choice' } as const
  })
  const importEpisodes = props.list.imports.map((importItem) => {
    return { ...importItem, type: 'import' } as const
  })
  const episodes = [...choiceEpisodes, ...importEpisodes]
  const sortedEpisodes = episodes.toSorted((a, b) => {
    return b._creationTime - a._creationTime
  })
  return sortedEpisodes
}
