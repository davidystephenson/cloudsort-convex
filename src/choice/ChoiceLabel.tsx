import { HStack } from '@chakra-ui/react'
import ChoiceIcon from './ChoiceIcon'
import { JSX } from 'react'

export default function ChoiceLabel (props: {
  chosen: boolean
  label: string
}): JSX.Element {
  return (
    <HStack spacing='4px' fontWeight='bold'>
      <ChoiceIcon chosen={props.chosen} />
      <span>{props.label}</span>
    </HStack>
  )
}
