import { ExtendedMovieData } from '@/types/types'
import { useEffect, useState } from 'react'
import StarRating from '../star-rating/star-rating.component'

const OMDb_URI = `http://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_OMDB_KEY
}`

const MovieDetails = ({
  selectedId,
  handleCloseSelectedMovie,
}: {
  selectedId: string
  handleCloseSelectedMovie: () => void
}) => {
  const [selectedMovieDetails, setSelectedMovieDetails] =
    useState<ExtendedMovieData | null>(null)

  useEffect(() => {
    const getSelectedMovieDetails = async () => {
      const res = await fetch(`${OMDb_URI}&i=${selectedId}&plot=full`)
      const data = await res.json()

      setSelectedMovieDetails(data)
    }

    getSelectedMovieDetails()
  }, [selectedId])

  return (
    <div className='details'>
      <header>
        <button className='btn-back' onClick={handleCloseSelectedMovie}>
          &times;
        </button>

        <img
          src={selectedMovieDetails?.Poster}
          alt={`Poster of ${selectedMovieDetails?.Title}`}
        />

        <div className='details-overview'>
          <h2>{selectedMovieDetails?.Title}</h2>
          <p>
            {selectedMovieDetails?.Released} &bull;{' '}
            {selectedMovieDetails?.Runtime}
          </p>
          <p>{selectedMovieDetails?.Genre}</p>
          <p>
            <span>🌟</span> {selectedMovieDetails?.imdbRating} IMDb rating
          </p>
        </div>
      </header>

      <section>
        <div className='rating'>
          <StarRating maxRating={10} size={24} />
        </div>
        <p>
          <em>{selectedMovieDetails?.Plot}</em>
        </p>

        <p>Starring {selectedMovieDetails?.Actors}</p>

        <p>Directed by {selectedMovieDetails?.Director}</p>
      </section>
    </div>
  )
}
export default MovieDetails
