import { useState } from 'react'
import { tempWatchedData } from '../../db'
import WatchedSummary from './watched-summary.component'
import WatchedMovieList from './watched-movie-list.component'

const WatchedBox = () => {
  const [isOpen2, setIsOpen2] = useState(true)
  const [watched, setWatched] = useState(tempWatchedData)

  return (
    <div className='box'>
      <button
        className='btn-toggle'
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? '–' : '+'}
      </button>
      {isOpen2 && (
        <>
          {/* WATCHED SUMMARY */}
          <WatchedSummary watched={watched} />

          {/* WATCHED MOVIE LIST */}
          <WatchedMovieList watched={watched} />
        </>
      )}
    </div>
  )
}
export default WatchedBox
