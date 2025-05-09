import { ConvexReactClient } from 'convex/react'
import { ConvexAuthProvider } from '@convex-dev/auth/react'
import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './route/Router'
import { LayoutRobe, RobesProvider } from 'robes'
import LayoutNavbar from './layout/LayoutNavbar'

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL)

export default function App (): ReactNode {
  return (
    <BrowserRouter>
      <RobesProvider>
        <ConvexAuthProvider client={convex}>
          <LayoutRobe
            navbar={{
              children: <LayoutNavbar />
            }}
          >
            <Router />
          </LayoutRobe>
        </ConvexAuthProvider>
      </RobesProvider>
    </BrowserRouter>
  )
}
