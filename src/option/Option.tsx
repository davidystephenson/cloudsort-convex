import { JSX } from 'react'
import optionContext from './optionContext'
import listContext from '../list/listContext'
import { ClinkRobe } from 'clink-robe'
import { HStack, VStack } from '@chakra-ui/react'
import { RiExternalLinkLine } from 'react-icons/ri'
import OptionControls from './OptionControls'

export default function Option (): JSX.Element {
  const list = listContext.use()
  const option = optionContext.use()
  console.log('list', list)
  const listItem = list.listItems.find((item) => item.itemUid === option.uid)
  if (listItem == null) {
    throw new Error('List item not found')
  }
  const url = `https://imdb.com/title/${listItem.item.uid}`
  return (
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
  )
}
