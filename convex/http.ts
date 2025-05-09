import { httpRouter } from 'convex/server'
import authHub from './auth'

const http = httpRouter()

authHub.auth.addHttpRoutes(http)

export default http
