import { Outlet } from 'react-router-dom'
import Header from './Header'
import CartOverview from '../features/cart/cart-overview'

const AppLayout = () => {
  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto]'>
      <Header />

      <div className='overflow-y-scroll'>
        <main className='mx-auto max-w-3xl'>
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  )
}
export default AppLayout
