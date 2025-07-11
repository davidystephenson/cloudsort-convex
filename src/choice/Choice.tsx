import { JSX } from 'react'
import listContext from '../list/listContext'
import { HStack } from '@chakra-ui/react'
import optionContext from '../option/optionContext'
import Option from '../option/Option'

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
      <optionContext.Provider hotkey='a' uid={list.a}>
        <Option />
      </optionContext.Provider>
      <optionContext.Provider hotkey='b' uid={list.b}>
        <Option />
      </optionContext.Provider>
    </HStack>
  )
}
