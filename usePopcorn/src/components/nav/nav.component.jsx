import Logo from './logo.component'
import NumResults from './num-results.component'
import Search from './search.component'

const Nav = () => {
  return (
    <nav className='nav-bar'>
      {/* LOGO */}
      <Logo />

      {/* SEARCH BAR */}
      <Search />

      {/* NUM RESULTS */}
      <NumResults />
    </nav>
  )
}
export default Nav
