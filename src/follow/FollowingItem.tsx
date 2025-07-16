import { JSX } from 'react'
import followContext from './followContext'
import FollowItem from './FollowItem'
import UnfollowItem from './UnfollowItem'
import unfollowContext from './unfollowContext'
import getAuthContext from '../auth/getAuthContext'
import userContext from '../user/userContext'

export default function FollowingItem (): JSX.Element {
  const auth = getAuthContext.data.useMaybe()
  const user = userContext.useMaybe()
  if (!user.provided) {
    return <></>
  }
  const follow = auth.provided && user.value._id !== auth.value._id && !user.value.follower
  if (follow) {
    return (
      <followContext.Provider args={{ userId: user.value._id }}>
        <FollowItem />
      </followContext.Provider>
    )
  }
  if (user.value.follower) {
    return (
      <unfollowContext.Provider args={{ userId: user.value._id }}>
        <UnfollowItem />
      </unfollowContext.Provider>
    )
  }
  return <></>
}
