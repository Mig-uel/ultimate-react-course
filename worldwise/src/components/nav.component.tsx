import { NavLink } from 'react-router'
import styles from '../styles/nav.module.css'
import Logo from './logo.component'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to='/pricing'>Pricing</NavLink>
        </li>
        <li>
          <NavLink to='/product'>Product</NavLink>
        </li>
        <li>
          <NavLink to='/login' className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Nav