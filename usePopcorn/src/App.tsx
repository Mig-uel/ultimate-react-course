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

// CUSTOM HOOKS
import { useMovies } from './hooks/useMovies'

// TYPES
import type { WatchedData } from '@/types/types'

// MAIN APP
export default function App() {
  const [query, setQuery] = useState<string>('interstellar')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const { error, isLoading, movies } = useMovies(
    query,
    handleCloseSelectedMovie
  )

  const [watched, setWatched] = useState<WatchedData[]>(() => {
    const storedValue = JSON.parse(
      localStorage.getItem('watched')!
    ) as WatchedData[]

    return storedValue || []
  })

  // SELECT MOVIE HANDLER
  const handleSelectMovie = (id: string) =>
    setSelectedId((prevId) => (prevId === id ? null : id))

  // CLOSE SELECTED MOVIE
  function handleCloseSelectedMovie() {
    return setSelectedId(null)
  }

  // HANDLE ADD WATCHED MOVIE
  const handleAddWatchedMovie = (movie: WatchedData) => {
    setWatched((prev) => [...prev, movie])
  }

  // HANDLE DELETE WATCHED MOVIE
  const handleDeleteWatchedMovie = (id: string) =>
    setWatched((prev) => prev.filter((movie) => movie.imdbID !== id))

  // update local storage after watched state has been updated
  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify(watched))
  }, [watched])

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
