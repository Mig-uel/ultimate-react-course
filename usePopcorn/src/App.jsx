import { useState } from 'react'
import { tempMovieData } from './db'
import Nav from './components/nav/nav.component'
import Main from './components/main/main.component'

export default function App() {
  const [movies, setMovies] = useState(tempMovieData)

  return (
    <>
      <Nav movies={movies} />

      <Main movies={movies} />
    </>
  )
}
