import { JSX } from 'react'
import { MenuItem } from '@chakra-ui/react'
import { MdPublic } from 'react-icons/md'
import publishListContext from './publishListContext'

export default function PublishListItem (): JSX.Element {
  const publishList = publishListContext.use()
  function publish (): void {
    void publishList.act()
  }
  return (
    <MenuItem icon={<MdPublic />} onClick={publish}>
      Publish
    </MenuItem>
  )
}
