import Logo from './logo.component'

// COMPONENT COMPOSITION
const Nav = ({ children }) => {
  return (
    <nav className='nav-bar'>
      <Logo />
      {children}
    </nav>
  )
}
export default Nav
