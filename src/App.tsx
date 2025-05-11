import { ConvexReactClient } from 'convex/react'
import { ConvexAuthProvider } from '@convex-dev/auth/react'
import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './route/Router'
import { RobesProvider } from 'robes'
import { Container } from '@chakra-ui/react'
import LayoutNavbar from './layout/LayoutNavbar'
import authContext from './auth/authContext'

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL)

export default function App (): ReactNode {
  return (
    <BrowserRouter>
      <RobesProvider>
        <ConvexAuthProvider client={convex}>
          <authContext.Provider>
            <Container pt='10px'>
              <LayoutNavbar />
              <Router />
            </Container>
          </authContext.Provider>
        </ConvexAuthProvider>
      </RobesProvider>
    </BrowserRouter>
  )
}
