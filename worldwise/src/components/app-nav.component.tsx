import { NavLink } from 'react-router'
import styles from '../styles/app-nav.module.css'

const AppNav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to='cities'>Cities</NavLink>
        </li>
        <li>
          <NavLink to='countries'>Countries</NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default AppNav
