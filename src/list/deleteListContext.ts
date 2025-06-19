import { api } from '../../convex/_generated/api'
import mutationArgsContext from '../arched/mutationArgsContext'

const deleteListContext = mutationArgsContext({
  name: 'Delete List',
  mutation: api.deleteList.default
})
export default deleteListContext
