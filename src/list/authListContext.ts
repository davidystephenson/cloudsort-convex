import contextCreator from 'context-creator'
import { useCallback, useMemo, useState } from 'react'
import { Id } from '../../convex/_generated/dataModel'
import useSortedEpisodes from '../episode/useSortedEpisodes'

const authListContext = contextCreator({
  name: 'Auth List',
  useValue: () => {
    const [episodesOpened, setEpisodesOpened] = useState<boolean>()
    const episodes = useSortedEpisodes()
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
    const toggleChoice = useCallback((props: {
      choiceId: Id<'choices'>
    }) => {
      toggleEpisode({ episodeId: props.choiceId })
    }, [openedEpisodeIds])
    const toggleImport = useCallback((props: {
      importId: Id<'imports'>
    }) => {
      toggleEpisode({ episodeId: props.importId })
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
      episodesOpened,
      openedEpisodeIds,
      itemsOpened,
      toggleChoice,
      toggleImport,
      toggleEpisodes,
      toggleItems
    }), [
      episodesOpened,
      openedEpisodeIds,
      itemsOpened,
      toggleChoice,
      toggleImport,
      toggleEpisodes,
      toggleItems
    ])
    return value
  }
})
export default authListContext
