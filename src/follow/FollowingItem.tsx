import { JSX } from 'react'
import followContext from './followContext'
import FollowItem from './FollowItem'
import UnfollowItem from './UnfollowItem'
import unfollowContext from './unfollowContext'
import userBaseContext from '../user/userBaseContext'

export default function FollowingItem (props: {
  follow: boolean
  unfollow: boolean
}): JSX.Element {
  const userBase = userBaseContext.use()
  if (props.follow) {
    return (
      <followContext.Provider args={{ userId: userBase._id }}>
        <FollowItem />
      </followContext.Provider>
    )
  }
  if (props.unfollow) {
    return (
      <unfollowContext.Provider args={{ userId: userBase._id }}>
        <UnfollowItem />
      </unfollowContext.Provider>
    )
  }
  return <></>
}
