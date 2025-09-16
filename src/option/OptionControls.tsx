import { HStack } from '@chakra-ui/react'
import { JSX } from 'react'
import ItemMenu from '../item/ItemMenu'
import optionContext from './optionContext'
import { ButtonRobe } from 'robes'
import chooseContext from '../choice/chooseContext'
import { useHotkeys } from 'react-hotkeys-hook'
import ItemLabel from '../item/ItemLabel'

export default function OptionControls (): JSX.Element {
  const choose = chooseContext.use()
  const option = optionContext.use()
  const first = option.hotkey === 'a'
  function handleClick (): void {
    void choose.act()
  }
  useHotkeys(option.hotkey, handleClick)
  const button = (
    <ButtonRobe onClick={handleClick} width='100%' whiteSpace='normal' minHeight='var(--chakra-sizes-8)' height='auto'>
      [{option.hotkey}]
      &thinsp;
      <ItemLabel />
    </ButtonRobe>
  )
  if (first) {
    return (
      <HStack>
        <ItemMenu />
        {button}
      </HStack>
    )
  }
  return (
    <HStack>
      {button}
      <ItemMenu />
    </HStack>
  )
}
