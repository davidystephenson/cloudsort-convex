import { api } from '../../convex/_generated/api'
import mutationArgsContext from '../arched/mutationArgsContext'

const unpublishListContext = mutationArgsContext({
  name: 'Unpublish List',
  mutation: api.unpublishList.default
})
export default unpublishListContext
