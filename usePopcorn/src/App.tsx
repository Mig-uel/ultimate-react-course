import { useEffect, useState } from 'react'
import { tempMovieData, tempWatchedData } from '@/db'

// BOX
import Box from '@/components/box.component'

// NAV COMPONENTS
import Nav from '@/components/nav/nav.component'
import Search from '@/components/nav/search.component'
import NumResults from '@/components/nav/num-results.component'

// MAIN COMPONENTS
import Main from '@/components/main/main.component'
import ResultsMovieList from '@/components/main/results-movie-list.component'
import WatchedSummary from '@/components/main/watched-summary.component'
import WatchedMovieList from '@/components/main/watched-movie-list.component'

// LOADING COMPONENT
import Loader from './components/loader.component'

// TYPES
import { MovieData, WatchedData } from '@/types/types'

const OMDb_URI = `http://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_OMDB_KEY
}`

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [movies, setMovies] = useState<MovieData[]>([])
  const [watched, setWatched] = useState<WatchedData[]>([])

  useEffect(() => {
    let controller: AbortController

    async function fetchMovies() {
      setIsLoading(true)

      controller = new AbortController()
      const signal = controller.signal

      const res = await fetch(`${OMDb_URI}&s=interstellar`, {
        signal,
      })
      const data = await res.json()

      setMovies(data.Search)
      setIsLoading(false)
    }

    setTimeout(() => controller.abort(), 5000)
    fetchMovies()
  }, [])

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
          {isLoading ? <Loader /> : <ResultsMovieList movies={movies} />}
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
