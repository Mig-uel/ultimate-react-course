import { Outlet } from 'react-router'
import { AppNav, Logo } from '../components'

import styles from '../styles/side-bar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Miguel.
        </p>
      </footer>
    </div>
  )
}
export default Sidebar
