import { JSX } from 'react'
import followContext from './followContext'
import FollowItem from './FollowItem'
import UnfollowItem from './UnfollowItem'
import unfollowContext from './unfollowContext'
import userContext from '../user/userContext'
import authContext from '../auth/authContext'

export default function FollowingItem (): JSX.Element {
  const auth = authContext.useMaybe()
  const user = userContext.use()
  const follow = auth.provided && user._id !== auth.value._id && user.follower !== true
  if (follow) {
    return (
      <followContext.Provider args={{ userId: user._id }}>
        <FollowItem />
      </followContext.Provider>
    )
  }
  if (user.follower === true) {
    return (
      <unfollowContext.Provider args={{ userId: user._id }}>
        <UnfollowItem />
      </unfollowContext.Provider>
    )
  }
  return <></>
}
