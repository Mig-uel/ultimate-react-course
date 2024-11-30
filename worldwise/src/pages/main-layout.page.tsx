import { Outlet } from 'react-router'
import { Nav } from '../components'

const MainLayout = () => {
  return (
    <div>
      <Nav />

      <Outlet />
    </div>
  )
}
export default MainLayout
