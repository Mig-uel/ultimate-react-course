import { Outlet } from 'react-router'
import { Map, Sidebar } from '../components'
import styles from '../styles/app-layout.module.css'

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <Outlet />
    </div>
  )
}
export default AppLayout
