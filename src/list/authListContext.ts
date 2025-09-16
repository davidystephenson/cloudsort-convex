import contextCreator from 'context-creator'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Id } from '../../convex/_generated/dataModel'
import getSortedEpisodes from '../episode/getSortedEpisodes'
import { AuthList } from './listTypes'

const authListContext = contextCreator({
  name: 'Auth List',
  useValue: (props: {
    list: AuthList
  }) => {
    const [episodesOpened, setEpisodesOpened] = useState<boolean>()
    const episodes = useMemo(() => getSortedEpisodes(props.list), [props.list])
    const [openedEpisodeIds, setOpenedEpisodeIds] = useState<Array<Id<'choices' | 'imports'>>>(() => {
      const first = episodes[0]
      if (first == null) {
        return []
      }
      return [first._id]
    })
    useEffect(() => {
      console.log('effect')
      const first = episodes[0]
      if (first == null) {
        setOpenedEpisodeIds([])
        return
      }
      if (episodesOpened === false) {
        setEpisodesOpened(undefined)
      }
      const filtered = openedEpisodeIds.filter(id => id !== first._id)
      setOpenedEpisodeIds([first._id, ...filtered])
    }, [episodes])
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
