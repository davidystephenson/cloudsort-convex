import { JSX } from 'react'
import listContext from '../list/listContext'
import { HStack } from '@chakra-ui/react'
import optionContext from '../option/optionContext'
import Option from '../option/Option'
import chooseContext from './chooseContext'

export default function Choice (): JSX.Element {
  const list = listContext.use()
  if (list.a == null) {
    return <></>
  }
  if (list.b == null) {
    throw new Error('List b is null')
  }
  return (
    <HStack mx='auto'>
      <chooseContext.Provider
        args={{ listId: list._id, itemUid: list.a, aChosen: true }}
      >
        <optionContext.Provider hotkey='a' uid={list.a}>
          <Option />
        </optionContext.Provider>
      </chooseContext.Provider>
      <chooseContext.Provider
        args={{ listId: list._id, itemUid: list.b, aChosen: false }}
      >
        <optionContext.Provider hotkey='b' uid={list.b}>
          <Option />
        </optionContext.Provider>
      </chooseContext.Provider>
    </HStack>
  )
}
