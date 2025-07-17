import authorizeListContext from '../auth/authorizeListContext'
import { Episode } from './episodeTypes'

export default function useSortedEpisodes (): Episode[] {
  const authorization = authorizeListContext.data.use()
  const choiceEpisodes = authorization.choices.map((choice) => {
    return { ...choice, type: 'choice' } as const
  })
  const importEpisodes = authorization.imports.map((importItem) => {
    return { ...importItem, type: 'import' } as const
  })
  const episodes = [...choiceEpisodes, ...importEpisodes]
  const sortedEpisodes = episodes.toSorted((a, b) => {
    return b._creationTime - a._creationTime
  })
  return sortedEpisodes
}
