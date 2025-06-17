import { Heading } from '@chakra-ui/react'
import { JSX, ReactNode } from 'react'
import ListsTable from './ListsTable'
import { ListTableProps } from './listTypes'

export default function ListsSection (props: ListTableProps & {
  title: ReactNode
}): JSX.Element {
  const { title, ...rest } = props
  if (rest.docs == null || rest.docs.length === 0) {
    return <></>
  }
  return (
    <>
      <Heading size='md'>{title}</Heading>
      <ListsTable {...rest} />
    </>
  )
}
