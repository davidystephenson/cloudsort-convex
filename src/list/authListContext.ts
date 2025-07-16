import contextCreator from 'context-creator'
import { useCallback, useMemo, useState } from 'react'
import { Id } from '../../convex/_generated/dataModel'

function toggleElement <Element> (props: {
  elements: Element[]
  element: Element
}): Element[] {
  if (props.elements.includes(props.element)) {
    const filtered = props.elements.filter(element => element !== props.element)
    return filtered
  } else {
    const added = [...props.elements, props.element]
    return added
  }
}

const authListContext = contextCreator({
  name: 'Auth List',
  useValue: () => {
    const [episodesOpened, setEpisodesOpened] = useState<boolean>()
    const [openedChoiceIds, setOpenedChoiceIds] = useState<Array<Id<'choices'>>>([])
    const [openedImportIds, setOpenedImportIds] = useState<Array<Id<'imports'>>>([])
    const [itemsOpened, setItemsOpened] = useState(false)
    const toggleChoice = useCallback((props: {
      choiceId: Id<'choices'>
    }) => {
      const toggled = toggleElement({
        elements: openedChoiceIds,
        element: props.choiceId
      })
      setOpenedChoiceIds(toggled)
    }, [openedChoiceIds])
    const toggleImport = useCallback((props: {
      importId: Id<'imports'>
    }) => {
      const toggled = toggleElement({
        elements: openedImportIds,
        element: props.importId
      })
      setOpenedImportIds(toggled)
    }, [openedImportIds])
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
      openedChoiceIds,
      openedImportIds,
      itemsOpened,
      toggleChoice,
      toggleImport,
      toggleEpisodes,
      toggleItems
    }), [
      episodesOpened,
      openedChoiceIds,
      openedImportIds,
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
