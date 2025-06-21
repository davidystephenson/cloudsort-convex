import contextCreator from 'context-creator'
import { UserBase } from '../list/listTypes'

const userBaseContext = contextCreator({
  name: 'userBase',
  useValue: (props: {
    user: UserBase
  }) => {
    return props.user
  }
})
export default userBaseContext
