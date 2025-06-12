import { ConvexReactClient } from 'convex/react'
import { ConvexAuthProvider } from '@convex-dev/auth/react'
import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './route/Router'
import { RobesProvider } from 'robes'
import { Container, Stack } from '@chakra-ui/react'
import LayoutNavbar from './layout/LayoutNavbar'
import authContext from './auth/authContext'
import AuthConsumer from './auth/AuthConsumer'

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL)

export default function App (): ReactNode {
  return (
    <BrowserRouter>
      <RobesProvider>
        <ConvexAuthProvider client={convex}>
          <authContext.Provider>
            <Container pt='10px'>
              <AuthConsumer>
                <Stack>
                  <LayoutNavbar />
                  <Router />
                </Stack>
              </AuthConsumer>
            </Container>
          </authContext.Provider>
        </ConvexAuthProvider>
      </RobesProvider>
    </BrowserRouter>
  )
}
