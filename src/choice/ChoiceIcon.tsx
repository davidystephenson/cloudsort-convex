import { JSX } from 'react'
import { FaCheck } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

export default function ChoiceIcon (props: {
  chosen: boolean
}): JSX.Element {
  if (props.chosen) {
    return <FaCheck />
  }
  return <AiOutlineClose />
}
