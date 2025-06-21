import { JSX } from 'react'
import followContext from './followContext'
import FollowItem from './FollowItem'
import UnfollowItem from './UnfollowItem'
import unfollowContext from './unfollowContext'
import authContext from '../auth/authContext'
import userContext from '../user/userContext'

export default function FollowingItem (): JSX.Element {
  const auth = authContext.data.useMaybe()
  const user = userContext.useMaybe()
  console.log('user', user)
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
