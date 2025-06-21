import contextCreator from 'context-creator'
import { UserBase } from '../list/listTypes'

const userContext = contextCreator({
  name: 'user',
  useValue: (props: {
    doc: UserBase
  }) => {
    return props.doc
  }
})

export default userContext
