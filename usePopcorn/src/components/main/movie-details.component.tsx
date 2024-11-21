import { useEffect, useState } from 'react'
import StarRating from '../star-rating/star-rating.component'
import Loader from '../loader.component'

import type { ExtendedMovieData, WatchedData } from '@/types/types'

const OMDb_URI = `http://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_OMDB_KEY
}`

const MovieDetails = ({
  selectedId,
  handleCloseSelectedMovie,
  handleAddWatchedMovie,
  watched,
}: {
  selectedId: string
  handleCloseSelectedMovie: () => void
  handleAddWatchedMovie: (movie: WatchedData) => void
  watched: WatchedData[]
}) => {
  const [userRating, setUserRating] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedMovieDetails, setSelectedMovieDetails] =
    useState<ExtendedMovieData | null>(null)

  const isWatched = watched.find((movie) => movie.imdbID === selectedId)

  // HANDLE ADD TO WATCHED
  const handleAdd = () => {
    if (!userRating) return

    const movie: WatchedData = {
      imdbID: selectedMovieDetails?.imdbID as string,
      imdbRating: Number(selectedMovieDetails?.imdbRating),
      Poster: selectedMovieDetails?.Poster as string,
      runtime: Number(selectedMovieDetails?.Runtime.split(' ')[0]),
      Title: selectedMovieDetails?.Title as string,
      userRating,
      Year: selectedMovieDetails?.Released as string,
    }

    handleAddWatchedMovie(movie)
    handleCloseSelectedMovie()
  }

  useEffect(() => {
    const getSelectedMovieDetails = async () => {
      setIsLoading(true)
      const res = await fetch(`${OMDb_URI}&i=${selectedId}&plot=full`)
      const data = await res.json()

      setSelectedMovieDetails(data)
      setIsLoading(false)
    }

    getSelectedMovieDetails()
  }, [selectedId])

  return (
    <div className='details'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
              {isWatched ? (
                <p>You rated this movie {isWatched.userRating} ⭐</p>
              ) : (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />

                  <button className='btn-add' onClick={handleAdd}>
                    &#43; Add to List
                  </button>
                </>
              )}
            </div>

            <p>
              <em>{selectedMovieDetails?.Plot}</em>
            </p>

            <p>Starring {selectedMovieDetails?.Actors}</p>

            <p>Directed by {selectedMovieDetails?.Director}</p>
          </section>
        </>
      )}
    </div>
  )
}
export default MovieDetails
