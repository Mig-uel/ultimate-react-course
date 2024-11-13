import { useState } from 'react'
import MovieList from './movie-list.component'

const ResultsList = () => {
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
      {isOpen1 && <MovieList />}
    </div>
  )
}
export default ResultsList
