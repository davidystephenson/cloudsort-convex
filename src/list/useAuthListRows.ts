import { EpisodeActors } from '../episode/episodeTypes'
import useSortedEpisodes from '../episode/useSortedEpisodes'
import marion from '../marion/marion'
import authListContext from './authListContext'
import listContext from './listContext'
import { AuthListRow } from './listTypes'

export default function useAuthListRows (): AuthListRow[] {
  const authList = authListContext.use()
  const episodes = useSortedEpisodes()
  const list = listContext.use()
  const rows: AuthListRow[] = []
  rows.push({ type: 'episodes' })
  const episodeActors: EpisodeActors = {
    choice: (props) => {
      const opened = authList.openedEpisodeIds.includes(props._id)
      const choice = { type: 'choice', choiceId: props._id } as const
      if (opened) {
        return [
          choice,
          { type: 'choiceItem', choiceId: props._id, itemUid: props.aUid },
          { type: 'choiceItem', choiceId: props._id, itemUid: props.bUid }
        ]
      }
      return [choice]
    },
    import: (props) => {
      const opened = authList.openedEpisodeIds.includes(props._id)
      const _import = { type: 'import', importId: props._id } as const
      if (opened) {
        const itemRows = props.importItems.map((importItem) => {
          return { type: 'importItem', importId: props._id, itemUid: importItem.itemUid } as const
        })
        return [
          { type: 'import', importId: props._id },
          ...itemRows
        ]
      }
      return [_import]
    }
  }
  if (authList.episodesOpened == null) {
    const first = episodes[0]
    if (first != null) {
      const episodeRows = marion(episodeActors, first)
      rows.push(...episodeRows)
    }
  }
  if (authList.episodesOpened === true) {
    episodes.forEach((episode) => {
      const episodeRows = marion(episodeActors, episode)
      rows.push(...episodeRows)
    })
  }
  rows.push({ type: 'items' })
  if (authList.itemsOpened) {
    list.listItems.forEach((item) => {
      rows.push({ type: 'item', uid: item.item.uid })
    })
  }
  return rows
}
