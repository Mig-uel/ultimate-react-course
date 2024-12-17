import {
  ActionFunctionArgs,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import { AppLayout, ErrorElement, Home, Loader } from './ui'
import Menu from './features/menu/menu'
import Cart from './features/cart/cart'
import Order from './features/order/order'
import CreateOrder from './features/order/create-order'

/* Loaders */
import menuLoader from './features/menu/loader'
import orderLoader from './features/order/loader'

/* Actions */
import orderAction from './features/order/action'

/* Redux Store */
import store from './store'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorElement />,

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
        hydrateFallbackElement: <Loader />,
        errorElement: <ErrorElement />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: ({ request }: ActionFunctionArgs) =>
          orderAction(request, store),
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        hydrateFallbackElement: <Loader />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
