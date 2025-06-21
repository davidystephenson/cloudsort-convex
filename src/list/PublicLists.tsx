import { Heading, HStack } from '@chakra-ui/react'
import { JSX } from 'react'
import { MdPublic } from 'react-icons/md'
import PublicListsTable from './PublicListsTable'
import { RelatedList } from './listTypes'

export default function PublicLists (props: {
  docs?: RelatedList[]
}): JSX.Element {
  if (props.docs == null || props.docs.length === 0) {
    return <></>
  }
  return (
    <>
      <Heading size='md'>
        <HStack><span>Public</span><MdPublic /></HStack>
      </Heading>
      <PublicListsTable docs={props.docs} />
    </>
  )
}
