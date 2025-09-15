import { ReactNode } from 'react'
import { ButtonClinkRobe } from 'clink-robes'
import { Badge, Heading, Stack } from '@chakra-ui/react'
import HeaderLoaded from '../header/HeaderLoaded'

export default function LayoutNotFound (props: {
  id: string
  label: string
}): ReactNode {
  return (
    <>
      <HeaderLoaded />
      <Stack>
        <Badge fontSize='md' w='fit-content'>{props.id}</Badge>
        <Heading size='md'>{props.label} not found</Heading>
        <ButtonClinkRobe to='/'>
          Lists
        </ButtonClinkRobe>
      </Stack>
    </>
  )
}
