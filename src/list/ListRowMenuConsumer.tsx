import { JSX } from 'react'
import { MenuRobe } from 'robes'
import PrivateListItems from './PrivateListItems'
import ListLinkMenuItems from './ListLinkMenuItems'
import authContext from '../auth/authContext'
import userContext from '../user/userContext'
import deleteListContext from './deleteListContext'

export default function ListRowMenu (props: {
  debug?: boolean
}): JSX.Element {
  const _delete = deleteListContext.use()
  const auth = authContext.useMaybe()
  const user = userContext.use()
  if (props.debug === true) {
    console.debug('auth', auth)
    console.debug('row user', user)
  }
  return (
    <MenuRobe loading={_delete.acting}>
      <ListLinkMenuItems />
      <PrivateListItems />
    </MenuRobe>
  )
}
