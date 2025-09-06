import { JSX } from 'react'
import userContext from './userContext'
import UserFollowsBadge from './UserFollowsBadge'
import UserFollowingBadge from './UserFollowingBadge'

export default function UserLabel (): JSX.Element {
  const user = userContext.use()
  if (user.followed === true && user.follower === true) {
    return (
      <>
        <UserFollowsBadge />
        <UserFollowingBadge />
      </>
    )
  }
  if (user.followed === true) {
    return <UserFollowsBadge />
  }
  if (user.follower === true) {
    return <UserFollowingBadge />
  }
  return <></>
}
