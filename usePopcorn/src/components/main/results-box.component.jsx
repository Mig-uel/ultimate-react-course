import { useState } from 'react'
import MovieList from './movie-list.component'

const ResultsBox = ({ movies }) => {
  const [isOpen1, setIsOpen1] = useState(true)

  return (
    <div className='box'>
      <button
        className='btn-toggle'
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? '–' : '+'}
      </button>

      {/* MOVIE LIST */}
      {isOpen1 && <MovieList movies={movies} />}
    </div>
  )
}
export default ResultsBox
