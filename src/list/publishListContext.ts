import { api } from '../../convex/_generated/api'
import mutationArgsContext from '../arched/mutationArgsContext'

const publishListContext = mutationArgsContext({
  name: 'Publish List',
  mutation: api.publishList.default
})
export default publishListContext
