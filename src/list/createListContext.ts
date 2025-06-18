import { api } from '../../convex/_generated/api'
import mutationContext from '../arched/mutationContext'

const createListContext = mutationContext({
  name: 'createList',
  mutation: api.createList.default
})
export default createListContext
