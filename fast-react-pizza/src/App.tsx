import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './ui'
import Menu from './features/menu/menu'
import Cart from './features/cart/cart'
import Order from './features/order/order'
import CreateOrder from './features/order/create-order'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/order/new',
    element: <CreateOrder />,
  },
  {
    path: '/order/:orderId',
    element: <Order />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
