import { JSX } from 'react'
import followContext from './followContext'
import FollowItem from './FollowItem'
import UnfollowItem from './UnfollowItem'
import userIdContext from '../user/userIdContext'
import unfollowContext from './unfollowContext'

export default function FollowingItem (props: {
  follow: boolean
  unfollow: boolean
}): JSX.Element {
  const userId = userIdContext.use()
  if (props.follow) {
    return (
      <followContext.Provider args={{ userId }}>
        <FollowItem />
      </followContext.Provider>
    )
  }
  if (props.unfollow) {
    return (
      <unfollowContext.Provider args={{ userId }}>
        <UnfollowItem />
      </unfollowContext.Provider>
    )
  }
  return <></>
}
