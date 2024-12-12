import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { AppLayout, Home } from './ui'
import Menu from './features/menu/menu'
import Cart from './features/cart/cart'
import Order from './features/order/order'
import CreateOrder from './features/order/create-order'

/* Loaders */
import menuLoader from './features/menu/loader'

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
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
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
