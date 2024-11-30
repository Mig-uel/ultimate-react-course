import { Outlet } from 'react-router'
import { AppNav } from '../components'

const AppLayout = () => {
  return (
    <div>
      <AppNav />

      <Outlet />
    </div>
  )
}
export default AppLayout
