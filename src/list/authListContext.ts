import contextCreator from 'context-creator'
import { useCallback, useMemo, useState } from 'react'
import { Id } from '../../convex/_generated/dataModel'
import getSortedEpisodes from '../episode/getSortedEpisodes'
import { AuthList } from './listTypes'

const authListContext = contextCreator({
  name: 'Auth List',
  useValue: (props: {
    list: AuthList
  }) => {
    const [episodesOpened, setEpisodesOpened] = useState<boolean>()
    console.log('props.list', props.list)
    const episodes = getSortedEpisodes(props.list)
    console.log('episodes', episodes)
    const [openedEpisodeIds, setOpenedEpisodeIds] = useState<Array<Id<'choices' | 'imports'>>>(() => {
      const first = episodes[0]
      if (first == null) {
        return []
      }
      return [first._id]
    })
    const [itemsOpened, setItemsOpened] = useState(true)
    const toggleEpisode = useCallback((props: {
      episodeId: Id<'choices' | 'imports'>
    }) => {
      const opened = openedEpisodeIds.includes(props.episodeId)
      if (opened) {
        const filtered = openedEpisodeIds.filter(element => element !== props.episodeId)
        setOpenedEpisodeIds(filtered)
      } else {
        const added = [...openedEpisodeIds, props.episodeId]
        setOpenedEpisodeIds(added)
      }
    }, [openedEpisodeIds])
    const toggleEpisodes = useCallback((): void => {
      if (episodesOpened == null) {
        setEpisodesOpened(true)
        return
      }
      setEpisodesOpened(!episodesOpened)
    }, [episodesOpened])
    const toggleItems = useCallback((): void => {
      setItemsOpened(!itemsOpened)
    }, [itemsOpened])
    const value = useMemo(() => ({
      episodes,
      episodesOpened,
      openedEpisodeIds,
      itemsOpened,
      list: props.list,
      toggleEpisode,
      toggleEpisodes,
      toggleItems
    }), [
      episodes,
      episodesOpened,
      openedEpisodeIds,
      itemsOpened,
      props.list,
      toggleEpisode,
      toggleEpisodes,
      toggleItems
    ])
    return value
  }
})
export default authListContext
