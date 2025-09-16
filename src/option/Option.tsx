import { JSX } from 'react'
import optionContext from './optionContext'
import listContext from '../list/listContext'
import { ClinkRobe } from 'clink-robes'
import { HStack, VStack } from '@chakra-ui/react'
import { RiExternalLinkLine } from 'react-icons/ri'
import OptionControls from './OptionControls'
import itemContext from '../item/itemContext'

export default function Option (): JSX.Element {
  const list = listContext.use()
  const option = optionContext.use()
  const listItem = list.listItems.find((item) => item.itemUid === option.uid)
  if (listItem == null) {
    throw new Error('List item not found')
  }
  const url = `https://imdb.com/title/${listItem.item.uid}`
  return (
    <itemContext.Provider item={listItem.item}>
      <VStack>
        <OptionControls />
        <ClinkRobe
          to={url}
          isExternal
        >
          <HStack>
            <span>[{option.hotkey}] imdb</span>
            <RiExternalLinkLine />
          </HStack>
        </ClinkRobe>
      </VStack>
    </itemContext.Provider>
  )
}
