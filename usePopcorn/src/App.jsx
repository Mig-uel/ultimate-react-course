import { useState } from 'react'
import { tempMovieData } from './db'

// NAV COMPONENTS
import Nav from './components/nav/nav.component'
import Search from './components/nav/search.component'
import NumResults from './components/nav/num-results.component'

// MAIN COMPONENTS
import Main from './components/main/main.component'
import ResultsBox from './components/main/results-box.component'
import WatchedBox from './components/main/watched-box.component'
import MovieList from './components/main/movie-list.component'

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
      <Main>
        {/* SEARCH RESULTS BOX */}
        <ResultsBox>
          <MovieList movies={movies} />
        </ResultsBox>

        {/* WATCHED BOX */}
        <WatchedBox />
      </Main>
    </>
  )
}
