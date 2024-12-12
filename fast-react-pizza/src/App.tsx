import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './ui'
import Menu from './features/menu/menu'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
