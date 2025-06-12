import { JSX } from 'react'
import listContext from './listContext'
import { MenuItem } from '@chakra-ui/react'
import { MdPublic } from 'react-icons/md'

export default function PublishListItem (): JSX.Element {
  const list = listContext.use()
  function publish (): void {
    void list.publish()
  }
  return (
    <MenuItem icon={<MdPublic />} onClick={publish}>
      Publish
    </MenuItem>
  )
}
