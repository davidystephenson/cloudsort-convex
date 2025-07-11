import { api } from '../../convex/_generated/api'
import mutationContext from '../arched/mutationContext'

const renameListContext = mutationContext({
  name: 'Rename List',
  mutation: api.renameList.default
})
export default renameListContext
