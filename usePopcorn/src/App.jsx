import { useState } from 'react'
import { tempMovieData } from './db'

// NAV COMPONENTS
import Nav from './components/nav/nav.component'
import Logo from './components/nav/logo.component'
import Search from './components/nav/search.component'
import NumResults from './components/nav/num-results.component'

// MAIN COMPONENTS
import Main from './components/main/main.component'

export default function App() {
  const [movies, setMovies] = useState(tempMovieData)

  return (
    <>
      {/* NAV */}
      <Nav>
        {/* SEARCH BAR */}
        <Search />

        {/* NUM RESULTS */}
        <NumResults movies={movies} />
      </Nav>

      {/* MAIN */}
      <Main movies={movies} />
    </>
  )
}
