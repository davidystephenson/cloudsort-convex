import { Heading, HStack } from '@chakra-ui/react'
import { JSX } from 'react'
import { MdPublic } from 'react-icons/md'
import { Doc } from '../../convex/_generated/dataModel'
import PublicListsTable from './PublicListsTable'

export default function PublicLists (props: {
  docs?: Array<Doc<'lists'>>
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
