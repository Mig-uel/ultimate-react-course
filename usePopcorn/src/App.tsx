import { useState } from 'react'
import { tempMovieData, tempWatchedData } from './db'

import Box from './components/box.component'

// NAV COMPONENTS
import Nav from '@/components/nav/nav.component'
import Search from '@/components/nav/search.component'
import NumResults from '@/components/nav/num-results.component'

// MAIN COMPONENTS
import Main from '@/components/main/main.component'
import ResultsMovieList from '@/components/main/results-movie-list.component'
import WatchedSummary from '@/components/main/watched-summary.component'
import WatchedMovieList from '@/components/main/watched-movie-list.component'

export default function App() {
  const [movies, setMovies] = useState(tempMovieData)
  const [watched, setWatched] = useState(tempWatchedData)

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
        <Box>
          <ResultsMovieList movies={movies} />
        </Box>

        {/* WATCHED BOX */}
        <Box>
          <>
            {/* WATCHED SUMMARY */}
            <WatchedSummary watched={watched} />

            {/* WATCHED MOVIE LIST */}
            <WatchedMovieList watched={watched} />
          </>
        </Box>
      </Main>
    </>
  )
}
