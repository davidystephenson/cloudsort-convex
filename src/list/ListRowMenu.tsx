import { JSX } from 'react'
import { MenuRobe } from 'robes'
import PrivateListItems from './PrivateListItems'
import ListLinkMenuItem from './ListLinkMenuItem'
import authContext from '../auth/authContext'
import userContext from '../user/userContext'

export default function ListRowMenu (props: {
  debug?: boolean
}): JSX.Element {
  const auth = authContext.use()
  const user = userContext.use()
  if (props.debug === true) {
    console.debug('auth user', auth.user)
    console.debug('row user', user)
  }
  if (auth.user._id !== user._id) {
    return <></>
  }
  return (
    <MenuRobe>
      <ListLinkMenuItem />
      <PrivateListItems />
    </MenuRobe>
  )
}
