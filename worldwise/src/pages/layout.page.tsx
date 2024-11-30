import { Outlet } from 'react-router'
import { Nav } from '../components'

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />
    </div>
  )
}
export default Layout
