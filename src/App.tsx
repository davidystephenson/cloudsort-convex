import { ConvexReactClient } from 'convex/react'
import { ConvexAuthProvider } from '@convex-dev/auth/react'
import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './route/Router'
import { RobesProvider } from 'robes'
import { Container, Stack } from '@chakra-ui/react'
import LayoutNavbar from './layout/LayoutNavbar'
import AuthController from './auth/AuthController'

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL)

export default function App (): ReactNode {
  return (
    <BrowserRouter>
      <RobesProvider>
        <ConvexAuthProvider client={convex}>
          <Container pt='10px'>
            <AuthController>
              <Stack>
                <LayoutNavbar />
                <Router />
              </Stack>
            </AuthController>
          </Container>
        </ConvexAuthProvider>
      </RobesProvider>
    </BrowserRouter>
  )
}
