import { JSX } from 'react'
import { MenuRobe } from 'robes'
import PrivateListItems from './PrivateListItems'
import ListLinkMenuItem from './ListLinkMenuItem'
import authContext from '../auth/authContext'
import userContext from '../user/userContext'

export default function ListRowMenu (props: {
  debug?: boolean
}): JSX.Element {
  const auth = authContext.useMaybe()
  const user = userContext.use()
  if (props.debug === true) {
    console.debug('auth', auth)
    console.debug('row user', user)
  }
  if (auth.value?._id !== user._id) {
    return <></>
  }
  return (
    <MenuRobe>
      <ListLinkMenuItem />
      <PrivateListItems />
    </MenuRobe>
  )
}
