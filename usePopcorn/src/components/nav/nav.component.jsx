import Logo from './logo.component'
import NumResults from './num-results.component'
import Search from './search.component'

const Nav = ({ movies }) => {
  return (
    <nav className='nav-bar'>
      {/* LOGO */}
      <Logo />

      {/* SEARCH BAR */}
      <Search />

      {/* NUM RESULTS */}
      <NumResults movies={movies} />
    </nav>
  )
}
export default Nav
