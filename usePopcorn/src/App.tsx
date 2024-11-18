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

// UI COMPONENTS
import Loader from './components/loader.component'
import ErrorMessage from './components/error.component'

// TYPES
import { MovieData, WatchedData } from '@/types/types'

const OMDb_URI = `http://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_OMDB_KEY
}`

export default function App() {
  const [movies, setMovies] = useState<MovieData[]>([])
  const [watched, setWatched] = useState<WatchedData[]>([])

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const [query, setQuery] = useState<string>('interstellar')

  useEffect(() => {
    async function fetchMovies() {
      if (query.length < 3) return

      setError('')
      setIsLoading(true)

      try {
        const res = await fetch(`${OMDb_URI}&s=${query}`)

        if (!res.ok) throw new Error('Something went wrong!')

        const data = await res.json()

        if (data.Response === 'False') throw new Error(data.Error)

        setMovies(data.Search)
      } catch (error) {
        if (error instanceof Error) setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovies()
  }, [query])

  return (
    <>
      {/* NAV */}
      <Nav>
        {/* SEARCH BAR */}
        <Search query={query} setQuery={setQuery} />

        {/* NUM RESULTS */}
        <NumResults movies={movies} />
      </Nav>

      {/* MAIN */}
      <Main>
        {/* SEARCH RESULTS BOX */}
        <Box>
          {isLoading && <Loader />}

          {!isLoading && !error && <ResultsMovieList movies={movies} />}

          {error && <ErrorMessage message={error} />}
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
