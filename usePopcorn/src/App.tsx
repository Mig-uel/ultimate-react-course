import { useEffect, useState } from 'react'

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
import MovieDetails from './components/main/movie-details.component'

// TYPES
import type { MovieData, WatchedData } from '@/types/types'

const OMDb_URI = `http://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_OMDB_KEY
}`

export default function App() {
  const [movies, setMovies] = useState<MovieData[]>([])
  const [watched, setWatched] = useState<WatchedData[]>([])

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const [query, setQuery] = useState<string>('interstellar')

  const [selectedId, setSelectedId] = useState<string | null>(null)

  // SELECT MOVIE HANDLER
  const handleSelectMovie = (id: string) =>
    setSelectedId((prevId) => (prevId === id ? null : id))

  // CLOSE SELECTED MOVIE
  const handleCloseSelectedMovie = () => setSelectedId(null)

  // HANDLE ADD WATCHED MOVIE
  const handleAddWatchedMovie = (movie: WatchedData) => {
    setWatched((prev) => [...prev, movie])

    localStorage.setItem('watched', JSON.stringify([...watched, movie]))
  }

  // HANDLE DELETE WATCHED MOVIE
  const handleDeleteWatchedMovie = (id: string) =>
    setWatched((prev) => prev.filter((movie) => movie.imdbID !== id))

  useEffect(() => {
    const controller = new AbortController()

    async function fetchMovies() {
      setError('')
      setIsLoading(true)

      try {
        const res = await fetch(`${OMDb_URI}&s=${query}`, {
          signal: controller.signal,
        })

        if (!res.ok) throw new Error('Something went wrong!')

        const data = await res.json()

        if (data.Response === 'False') {
          throw new Error(data.Error)
        }

        setMovies(data.Search)
        setError('')
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === 'AbortError') return

          setError(error.message)
        }
      } finally {
        setIsLoading(false)
      }
    }

    if (query.length < 3) {
      setMovies([])
      setError('')
      return
    }

    handleCloseSelectedMovie()
    fetchMovies()

    return () => {
      controller.abort()
    }
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

          {!isLoading && !error && (
            <ResultsMovieList
              movies={movies}
              handleSelectMovie={handleSelectMovie}
            />
          )}

          {error && <ErrorMessage message={error} />}
        </Box>

        {/* WATCHED BOX */}
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              handleCloseSelectedMovie={handleCloseSelectedMovie}
              handleAddWatchedMovie={handleAddWatchedMovie}
              watched={watched}
              key={selectedId}
            />
          ) : (
            <>
              {/* WATCHED SUMMARY */}
              <WatchedSummary watched={watched} />

              {/* WATCHED MOVIE LIST */}
              <WatchedMovieList
                watched={watched}
                handleDeleteWatchedMovie={handleDeleteWatchedMovie}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  )
}
