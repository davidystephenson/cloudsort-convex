import { EpisodeActors } from '../episode/episodeTypes'
import marion from 'marion'
import authListContext from './authListContext'
import listContext from './listContext'
import { AuthListChoice, AuthListChoiceItem, AuthListImport, AuthListImportItem, AuthListItem, AuthListRow } from './listTypes'

export default function useAuthListRows (): AuthListRow[] {
  const authList = authListContext.use()
  const list = listContext.use()
  const rows: AuthListRow[] = []
  rows.push({ type: 'episodes' })
  const episodeActors: EpisodeActors = {
    choice: (props) => {
      const aItem = list.listItems.find((item) => item.item.uid === props.aUid)
      if (aItem == null) {
        throw new Error('aItem not found')
      }
      const bItem = list.listItems.find((item) => item.item.uid === props.bUid)
      if (bItem == null) {
        throw new Error('bItem not found')
      }
      const choice: AuthListChoice = { type: 'choice', episode: props, aListItem: aItem, bListItem: bItem } as const
      const opened = authList.openedEpisodeIds.includes(props._id)
      if (opened) {
        const aRow: AuthListChoiceItem = { type: 'choiceItem', episode: props, listItem: aItem } as const
        const bRow: AuthListChoiceItem = { type: 'choiceItem', episode: props, listItem: bItem } as const
        return [choice, aRow, bRow]
      }
      return [choice]
    },
    import: (props) => {
      const _import: AuthListImport = { type: 'import', episode: props } as const
      const opened = authList.openedEpisodeIds.includes(props._id)
      if (opened) {
        const itemRows = props.importItems.map((importItem) => {
          const item = list.listItems.find((item) => item.item.uid === importItem.itemUid)
          if (item == null) {
            throw new Error('item not found')
          }
          const row: AuthListImportItem = { type: 'importItem', listItem: item } as const
          return row
        })
        return [_import, ...itemRows]
      }
      return [_import]
    }
  }
  if (authList.episodesOpened == null) {
    const first = authList.episodes[0]
    if (first != null) {
      const episodeRows = marion(episodeActors, first)
      rows.push(...episodeRows)
    }
  }
  if (authList.episodesOpened === true) {
    authList.episodes.forEach((episode) => {
      const episodeRows = marion(episodeActors, episode)
      rows.push(...episodeRows)
    })
  }
  rows.push({ type: 'items' })
  if (authList.itemsOpened) {
    list.listItems.forEach((item) => {
      const row: AuthListItem = { type: 'item', item } as const
      rows.push(row)
    })
  }
  return rows
}
